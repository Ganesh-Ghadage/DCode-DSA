import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = () => {
	return (
		<div>
			<section className="min-h-screen flex flex-col items-center mt-14 px-4">
				<div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
				<h1 className="text-4xl font-extrabold z-10 text-center">
					Welcome to <span className="text-primary">DCode DSA</span>
				</h1>
				<p className="mt-4 text-center text-lg font-semibold text-gray-500 dark:text-gray-400 z-10">
					A Platform Inspired by Leetcode which helps you to prepare for coding
					interviews and helps you to improve your coding skills by solving
					coding problems
				</p>

				<Hero />

				<Features />

				<FAQ />
			</section>

			<Footer />
		</div>
	);
};

export default HomePage;
