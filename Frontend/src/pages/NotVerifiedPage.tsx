import { useState } from "react";
import { Clock, Clock12, Clock3, Clock6, Clock9, Send } from "lucide-react";
import Logo from "@/components/Logo";
import { useAuthStore } from "@/store/useAuthStore";

const NotVerifiedPage = () => {
	const [isSending, setIsSending] = useState(false);
	const [cooldown, setCooldown] = useState(0);
	const { resendVerifyMail, isVerfiyMailSending } = useAuthStore();

	const handleSendVerification = async () => {
		if (isSending) return;

		await resendVerifyMail();

		setIsSending(true);
		setCooldown(30);

		const interval = setInterval(() => {
			setCooldown((prev) => {
				if (prev <= 1) {
					clearInterval(interval);
					setIsSending(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);
	};

	const renderClock = (time: number) => {
		const num = time % 4;

		switch (num) {
			case 0:
				return <Clock12 size={22} />;
			case 1:
				return <Clock9 size={22} />;
			case 2:
				return <Clock6 size={22} />;
			case 3:
				return <Clock3 size={22} />;
			default:
				return <Clock size={22} />;
		}
	};

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-base-200 px-4">
			<div className="max-w-md w-full bg-base-100 shadow-xl rounded-2xl p-8 text-center space-y-6">
				<div className="flex justify-center text-primary">
					<Logo className="w-14 h-14" />
				</div>

				<h1 className="text-2xl font-bold text-primary">Email Not Verified</h1>
				<p className="text-base-content">
					To continue using{" "}
					<span className="text-primary font-bold">DCode DSA</span>, please
					verify your email address. A verified email helps us keep your account
					secure.
				</p>

				<p className="text-base-content">Kindly check your email for verification link</p>

				<div className="divider text-base-content">OR</div>

				<button
					className="btn btn-primary gap-2"
					onClick={handleSendVerification}
					disabled={isSending || isVerfiyMailSending}
				>
					{isSending ? (
						<div className="text-primary flex gap-4 justify-center items-center">
							{renderClock(cooldown)}
							Wait {cooldown}s
						</div>
					) : (
						<div className="flex gap-4 justify-center items-center">
							<Send size={18} /> Send Verification Email
						</div>
					)}
				</button>

				<p className="text-sm text-base-content/70">
					Didn’t receive the email? Check your spam folder or click above to
					resend.
				</p>
			</div>
		</div>
	);
};

export default NotVerifiedPage;
