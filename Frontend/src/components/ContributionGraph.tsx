import type { ContributionEntry } from "@/types/dashboard";
import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";

interface Props {
	data: ContributionEntry[];
}

const ContributionGraph: React.FC<Props> = ({ data }) => {
	const today = new Date();
	const startDate = new Date();
	startDate.setFullYear(
		today.getFullYear() - 1,
		today.getMonth(),
		today.getDate()
	);

	return (
		<div className="overflow-x-auto p-4">
			<CalendarHeatmap
				startDate={startDate}
				endDate={today}
				values={data.map((d) => ({ date: d.date, count: d.count }))}
				classForValue={(value) => {
					if (!value || value.count === 0) return "color-empty";
					if (value.count < 3) return "color-scale-1";
					if (value.count < 6) return "color-scale-2";
					return "color-scale-3";
				}}
				tooltipDataAttrs={(value) =>
					({
						"data-tooltip-id": "my-tooltip",
						"data-tooltip-content": `${value?.count || 0} submission${
							value?.count === 1 ? "" : "s"
						}`,
					} as { [key: string]: string })
				}
				showWeekdayLabels
			/>
			<Tooltip id="my-tooltip" />

			<div className="flex justify-end">
				<div className="flex gap-2 items-center text-sm w-fit mr-0">
					<span>Less</span>
					<div className="w-4 h-4 bg-base-300 border rounded-sm"></div>
					<div className="w-4 h-4 bg-green-200 border rounded-sm"></div>
					<div className="w-4 h-4 bg-green-400 border rounded-sm"></div>
					<div className="w-4 h-4 bg-green-600 border rounded-sm"></div>
					<span>More</span>
				</div>
			</div>
		</div>
	);
};

export default ContributionGraph;
