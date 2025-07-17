import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/schemas/forgotPasswordSchema";
import { useAuthStore } from "@/store/useAuthStore";
import Logo from "@/components/Logo";
import { useState } from "react";

const ChangePasswordPage = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(changePasswordSchema) });

	const { changePassword, isLoading } = useAuthStore();
	const { token } = useParams();

	const navigate = useNavigate();

	const onSubmit = async (data: any) => {
		if (!token) {
			return;
		}
		await changePassword(token, data);

		navigate("/login");
	};

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-base-200 px-4 space-y-10">
			<Logo />

			<div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300">
				<div className="card-body space-y-4">
					<div className="flex flex-col justify-center items-center gap-4 border-b-2 border-muted pb-4">
						<h2 className="card-title justify-center text-xl">
							Change Password
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

						<div className="form-control flex flex-col">
							<label className="label">
								<span className="label-text font-medium">New Password</span>
							</label>
							<div className="relative">
								<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Lock className="h-5 w-5 text-base-content/40" />
								</div>
								<input
									type={showPassword ? "text" : "password"}
									{...register("newPassword")}
									className={`input input-bordered w-full pl-10 ${
										errors.newPassword ? "input-error" : ""
									}`}
									placeholder="••••••••"
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<EyeOff className="h-5 w-5 text-base-content/40" />
									) : (
										<Eye className="h-5 w-5 text-base-content/40" />
									)}
								</button>
							</div>
							{errors.newPassword && (
								<p className="text-red-500 text-sm mt-1">
									{errors.newPassword.message}
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
								"Change Password"
							)}
						</button>
					</form>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-link">Go to Home</button>
			</Link>
		</div>
	);
};

export default ChangePasswordPage;
