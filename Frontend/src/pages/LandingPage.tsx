import { motion, easeOut } from "framer-motion";
import {
	ChevronDown,
	Users,
	Book,
	Star,
	ArrowRight,
	Code,
	Zap,
	Target,
	TrendingUp,
	RouteOff,
	CalendarOff,
	WebhookOff,
} from "lucide-react";

const Index = () => {
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
		<div className="min-h-screen bg-base-100 overflow-hidden">
			{/* Hero Section */}
			<section className="hero min-h-[90dvh] bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
				<div className="absolute inset-0 bg-[url(`data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.03'><circle cx='30' cy='30' r='2'/></g></g></svg>`)] opacity-50"></div>

				<div className="hero-content text-center relative z-10">
					<motion.div
						className="max-w-4xl"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<motion.div
							variants={itemVariants}
							className="mb-6"
						>
							<div className="badge badge-accent badge-lg mb-4 px-6 py-3">
								Every Expert Was Once a Beginner
							</div>
						</motion.div>

						<motion.h1
							variants={itemVariants}
							className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent mb-6"
						>
							Your DSA Journey Starts Here
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-lg md:text-xl text-base-content/80 mb-8 max-w-3xl mx-auto leading-relaxed"
						>
							Struggling with DSA? Join the journey from beginner to expert —
							guided, gamified, and structured with DCode DSA.
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						>
							<motion.button
								className="btn btn-primary btn-lg px-8 py-4 text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Start Your Journey
								<ArrowRight className="w-5 h-5 ml-2" />
							</motion.button>

							<motion.button
								className="btn btn-ghost btn-lg px-8 py-4 text-lg border border-base-content/20"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Explore Sheets
								<Book className="w-5 h-5 ml-2" />
							</motion.button>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
				>
					<ChevronDown className="w-8 h-8 text-base-content/50" />
				</motion.div>
			</section>

			{/* Why Most Beginners Struggle */}
			<section className="p-10 bg-base-200">
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
							<p className="text-lg text-base-content/70 mb-8 leading-relaxed">
								Why Most Beginners Struggle?
							</p>
							<h2 className="text-2xl md:text-4xl font-bold mb-6 text-base-content">
								Too Many Resources. No Roadmap. No Motivation.
							</h2>

							<p className="text-base-content/70 mb-8 leading-relaxed">
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
										className="flex items-center gap-4 p-4 rounded-lg bg-base-100/50"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.2, duration: 0.6 }}
										viewport={{ once: true }}
									>
										<item.icon className="w-8 h-8" />
										<div>
											<h3 className="font-semibold text-lg">{item.title}</h3>
											<p className="text-base-content/60">{item.desc}</p>
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
							<div className="mockup-browser bg-base-300 border">
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

			{/* The DCode DSA Way */}
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
							Structured sheets, real-time streak tracking, and your personal
							DSA dashboard.
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
									className={`card bg-base-200 min-w-lg shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-${feature.color}/20`}
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

			{/* From Struggler to Solver */}
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
							Watch Ganesh's journey from struggling beginner to confident
							problem solver
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
											index < 2
												? `bg-${milestone.color} origin-top`
												: "hidden"
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
									interview. The structured approach and streak tracking made
									all the difference!"
								</blockquote>
								<cite className="font-semibold">
									— Ganesh, Software Engineer at Infosys
								</cite>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Ready to Begin Your Journey */}
			<section className="py-20 bg-gradient-to-br from-primary/10 via-base-100 to-accent/10">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-4xl font-bold mb-6">
							It's Your Turn to Level Up
						</h2>
						<p className="text-lg text-base-content/70 mb-12 max-w-2xl mx-auto">
							The best time to start was yesterday. The second-best time is now.
						</p>

						<motion.div
							className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<motion.button
								className="btn btn-primary btn-lg px-8 py-4 text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								animate={{
									boxShadow: [
										"0 0 0 0 rgb(var(--primary) / 0.4)",
										"0 0 0 10px rgb(var(--primary) / 0)",
										"0 0 0 0 rgb(var(--primary) / 0)",
									],
								}}
								transition={{
									boxShadow: { repeat: Infinity, duration: 2 },
								}}
							>
								Start Solving
								<ArrowRight className="w-5 h-5 ml-2" />
							</motion.button>

							<motion.button
								className="btn btn-outline btn-lg px-8 py-4 text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Try a Sheet for Free
								<Book className="w-5 h-5 ml-2" />
							</motion.button>
						</motion.div>

						<motion.div
							className="max-w-md mx-auto"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							viewport={{ once: true }}
						>
							<div className="mockup-code bg-base-300">
								<pre data-prefix="$">
									<code>git clone success.git</code>
								</pre>
								<pre
									data-prefix=">"
									className="text-warning"
								>
									<code>installing confidence...</code>
								</pre>
								<pre
									data-prefix=">"
									className="text-success"
								>
									<code>DSA skills upgraded!</code>
								</pre>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer footer-center bg-base-300 text-base-content p-10">
				<nav className="grid grid-flow-col gap-4">
					<a className="link link-hover">About</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Sheets</a>
					<a className="link link-hover">Blog</a>
				</nav>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<motion.a
							whileHover={{ scale: 1.2 }}
							className="cursor-pointer"
						>
							<Users className="w-6 h-6" />
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.2 }}
							className="cursor-pointer"
						>
							<Star className="w-6 h-6" />
						</motion.a>
					</div>
				</nav>
				<aside>
					<p className="font-bold text-lg">DCode DSA</p>
					<p>Master Data Structures & Algorithms</p>
					<p>Copyright © 2025 - All rights reserved</p>
				</aside>
			</footer>
		</div>
	);
};

export default Index;
