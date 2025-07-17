import BeginnersStruggle from "@/components/sections/BeginnersStruggle";
import FAQ from "../components/sections/FAQ";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import DCodeWay from "@/components/sections/DCodeWay";
import Transformation from "@/components/sections/Transformation";
import DCodeJourney from "@/components/sections/DCodeJourney";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-base-100 overflow-hidden">
			<Hero />

			<BeginnersStruggle />

			<DCodeWay />

			<Transformation />

			<Features />

			<FAQ />

			<DCodeJourney />
		</div>
	);
};

export default HomePage;
