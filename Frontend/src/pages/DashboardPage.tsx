import React, { useEffect } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import { useNavigate } from "react-router-dom";
import ContributionGraph from "../components/ContributionGraph";
import {
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
	CartesianGrid,
} from "recharts";
import ProblemProgressCircle from "@/components/ProblemProgressCircle";
import DifficultyRadialChart from "@/components/DifficultyRadialChart";
import TagsBarChart from "@/components/TagsBarChart";
import WeeklyChart from "@/components/WeeklyChart";

const DashboardPage: React.FC = () => {
	const navigate = useNavigate();
	const { dashboardData, isLoading, fectchData } = useDashboardStore();

	useEffect(() => {
		fectchData();
	}, [fectchData]);

	if (isLoading)
		return (
			<span className="loading loading-ring loading-lg mx-auto mt-10"></span>
		);

	return (
		<div className="p-6 max-w-7xl w-full mx-auto space-y-8">
			<h1 className="text-4xl font-bold text-center mb-8">
				📊 DCode DSA Dashboard
			</h1>

			<div className="flex w-full justify-around h-fit">
				<div className="flex flex-col gap-8">
					<div className="stats shadow bg-base-200">
						<div className="stat">
							<div className="stat-title">Current Streak</div>
							<div className="stat-value text-primary">
								{dashboardData?.streaks.current} 🔥
							</div>
						</div>
						<div className="stat">
							<div className="stat-title">Longest Streak</div>
							<div className="stat-value text-secondary">
								{dashboardData?.streaks.longest ?? 0} ⚡
							</div>
						</div>
					</div>
					<div className="stats shadow bg-base-200 flex justify-center">
						<ProblemProgressCircle
							total={dashboardData?.milestones.totalProblems || 0}
							solved={dashboardData?.milestones.totalSolved || 0}
						/>
					</div>
				</div>
				<div className="w-fit">
					{dashboardData?.progress.byDifficulty && (
						<DifficultyRadialChart
							data={dashboardData?.progress.byDifficulty}
						/>
					)}
				</div>
			</div>

			<div className="w-full">
				{dashboardData?.progress.byTag && (
					<TagsBarChart data={dashboardData?.progress.byTag} />
				)}
			</div>
			<div className="card bg-base-200 shadow">
				<div className="card-body">
					<h2 className="card-title">📆 Daily Contributions</h2>
					<ContributionGraph data={dashboardData?.contributions ?? []} />
				</div>
			</div>

			{dashboardData?.contributions && (
				<WeeklyChart data={dashboardData?.contributions} />
			)}

			<div className="card bg-base-200 shadow">
				<div className="card-body">
					<h2 className="card-title">🧠 Recent Activity</h2>
					{dashboardData?.recentActivity.length === 0 ? (
						<p>No recent accepted submissions.</p>
					) : (
						<ul className="space-y-3">
							{dashboardData?.recentActivity.map((item) => (
								<li
									key={item.id}
									className="p-4 border rounded bg-base-300 hover:bg-base-200 cursor-pointer"
									onClick={() => navigate(`/problems/${item.problem.id}`)}
								>
									<div className="font-semibold text-lg">
										{item.problem.title}
									</div>
									<div className="text-sm text-gray-500">
										Submitted on {new Date(item.createdAt).toLocaleDateString()}
									</div>
									<div className="mt-1">
										{item.problem.tags.map((tag) => (
											<span
												key={tag}
												className="badge badge-outline badge-sm mr-1"
											>
												{tag}
											</span>
										))}
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
