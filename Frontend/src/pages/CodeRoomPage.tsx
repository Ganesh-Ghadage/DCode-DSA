import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import createRoomAnim from "../assets/lotties/create-room.json";
import inviteFriendsAnim from "../assets/lotties/invite-friends.json";
import liveSolveAnim from "../assets/lotties/live-coding.json";

const CodeRoom = () => {
	const { ref, inView } = useInView({ triggerOnce: true });

	const steps = [
		{
			title: "1️⃣ Create a Code Room",
			description:
				"Start by creating a coding room for collaborative practice.",
			animation: createRoomAnim,
		},
		{
			title: "2️⃣ Invite Friends to Join",
			description:
				"Send them a room code or link. Anyone can join from anywhere!",
			animation: inviteFriendsAnim,
		},
		{
			title: "3️⃣ Solve, Learn & Collaborate",
			description:
				"Work together on DSA problems, share thoughts, and level up 💡.",
			animation: liveSolveAnim,
		},
	];

	return (
		<div className="min-h-screen px-4 py-10 bg-base-100">
			<h1 className="text-4xl font-bold text-center text-secondary mb-10">
				👥 Code Room Vision
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
				<button className="btn btn-secondary btn-lg">Launching Soon 🎯</button>
			</div>
		</div>
	);
};

export default CodeRoom;
