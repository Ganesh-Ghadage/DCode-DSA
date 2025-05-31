import { Tooltip } from "react-tooltip";
import {
	AreaChart,
	Area,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

interface contibutaions {
	date: string;
	count: number;
}

interface Props {
	data: contibutaions[];
}

const WeeklyChart = ({ data }: Props) => {
	return (
		<div className="card bg-base-200 shadow-xl border border-base-300">
			<div className="card-body">
				<h2 className="card-title text-primary">📈 Weekly Submission Trends</h2>
				<div className="w-full h-64">
					<ResponsiveContainer
						width="100%"
						height="100%"
					>
						<AreaChart data={data}>
							<defs>
								<linearGradient
									id="colorCount"
									x1="0"
									y1="0"
									x2="0"
									y2="1"
								>
									<stop
										offset="5%"
										stopColor="#8884d8"
										stopOpacity={0.8}
									/>
									<stop
										offset="95%"
										stopColor="#8884d8"
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
							<XAxis dataKey="date" />
							<YAxis />
							<CartesianGrid strokeDasharray="1 7" />
							<Tooltip />
							<Area
								type="monotone"
								dataKey="count"
								stroke="#8884d8"
								fillOpacity={1}
								fill="url(#colorCount)"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
};

export default WeeklyChart;
