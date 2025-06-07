import React, { useEffect } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import { Link } from "react-router-dom";
import ContributionGraph from "../components/ContributionGraph";
import ProblemProgressCircle from "@/components/ProblemProgressCircle";
import DifficultyRadialChart from "@/components/DifficultyRadialChart";
import TagsBarChart from "@/components/TagsBarChart";
import WeeklyChart from "@/components/WeeklyChart";
import AcceptedStatsCard from "@/components/AcceptedStatsCard";
import { ArrowLeft, Check, Clock, Sigma } from "lucide-react";
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
				return "bg-success text-success-content";
			case "Wrong Answer":
				return "bg-error text-error-content";
			case "Time Limit Exceeded":
				return "bg-warning text-warning-content";
			default:
				return "bg-info text-info-content";
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

	if (isLoading) {
		return (
			<span className="loading loading-ring loading-lg mx-auto mt-10"></span>
		);
	}

	if (errorMessage) {
		return <ErrorComponent errorMessage={errorMessage} />;
	}

	return (
		<div className="p-4 max-w-7xl w-full mx-auto space-y-8">
			<div className="flex justify-between items-center">
				<div className="flex flex-row  items-center w-fit">
					<div className="flex items-center gap-3">
						<Link
							to={"/"}
							className="btn btn-circle btn-ghost"
						>
							<ArrowLeft className="w-5 h-5" />
						</Link>
						<h1 className="text-2xl font-bold self-center">
							📊 Your DCode Dashboard
						</h1>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-6 w-fit">
					<div className="avatar placeholder">
						<div className="bg-neutral text-neutral-content rounded-full w-12 h-12 ring ring-primary ring-offset-base-100 ring-offset-2">
							{authUser?.image ? (
								<img
									src={authUser?.image}
									alt={authUser?.name}
								/>
							) : (
								<img
									src={"https://avatar.iran.liara.run/public/boy"}
									alt={authUser?.name}
								/>
							)}
						</div>
					</div>

					<div className="text-center md:text-left">
						<h2 className="text-lg font-bold">{authUser?.name}</h2>
						<div className="badge badge-sm badge-primary mt-1">
							{authUser?.role}
						</div>
					</div>
				</div>
			</div>
			<div className="divider"></div>

			<div className="flex flex-wrap w-full justify-end h-fit">
				<div className="stats bg-base-200 shadow-xl border border-base-300">
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
			</div>

			<div className="flex justify-between flex-wrap gap-4">
				<div className="stats bg-base-200 flex justify-center shadow-xl border border-base-300">
					<ProblemProgressCircle
						total={dashboardData?.milestones.totalProblems || 0}
						solved={dashboardData?.milestones.totalSolved || 0}
					/>
				</div>

				{dashboardData?.progress.byDifficulty && (
					<DifficultyRadialChart data={dashboardData?.progress.byDifficulty} />
				)}

				<AcceptedStatsCard
					total={dashboardData?.submissionData.totalSubmissions || 0}
					accepted={dashboardData?.submissionData.acceptedCount || 0}
					percentage={parseFloat(
						dashboardData?.submissionData.acceptedPercent || "0"
					)}
				/>
			</div>

			<div className="w-full">
				{dashboardData?.progress.byTag && (
					<TagsBarChart data={dashboardData?.progress.byTag} />
				)}
			</div>

			<div className="divider"></div>

			<div className="card bg-base-200 shadow-xl border border-base-300 w-full">
				<div className="card-body w-full">
					<div className="w-full flex justify-between items-center">
						<h2 className="card-title text-primary">📆 Daily Contributions</h2>
						<h2 className="text-sm text-accent-content opacity-40">
							Total Submissions:{" "}
							{dashboardData?.submissionData.totalSubmissions}
						</h2>
					</div>
					<ContributionGraph data={dashboardData?.contributions ?? []} />
				</div>
			</div>

			{dashboardData?.contributions && (
				<WeeklyChart data={dashboardData?.contributions} />
			)}

			<div className="divider"></div>

			<div className="card bg-base-200 shadow">
				<div className="card-body">
					<h2 className="card-title text-primary mb-4">🧠 Recent Activity</h2>
					{dashboardData?.recentActivity.length === 0 ? (
						<p>No recent accepted submissions.</p>
					) : (
						<div className="space-y-6">
							{dashboardData?.recentActivity.map((submission) => (
								<div
									key={submission.id}
									className="card bg-base-100 shadow-xl overflow-hidden transition-all duration-300"
								>
									<div className="card-body p-0">
										{/* Submission Header */}
										<div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 cursor-pointer hover:bg-base-200">
											<div className="flex flex-col justify-between md:flex-row md:items-center gap-3 w-full">
												<div className="font-semibold text-md">
													{submission.problem.title}
												</div>
												<div
													className={`badge ${getStatusClass(
														submission.status
													)}`}
												>
													{submission.status === "Accepted" ? (
														<Check
															size={14}
															className="mr-1"
														/>
													) : null}
													{submission.status}
												</div>

												<div className="flex items-center gap-2 badge badge-neutral">
													<Sigma size={16} />
													<span className="font-medium">
														{submission.problem.difficulty}
													</span>
												</div>

												<div className="flex flex-wrap gap-1">
													{(submission.problem.tags || []).map((tag, idx) => (
														<span
															key={idx}
															className="badge badge-outline badge-warning text-xs font-bold"
														>
															{tag}
														</span>
													))}
												</div>

												<div className="flex items-center gap-2">
													<Clock size={16} />
													<span>
														Submitted {formatDate(submission.createdAt)}
													</span>
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
