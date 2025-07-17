import { motion } from "framer-motion";
import { Book, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DCodeJourney = () => {
	return (
		<section className="py-20 bg-gradient-to-br from-primary/40 via-base-100 to-primary/20">
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
						<Link to={"/problem"}>
							<motion.button
								className="btn btn-primary md:btn-lg px-8 py-4 md:text-lg"
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
						</Link>

						<Link to={"/sheets"}>
							<motion.button
								className="btn btn-outline md:btn-lg px-8 py-4 md:text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Try a Sheet for Free
								<Book className="w-5 h-5 ml-2" />
							</motion.button>
						</Link>
					</motion.div>

					<motion.div
						className="md:max-w-md mx-auto"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<div className="mockup-code bg-base-300 text-start">
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
	);
};

export default DCodeJourney;
