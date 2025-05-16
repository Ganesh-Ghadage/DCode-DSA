import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllSubmission = asyncHandler(async (req, res) => {
	const userId = req.user.id;

	const submissions = await db.Submission.findMany({
		where: {
			userId,
		},
	});

	if (!submissions) {
		throw new ApiError(400, "Submissions not found the user");
	}

	res
		.status(200)
		.json(
			new ApiResponce(200, submissions, "All submissions fetched successfully")
		);
});

export const getSubmissionForProblem = asyncHandler(async (req, res) => {
	const userId = req.user.id;
	const { problemId } = req.params;

	const submissions = await db.Submission.findMany({
		where: {
			userId,
			problemId,
		},
	});

	if (!submissions) {
		throw new ApiError(400, "Submissions not found the problem");
	}

	res
		.status(200)
		.json(
			new ApiResponce(
				200,
				submissions,
				"All submissions fetched successfully for problem"
			)
		);
});

export const getSubmissionAllForProblem = asyncHandler(async (req, res) => {
	const { problemId } = req.params;

	const submissions = await db.Submission.count({
		where: {
			problemId,
		},
	});

	if (!submissions) {
		throw new ApiError(400, "Submissions not found the problem");
	}

	res
		.status(200)
		.json(
			new ApiResponce(
				200,
				{ count: submissions },
				"All submissions fetched successfully for problem"
			)
		);
});
