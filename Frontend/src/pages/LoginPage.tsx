import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
	ChevronRight,
	Eye,
	EyeOff,
	Home,
	Loader2,
	Lock,
	Mail,
} from "lucide-react";

import { loginSchema } from "../schemas/loginSchema";
import CodeBackground from "../components/CodeBackground";
import Logo from "../components/Logo";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const { login, isLoggingIn } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginSchema) });

	const onSubmit = async (data: any) => {
		await login(data);
	};

	return (
		<div className="h-screen w-full">
			<Link
				to={"/"}
				className="flex items-center gap-2 text-primary absolute top-4 left-4 md:top-10 md:left-10"
			>
				<Home className="w-6 h-6" />
				<ChevronRight className="w-4 h-4" />
			</Link>
			<div className="h-screen grid lg:grid-cols-2 gap-20 w-full">
				{/* Left Side - Form */}
				<div className="flex flex-col justify-center items-center p-6 sm:p-12">
					<div className="w-full max-w-md space-y-8">
						{/* Logo */}
						<div className="text-center mb-8">
							<div className="flex flex-col items-center gap-2">
								<Logo />
								<h1 className="text-2xl font-bold mt-2">
									Welcome Back to DCode DSA!
								</h1>
								<p className="text-base-content/60">Sign in to your account</p>
							</div>
						</div>

						{/* Form */}
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6"
						>
							{/* Email */}
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

							{/* Password */}
							<div className="form-control">
								<label className="label">
									<span className="label-text font-medium">Password</span>
								</label>
								<div className="relative">
									<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Lock className="h-5 w-5 text-base-content/40" />
									</div>
									<input
										type={showPassword ? "text" : "password"}
										{...register("password")}
										className={`input input-bordered w-full pl-10 ${
											errors.password ? "input-error" : ""
										}`}
										placeholder="••••••••"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5 text-base-content/40" />
										) : (
											<Eye className="h-5 w-5 text-base-content/40" />
										)}
									</button>
								</div>
								{errors.password && (
									<p className="text-red-500 text-sm mt-1">
										{errors.password.message}
									</p>
								)}
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="btn btn-primary w-full"
								disabled={isLoggingIn}
							>
								{isLoggingIn ? (
									<>
										<Loader2 className="h-5 w-5 animate-spin" />
										Loading...
									</>
								) : (
									"Log in"
								)}
							</button>
						</form>

						{/* Footer */}
						<div className="text-center">
							<p className="text-base-content/60">
								Don't have an account?{" "}
								<Link
									to="/signup"
									className="link link-primary"
								>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>

				{/* Right Side - Image/Pattern */}
				<CodeBackground
					title={"Welcome Back to DCode DSA!"}
					subtitle={
						"Sign in to access our platform and start using our services."
					}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
