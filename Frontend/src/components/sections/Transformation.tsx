import { motion } from "framer-motion";
import {
	Star,
	Zap,
	TrendingUp,
} from "lucide-react";

const Transformation = () => {

	return (
		<section className="py-10 bg-base-200">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-2xl md:text-4xl font-bold mb-6">
						The Transformation
					</h2>
					<p className="text-lg text-base-content/70">
						Watch Ganesh's journey from struggling beginner to confident problem
						solver
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
						{[
							{
								month: "Month 1",
								problems: "30 problems solved",
								desc: "Started with basic arrays and strings",
								icon: <Zap className="w-5 h-5" />,
								color: "secondary",
							},
							{
								month: "Month 3",
								problems: "150+ problems",
								desc: "Mastered linked lists and trees",
								icon: <TrendingUp className="w-5 h-5" />,
								color: "primary",
							},
							{
								month: "Month 6",
								problems: "Cleared interview",
								desc: "Landed dream job at tech company",
								icon: <Star className="w-5 h-5" />,
								color: "success",
							},
						].map((milestone, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, y: -50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.3 }}
								viewport={{ once: true }}
							>
								<div className="timeline-middle">
									<div
										className={`btn btn-circle btn-${milestone.color} btn-sm`}
									>
										{milestone.icon}
									</div>
								</div>
								<div
									className={`timeline-${
										index % 2 === 0 ? "start" : "end"
									} mb-10 ${index % 2 === 0 ? "md:text-end" : ""}`}
								>
									<div className="card bg-base-100 shadow-lg">
										<div className="card-body">
											<time
												className={`font-mono italic text-${milestone.color}`}
											>
												{milestone.month}
											</time>
											<div className="text-lg font-black">
												{milestone.problems}
											</div>
											<p className="text-base-content/70">{milestone.desc}</p>
										</div>
									</div>
								</div>
								<motion.hr
									key={index}
									initial={{ opacity: 0, scaleY: 0 }}
									whileInView={{ opacity: 1, scaleY: 1 }}
									transition={{
										duration: 0.8,
										delay: index * 0.3,
										ease: "easeOut",
									}}
									viewport={{ once: true }}
									className={`w-[2px] h-16 ${
										index < 2 ? `bg-${milestone.color} origin-top` : "hidden"
									} border-none`}
									style={{ transformOrigin: "top" }}
								/>
							</motion.li>
						))}
					</ul>
				</div>

				<motion.div
					className="mt-16 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="card bg-gradient-to-r from-success/10 to-info/10 shadow-xl border border-success/20">
						<div className="card-body text-center">
							<div className="avatar mb-4">
								<div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
									<div className="bg-gradient-to-r from-success to-info rounded-full flex items-center justify-center text-2xl font-bold text-white">
										G
									</div>
								</div>
							</div>
							<blockquote className="text-lg italic text-base-content/80 mb-4">
								"DCode DSA kept me consistent — I finally cracked my first
								interview. The structured approach and streak tracking made all
								the difference!"
							</blockquote>
							<cite className="font-semibold">
								— Ganesh, Software Engineer at Infosys
							</cite>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Transformation;
