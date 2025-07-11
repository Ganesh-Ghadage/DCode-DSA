import { motion } from "framer-motion";
import { RouteOff, CalendarOff, WebhookOff } from "lucide-react";

const BeginnersStruggle = () => {
	return (
		<section className="p-4 md:p-10 bg-base-200">
			<div className="container mx-auto px-4">
				<motion.div
					className="grid lg:grid-cols-2 gap-12 items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<p className="md:text-lg text-base-content/70 mb-4 md:mb-8 leading-relaxed">
							Why Most Beginners Struggle?
						</p>
						<h2 className="text-xl md:text-4xl font-bold mb-6 text-base-content max-w-xl">
							Too Many Resources, No Roadmap, No Motivation.
						</h2>

						<p className="text-base-content/70 mb-8 leading-relaxed text-sm md:text-md w-[80%] md:w-full">
							From random tutorials to scattered GitHub sheets, most devs quit
							DSA because they're overwhelmed and lack direction.
						</p>

						<div className="space-y-4">
							{[
								{
									icon: RouteOff,
									title: "No Structure",
									desc: "Random problems without clear progression",
								},
								{
									icon: CalendarOff,
									title: "Inconsistent Practice",
									desc: "Motivation drops without tracking",
								},
								{
									icon: WebhookOff,
									title: "No Progress Tracking",
									desc: "Can't see improvement over time",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-4 p-4 rounded-lg bg-base-100/50 w-[80%] md:w-full"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2, duration: 0.6 }}
									viewport={{ once: true }}
								>
									<item.icon className="w-8 h-8" />
									<div>
										<h3 className="font-semibold md:text-lg">{item.title}</h3>
										<p className="text-base-content/60 text-sm md:text-md">{item.desc}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="mockup-browser bg-base-300 border w-[80%] md:w-full">
							<div className="mockup-browser-toolbar">
								<div className="input">Multiple Tabs - Overwhelming!</div>
							</div>
							<div className="bg-base-200 px-6 py-20 text-center">
								<div className="flex flex-col gap-4 mb-4 items-center">
									<div className="badge badge-error w-fit">LeetCode</div>
									<div className="badge badge-warning w-fit">YouTube</div>
									<div className="badge badge-info">GeeksforGeeks</div>
									<div className="badge badge-success">GitHub Sheets</div>
								</div>
								<p className="text-base-content/60">
									Too many resources, no clear path!
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default BeginnersStruggle;
