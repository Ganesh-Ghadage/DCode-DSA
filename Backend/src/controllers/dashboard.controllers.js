// import { db } from "../generated/db/index.js";
import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Utility: Format contributions by date
function formatContributions(data) {
	return data.map((row) => ({
		date: row.date.toISOString().split("T")[0],
		count: Number(row.count),
	}));
}

export const userDashboard = asyncHandler(async (req, res) => {
	const userId = req.user.id;

	try {
		// 1. Recent Activity (all submissions)
		const recentActivity = await db.submission.findMany({
			where: { userId },
			orderBy: { createdAt: "desc" },
			take: 10,
			select: {
				id: true,
				status: true,
				createdAt: true,
				problem: {
					select: {
						id: true,
						title: true,
						tags: true,
						difficulty: true,
					},
				},
			},
		});

		// 2. Contributions and streaks (based on accepted submissions)
		const acceptedSubmissions = await db.submission.findMany({
			where: {
				userId,
				status: "Accepted",
			},
			select: {
				createdAt: true,
			},
		});

		const dateCountMap = {};
		acceptedSubmissions.forEach(({ createdAt }) => {
			const date = createdAt.toISOString().split("T")[0];
			dateCountMap[date] = (dateCountMap[date] || 0) + 1;
		});

		const contributions = Object.entries(dateCountMap).map(([date, count]) => ({
			date,
			count,
		}));

		// Calculate streaks
		function formatDate(date) {
			return date.toISOString().split("T")[0];
		}

		const allDateStrings = Object.keys(dateCountMap).sort();
		const dateSet = new Set(allDateStrings);

		// Calculate current streak from today backwards
		let currentStreak = 0;
		let today = new Date();
		while (true) {
			const dateStr = formatDate(today);
			if (dateSet.has(dateStr)) {
				currentStreak++;
				today.setDate(today.getDate() - 1);
			} else {
				break;
			}
		}

		// Calculate longest streak
		let longestStreak = 0;
		let streak = 0;
		let prevDate = null;

		for (const dateStr of allDateStrings) {
			const currDate = new Date(dateStr);
			if (prevDate) {
				const diff =
					(currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);
				streak = diff === 1 ? streak + 1 : 1;
			} else {
				streak = 1;
			}
			longestStreak = Math.max(longestStreak, streak);
			prevDate = currDate;
		}

		// 3. Solved problems by difficulty
		const solvedProblems = await prisma.problemSolved.findMany({
			where: {
				userId,
			},
			select: {
				problem: {
					select: {
						difficulty: true,
						tags: true,
					},
				},
			},
		});

		const byDifficulty = {
			EASY: { difficulty: "EASY", total: 0, solved: 0 },
			MEDIUM: { difficulty: "MEDIUM", total: 0, solved: 0 },
			HARD: { difficulty: "HARD", total: 0, solved: 0 },
		};

		const byTag = {};

		solvedProblems?.forEach((problem) => {
			if (
				problem?.problem?.difficulty &&
				byDifficulty[problem?.problem?.difficulty]
			) {
				byDifficulty[problem?.problem?.difficulty].solved++;
			}
			problem?.problem?.tags.forEach((tag) => {
				if (!byTag[tag]) byTag[tag] = { tag, total: 0, solved: 0 };
				byTag[tag].solved++;
			});
		});

		// 4. Total problems count by difficulty and tag
		const allProblems = await db.problem.findMany();
		allProblems.forEach((problem) => {
			if (problem.difficulty && byDifficulty[problem.difficulty]) {
				byDifficulty[problem.difficulty].total++;
			}
			problem.tags.forEach((tag) => {
				if (!byTag[tag]) byTag[tag] = { tag, total: 0, solved: 0 };
				byTag[tag].total++;
			});
		});

		// 5. Overall accepted percentage
		const allUserSubmissions = await db.submission.findMany({
			where: { userId },
			select: { status: true },
		});

		const totalSubmissions = allUserSubmissions.length;
		const acceptedCount = allUserSubmissions.filter(
			(s) => s.status === "Accepted"
		).length;
		const acceptedPercent =
			totalSubmissions > 0 ? (acceptedCount / totalSubmissions) * 100 : 0;

		// 6. Milestone
		const totalSolved = await db.problemSolved.count({
			where: { userId },
		});

		const totalProblems = await db.problem.count();
		const milestoneTarget = totalProblems;
		const milestone =
			totalSolved < milestoneTarget
				? `${
						milestoneTarget - totalSolved
				  } problems away from ${milestoneTarget}!`
				: null;

		res.status(200).json(
			new ApiResponce(
				200,
				{
					streaks: {
						current: currentStreak,
						longest: longestStreak,
					},
					contributions,
					progress: {
						byDifficulty: Object.values(byDifficulty),
						byTag: Object.values(byTag),
					},
					recentActivity,
					submissionData: {
						totalSubmissions,
						acceptedCount,
						acceptedPercent: acceptedPercent.toFixed(2),
					},
					milestones: {
						next: milestone,
						totalSolved,
						totalProblems,
					},
				},
				"Dashboard data fetched sucessfully"
			)
		);
	} catch (error) {
		console.log(error);
		throw new ApiError(500, "Error fetching dashboard data", error);
	}
});
