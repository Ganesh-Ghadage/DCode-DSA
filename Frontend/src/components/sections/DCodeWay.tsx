import { motion, easeOut } from "framer-motion";
import {
	Book,
	Code,
	Target,
	TrendingUp,
} from "lucide-react";

const DCodeWay = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: easeOut,
			},
		},
	};

	const cardHoverVariants = {
		hover: {
			scale: 1.05,
			y: -5,
			transition: {
				duration: 0.3,
				ease: easeOut,
			},
		},
	};

	return (
		<section className="py-10 bg-base-100">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-2xl md:text-4xl font-bold mb-6">
						A Journey Built for Consistent Growth
					</h2>
					<p className="text-lg text-base-content/70 max-w-2xl mx-auto">
						Structured sheets, real-time streak tracking, and your personal DSA
						dashboard.
					</p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 w-fit mx-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{[
						{
							icon: <Book className="w-8 h-8" />,
							title: "Beginner to Expert Sheets",
							desc: "Curated problems from basic to advanced",
							color: "primary",
						},
						{
							icon: <TrendingUp className="w-8 h-8" />,
							title: "Contribution Graph & Streaks",
							desc: "Visual progress tracking like GitHub",
							color: "secondary",
						},
						{
							icon: <Target className="w-8 h-8" />,
							title: "Topic Tracker",
							desc: "Master each DSA concept systematically",
							color: "accent",
						},
						{
							icon: <Code className="w-8 h-8" />,
							title: "Judge0 Code Playground",
							desc: "Test and submit code instantly",
							color: "info",
						},
					].map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover="hover"
						>
							<motion.div
								className={`card bg-base-200  shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-${feature.color}/20`}
								variants={cardHoverVariants}
							>
								<div className="card-body text-center">
									<div
										className={`text-${feature.color} mb-4 flex justify-center`}
									>
										{feature.icon}
									</div>
									<h3 className="card-title justify-center text-lg mb-3">
										{feature.title}
									</h3>
									<p className="text-base-content/70">{feature.desc}</p>
								</div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-16 max-w-4xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<div className="card bg-gradient-to-r from-primary/10 to-accent/10 shadow-xl border border-primary/20">
						<div className="card-body">
							<h3 className="card-title text-2xl mb-4 justify-center">
								Dashboard Preview
							</h3>
							<div className="mockup-window bg-base-300 border">
								<div className="bg-base-200 px-6 py-12">
									<div className="stats stats-vertical lg:stats-horizontal shadow w-full">
										<div className="stat">
											<div className="stat-title">Problems Solved</div>
											<div className="stat-value text-primary">127</div>
											<div className="stat-desc">↗︎ 12 this week</div>
										</div>
										<div className="stat">
											<div className="stat-title">Current Streak</div>
											<div className="stat-value text-secondary">15 days</div>
											<div className="stat-desc">🔥 Keep it up!</div>
										</div>
										<div className="stat">
											<div className="stat-title">Topics Mastered</div>
											<div className="stat-value text-accent-content">8/12</div>
											<div className="stat-desc">67% complete</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DCodeWay;
