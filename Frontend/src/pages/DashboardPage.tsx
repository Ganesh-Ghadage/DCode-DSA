import React, { useEffect } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import { Link } from "react-router-dom";
import ContributionGraph from "../components/ContributionGraph";
import ProblemProgressCircle from "@/components/ProblemProgressCircle";
import DifficultyRadialChart from "@/components/DifficultyRadialChart";
import TagsBarChart from "@/components/TagsBarChart";
import WeeklyChart from "@/components/WeeklyChart";
import AcceptedStatsCard from "@/components/AcceptedStatsCard";
import {
	ArrowLeft,
	Check,
	Clock,
	Sigma,
	TrendingUp,
	Target,
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import ErrorComponent from "@/components/ErrorComponent";

const DashboardPage: React.FC = () => {
	const { dashboardData, isLoading, fectchData, errorMessage } =
		useDashboardStore();
	const { authUser } = useAuthStore();

	useEffect(() => {
		fectchData();
	}, [fectchData]);

	const getStatusClass = (status: string) => {
		switch (status) {
			case "Accepted":
				return "bg-success/20 text-success border-success/30";
			case "Wrong Answer":
				return "bg-error/20 text-error border-error/30";
			case "Time Limit Exceeded":
				return "bg-warning/20 text-warning border-warning/30";
			default:
				return "bg-info/20 text-info border-info/30";
		}
	};

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty.toLowerCase()) {
			case "easy":
				return "bg-success/20 text-success border-success/30";
			case "medium":
				return "bg-warning/20 text-warning border-warning/30";
			case "hard":
				return "bg-error/20 text-error border-error/30";
			default:
				return "bg-neutral/20 text-neutral border-neutral/30";
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		}).format(date);
	};

	if (errorMessage) {
		return <ErrorComponent errorMessage={errorMessage} />;
	}

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<span className="loading loading-ring loading-lg text-primary"></span>
					<p className="text-base-content/60">Loading your dashboard...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-base-100 to-base-200">
			{/* Header Section */}
			<div className="sticky top-0 z-10 bg-base-100/80 backdrop-blur-md p-4 pr-10 mb-6 border-b border-base-300">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
					<div className="flex items-center gap-4">
						<Link
							to={"/"}
							className="btn btn-circle btn-ghost hover:btn-primary transition-all duration-200"
						>
							<ArrowLeft className="w-5 h-5" />
						</Link>
						<div>
							<h1 className="text-xl md:text-2xl font-bold ">
								📊{" "}
								<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
									Your DCode Dashboard
								</span>
							</h1>
							<p className="text-base-content/60 mt-1">
								Track your coding progress and achievements
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<div className="avatar placeholder">
							<div className="bg-gradient-to-br from-primary to-secondary rounded-full w-14 h-14 ring-1 ring-primary/20 ring-offset-4 ring-offset-base-100">
								{authUser?.image ? (
									<img
										src={authUser?.image}
										alt={authUser?.name}
										className="rounded-full"
									/>
								) : (
									<img
										src={"https://avatar.iran.liara.run/public/boy"}
										alt={authUser?.name}
										className="rounded-full"
									/>
								)}
							</div>
						</div>

						<div className="text-left">
							<h2 className="text-lg font-bold text-base-content">
								{authUser?.name}
							</h2>
							<div className="badge badge-primary badge-md mt-2 font-medium">
								{authUser?.role}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-8 py-6 ">
				{/* Streak Stats */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					<div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
						<div className="flex items-center gap-4">
							<div className="text-4xl">🔥</div>
							<div>
								<p className="text-base-content/60 font-medium">
									Current Streak
								</p>
								<p className="text-3xl font-bold text-primary">
									{dashboardData?.streaks.current} days
								</p>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
						<div className="flex items-center gap-4">
							<div className="text-4xl">⚡</div>
							<div>
								<p className="text-base-content/60 font-medium">
									Longest Streak
								</p>
								<p className="text-3xl font-bold text-secondary">
									{dashboardData?.streaks.longest ?? 0} days
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Main Stats Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
					<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 flex items-center justify-center">
						<ProblemProgressCircle
							total={dashboardData?.milestones.totalProblems || 0}
							solved={dashboardData?.milestones.totalSolved || 0}
						/>
					</div>

					{dashboardData?.progress.byDifficulty && (
						<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300">
							<DifficultyRadialChart
								data={dashboardData?.progress.byDifficulty}
							/>
						</div>
					)}

					<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300">
						<AcceptedStatsCard
							total={dashboardData?.submissionData.totalSubmissions || 0}
							accepted={dashboardData?.submissionData.acceptedCount || 0}
							percentage={parseFloat(
								dashboardData?.submissionData.acceptedPercent || "0"
							)}
						/>
					</div>
				</div>

				{/* Tags Chart */}
				<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 mb-8">
					<div className="flex items-center gap-3 mb-6">
						<Target className="w-6 h-6 text-primary" />
						<h2 className="text-2xl font-bold text-base-content">
							Problem Categories
						</h2>
					</div>
					{dashboardData?.progress.byTag && (
						<TagsBarChart data={dashboardData?.progress.byTag} />
					)}
				</div>

				{/* Contributions Section */}
				<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 mb-8 w-full">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
						<div className="flex items-center gap-3">
							<div className="text-2xl">📆</div>
							<h2 className="text-2xl font-bold text-primary">
								Daily Contributions
							</h2>
						</div>
						<div className="badge badge-accent badge-lg">
							Total: {dashboardData?.submissionData.totalSubmissions}{" "}
							submissions
						</div>
					</div>
					<div className="overflow-auto">
						<ContributionGraph data={dashboardData?.contributions ?? []} />
					</div>
				</div>

				{/* Weekly Chart */}
				{dashboardData?.contributions && (
					<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6 mb-8">
						<div className="flex items-center gap-3 mb-6">
							<TrendingUp className="w-6 h-6 text-secondary" />
							<h2 className="text-2xl font-bold text-base-content">
								Weekly Activity
							</h2>
						</div>
						<WeeklyChart data={dashboardData?.contributions} />
					</div>
				)}

				{/* Recent Activity */}
				<div className="bg-base-100 rounded-2xl shadow-lg border border-base-300 p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="text-2xl">🧠</div>
						<h2 className="text-2xl font-bold text-primary">Recent Activity</h2>
					</div>

					{dashboardData?.recentActivity.length === 0 ? (
						<div className="text-center py-12">
							<div className="text-6xl mb-4">🚀</div>
							<p className="text-base-content/60 text-lg">
								No recent accepted submissions yet.
							</p>
							<p className="text-base-content/40">
								Start solving problems to see your activity here!
							</p>
						</div>
					) : (
						<div className="space-y-4">
							{dashboardData?.recentActivity.map((submission) => (
								<div
									key={submission.id}
									className="bg-base-50 hover:bg-base-200 rounded-xl border border-base-300 transition-all duration-300 hover:shadow-md"
								>
									<div className="p-6">
										<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
											<div className="flex-1">
												<h3 className="font-bold text-lg text-base-content mb-3">
													{submission.problem.title}
												</h3>

												<div className="flex flex-wrap items-center gap-3">
													<div
														className={`badge border ${getStatusClass(
															submission.status
														)} font-medium`}
													>
														{submission.status === "Accepted" && (
															<Check
																size={14}
																className="mr-1"
															/>
														)}
														{submission.status}
													</div>

													<div
														className={`badge border ${getDifficultyColor(
															submission.problem.difficulty
														)} font-medium`}
													>
														<Sigma
															size={14}
															className="mr-1"
														/>
														{submission.problem.difficulty}
													</div>

													<div className="badge badge-ghost border-base-300">
														<Clock
															size={14}
															className="mr-1"
														/>
														{formatDate(submission.createdAt)}
													</div>
												</div>

												<div className="flex flex-wrap gap-2 mt-3">
													{(submission.problem.tags || []).map((tag, idx) => (
														<span
															key={idx}
															className="badge badge-outline badge-warning badge-sm font-medium"
														>
															{tag}
														</span>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
