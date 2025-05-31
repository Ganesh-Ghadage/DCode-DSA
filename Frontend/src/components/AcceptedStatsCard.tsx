import React from "react";

interface AcceptedStatsCardProps {
	total: number;
	accepted: number;
	percentage: number;
}

const getProgressColor = (percentage: number): string => {
	if (percentage < 40) return "progress-error";
	if (percentage < 70) return "progress-warning";
	return "progress-success";
};

const AcceptedStatsCard: React.FC<AcceptedStatsCardProps> = ({
	total,
	accepted,
	percentage,
}) => {
	return (
		<div className="card w-full max-w-sm bg-base-200 shadow-xl border border-base-300">
			<div className="card-body">
				<h2 className="card-title text-lg font-semibold text-primary">
					Submission Overview
				</h2>

				<div className="flex items-center justify-between">
					<span className="text-sm text-base-content">Total Submissions</span>
					<span className="font-bold text-base">{total}</span>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-sm text-base-content">
						Accepted Submissions
					</span>
					<span className="font-bold text-lg text-success">{accepted}</span>
				</div>

				<div className="mt-4">
					<div className="flex items-center justify-between mb-1">
						<span className="text-sm font-medium text-base-content">
							Accepted %
						</span>
						<span className="text-sm font-bold">{percentage.toFixed(2)}%</span>
					</div>
					<progress
						className={`progress w-full ${getProgressColor(percentage)}`}
						value={percentage}
						max={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default AcceptedStatsCard;
