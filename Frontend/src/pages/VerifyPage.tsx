import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import Logo from "@/components/Logo";

const VerifyPage = () => {
	const { token } = useParams();
	const { authUser, verifyMail, isLoading } = useAuthStore();
	const navigate = useNavigate();

	const [status, setStatus] = useState<
		"idle" | "verifying" | "error" | "verified"
	>("idle");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const verify = async () => {
			if (!token) {
				setStatus("error");
				setMessage("Invalid verification link.");
				return;
			}

			if (authUser?.isEmailVerified) {
				setStatus("verified");
				setMessage("Your email is already verified.");
				return;
			}

			setStatus("verifying");

			try {
				await verifyMail(token);
				setStatus("verified");
				setMessage("Your email has been successfully verified!");
			} catch {
				setStatus("error");
				setMessage("Verification failed. Token may be invalid or expired.");
			}
		};

		verify();
	}, [token, verifyMail]);

	console.log(authUser);

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-base-200 px-4">
			<div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
				<div className="card-body text-center space-y-4">
					<div className="flex justify-center">
						<Logo className="w-14 h-14 text-primary" />
					</div>

					<h2 className="card-title justify-center text-xl">
						Email Verification
					</h2>

					{status === "verifying" ||
						(isLoading && (
							<div className="flex flex-col items-center gap-2">
								<span className="loading loading-spinner loading-lg text-primary" />
								<p className="text-base-content">
									Verifying your email...
								</p>
							</div>
						))}

					{status === "verified" && (
						<div className="flex flex-col items-center gap-3">
							<p className="text-success text-xl">{message}</p>
							{authUser ? (
								<button
									onClick={() => navigate("/")}
									className="btn btn-secondary w-full"
								>
									Go to Home
								</button>
							) : (
								<button
									onClick={() => navigate("/login")}
									className="btn btn-primary w-full"
								>
									Login
								</button>
							)}
						</div>
					)}

					{status === "error" && (
						<div className="flex flex-col items-center gap-3">
							<p className="text-error">{message}</p>
							<button
								onClick={() => navigate("/")}
								className="btn btn-secondary w-full"
							>
								Go to Home
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default VerifyPage;
