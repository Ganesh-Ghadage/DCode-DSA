import React from "react";

interface Props {
	data: [
		{
			tag: string;
			total: number;
			solved: number;
		}
	];
}

const COLORS = [
  'bg-green-400',
  'bg-blue-400',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-purple-400',
  'bg-red-400',
  'bg-emerald-500',
  'bg-orange-400',
];

const TagsBarChart: React.FC<Props> = ({ data }) => {

	return (
		<div className="bg-base-200 p-4 rounded-xl shadow-xl border border-base-300">
			<h2 className="text-lg font-semibold mb-4 text-primary">Solved Problems by Tag</h2>

			<div className="space-y-2">
				{data.map((tag, index) => {
					const percent = tag.total ? (tag.solved / tag.total) * 100 : 0;
					return (
						<div
							key={tag.tag}
							className="w-full"
						>
							<div className="flex justify-between text-sm mb-1">
								<span className="font-medium">{tag.tag}</span>
								<span>
									{tag.solved}/{tag.total}
								</span>
							</div>
							<div className="w-full h-4 bg-base-200 rounded">
								<div
                className={`h-full rounded ${COLORS[index % COLORS.length]}`}
									style={{ width: `${percent}%` }}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TagsBarChart;
