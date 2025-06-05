import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";

const VerifyPage = () => {
	const { token } = useParams();
  const {authUser} = useAuthStore()
	const navigate = useNavigate();

  console.log(authUser)

	const [status, setStatus] = useState<
		"idle" | "verifying" | "success" | "error" | "verified"
	>("idle");
	const [message, setMessage] = useState("");

	useEffect(() => {
		const verifyEmail = async () => {
			if (!token) {
				setStatus("error");
				setMessage("Invalid verification link.");
				return;
			}

      if(authUser?.isEmailVerified) {
        setStatus("verified");
				setMessage("User is already verified");
				return;
      }

			setStatus("verifying");

			try {
				const res = await axiosInstance.get(`/auth/verify/${token}`);
				setStatus("success");
				setMessage(res.data.message || "Your email has been verified.");
			} catch (err: any) {
				setStatus("error");
				setMessage(
					err?.response?.data?.message ||
						"Verification failed. Token may be invalid or expired."
				);
			}
		};

		verifyEmail();
	}, [token]);

	return (
		<div className="flex justify-center items-center min-h-screen bg-base-200 px-4 w-full">
			<div className="card w-full max-w-md shadow-xl bg-base-100">
				<div className="card-body text-center">
					<h2 className="card-title justify-center">Email Verification</h2>

					{status === "verifying" && (
						<div className="flex flex-col items-center gap-2">
							<span className="loading loading-spinner loading-lg text-primary"></span>
							<p className="text-sm">Verifying your email...</p>
						</div>
					)}

					{status === "success" && (
						<div className="flex flex-col gap-4 items-center">
							<p className="text-success">{message}</p>
							<button
								onClick={() => navigate("/login")}
								className="btn btn-primary"
							>
								Go to Login
							</button>
						</div>
					)}

					{status === "verified" && (
						<div className="flex flex-col gap-4 items-center">
							<p className="text-success">{message}</p>
							<button
								onClick={() => navigate("/")}
								className="btn btn-secondary"
							>
								Go to Home
							</button>
						</div>
					)}

          {status === "error"  && (
						<div className="flex flex-col gap-4 items-center">
							<p className="text-error">{message}</p>
							<button
								onClick={() => navigate("/")}
								className="btn btn-secondary"
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
