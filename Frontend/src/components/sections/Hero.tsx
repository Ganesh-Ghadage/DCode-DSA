import { Link } from "react-router-dom";
import { motion, easeOut } from "framer-motion";
import { ChevronDown, Book, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
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

	return (
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
						className="text-5xl md:text-7xl max-w-3xl font-bold bg-gradient-to-r from-primary to-primary-content bg-clip-text text-transparent mb-6"
					>
						Your DSA Journey Starts Here
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed"
					>
						Struggling with DSA?
					</motion.p>
					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl text-base-content/80 mb-8 max-w-xl mx-auto leading-relaxed"
					>
						Join the journey from beginner to expert — In a guided, gamified,
						and structured way with DCode DSA.
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Link to={"/problem"}>
							<motion.button
								className="btn btn-primary btn-lg px-8 py-4 text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Start Your Journey
								<ArrowRight className="w-5 h-5 ml-2" />
							</motion.button>
						</Link>

						<Link to={"/sheets"}>
							<motion.button
								className="btn btn-ghost btn-lg px-8 py-4 text-lg border border-base-content/20"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Explore Sheets
								<Book className="w-5 h-5 ml-2" />
							</motion.button>
						</Link>
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
	);
};

export default Hero;
