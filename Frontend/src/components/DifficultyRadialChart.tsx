import React from "react";

interface Props {
	data: [
		{
			difficulty: string;
			total: number;
			solved: number;
		}
	];
}

const DifficultyRadialChart: React.FC<Props> = ({ data }) => {
	return (
		<div className="card bg-base-200 flex flex-col gap-2 items-start justify-start p-5 shadow-xl border border-base-300">
			<h2 className="card-title text-lg font-semibold text-primary mb-2">
				Problems Solved by Difficulty
			</h2>
			<div className="flex flex-col md:flex-row gap-6">
				{data.map((item) => {
					const percent = item.total ? (item.solved / item.total) * 100 : 0;
					return (
						<div
							key={item.difficulty}
							className="text-center"
						>
							<div className="relative w-24 h-24">
								<svg className="w-full h-full">
									<circle
										cx="48"
										cy="48"
										r="40"
										strokeWidth="8"
										className="text-gray-200"
										fill="none"
										stroke="currentColor"
									/>
									<circle
										cx="48"
										cy="48"
										r="40"
										strokeWidth="8"
										fill="none"
										strokeDasharray={2 * Math.PI * 40}
										strokeDashoffset={(1 - percent / 100) * 2 * Math.PI * 40}
										className={
											item.difficulty === "EASY"
												? "stroke-green-500"
												: item.difficulty === "MEDIUM"
												? "stroke-yellow-500"
												: "stroke-red-500"
										}
										strokeLinecap="round"
										transform="rotate(-90 48 48)"
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
									{item.solved}/{item.total}
								</div>
							</div>
							<p className="mt-2 capitalize">{item.difficulty}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DifficultyRadialChart;
