import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import codeWarStart from "../assets/lotties/codewar-start.json";
import codeWarBattle from "../assets/lotties/codewar-battle.json";
import codeWarWin from "../assets/lotties/codewar-win.json";

const CodeWar = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	const steps = [
		{
			title: "1️⃣ Create or Join a Code War",
			description:
				"Players can create a new battle room or join one with a shared code.",
			animation: codeWarStart,
		},
		{
			title: "2️⃣ Solve the Same Problem in Real-Time",
			description:
				"Both players get the same DSA challenge. Timer starts ticking ⏱️.",
			animation: codeWarBattle,
		},
		{
			title: "3️⃣ First to Solve Correctly Wins!",
			description:
				"The one who submits the first correct solution wins cash prizes 🎉.",
			animation: codeWarWin,
		},
	];

	return (
		<div className="min-h-screen px-4 py-10 bg-base-100">
			<h1 className="text-4xl font-bold text-center text-primary mb-10">
				⚔️ Code War Vision
			</h1>
			<div className="space-y-24 max-w-4xl mx-auto">
				{steps.map((step, idx) => (
					<div
						key={idx}
						className={`flex flex-col md:flex-row items-center gap-8 ${
							idx % 2 === 1 ? "md:flex-row-reverse" : ""
						}`}
					>
						<div
							className="md:w-1/2"
							ref={ref}
						>
							{inView && (
								<Lottie
									animationData={step.animation}
									loop={false}
									autoplay
								/>
							)}
						</div>
						<div className="md:w-1/2 space-y-3">
							<h2 className="text-2xl font-bold text-accent-content">
								{step.title}
							</h2>
							<p className="text-base-content text-xl">{step.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="text-center mt-20">
				<button className="btn btn-primary btn-lg">Coming Soon 🚀</button>
			</div>
		</div>
	);
};

export default CodeWar;
