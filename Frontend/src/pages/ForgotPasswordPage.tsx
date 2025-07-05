import { Loader2, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/schemas/forgotPasswordSchema";
import { useAuthStore } from "@/store/useAuthStore";
import Logo from "@/components/Logo";

const ForgotPasswordPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(forgotPasswordSchema) });

  const {forgotPassword, isLoading} = useAuthStore()

  const navigate = useNavigate()

	const onSubmit = async (data: any) => {
		await forgotPassword(data)

    navigate("/login")
	};

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-base-200 px-4 space-y-10">
			<Logo />

			<div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
				<div className="card-body space-y-4">
					<div className="flex flex-col justify-center items-center gap-4 border-b-2 border-muted pb-4">
						<h2 className="card-title justify-center text-xl">
							Forgot Password
						</h2>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6 p-4"
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-medium">Email</span>
							</label>
							<div className="relative">
								<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Mail className="h-5 w-5 text-base-content/40" />
								</div>
								<input
									type="email"
									{...register("email")}
									className={`input input-bordered w-full pl-10 ${
										errors.email ? "input-error" : ""
									}`}
									placeholder="you@example.com"
								/>
							</div>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{errors.email.message}
								</p>
							)}
						</div>
						<button
							type="submit"
							className="btn btn-info w-full"
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<Loader2 className="h-5 w-5 animate-spin" />
									Loading...
								</>
							) : (
								"Send reset link"
							)}
						</button>
					</form>
				</div>
			</div>

			<Link to="/login">
				<button className="btn btn-primary">Back to Login</button>
			</Link>
		</div>
	);
};

export default ForgotPasswordPage;
