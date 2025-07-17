import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { Eye, EyeOff, Loader2, Lock, Mail, X } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordSchema } from "@/schemas/updatePasswordSchema";
import { useAuthStore } from "@/store/useAuthStore";

interface props {
	isOpen: boolean;
	onClose: () => void;
}

const UpdatePasswordModal = ({ isOpen, onClose }: props) => {
	const [showOldPassword, setShowOldPassword] = useState<boolean>(false);
	const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

	const { updatePassword, isLoading } = useAuthStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(updatePasswordSchema) });

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		} else {
			document.removeEventListener("keydown", handleKeyDown);
		}

		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	const onSubmit = async (data: any) => {
		await updatePassword(data);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
			<div
				className="absolute inset-0"
				onClick={onClose}
			/>

			<div className="bg-base-200 rounded-lg shadow-xl w-full max-w-md z-50">
				{/* Logo */}
				<div className="flex items-center p-4 border-b border-base-300 relative">
					<div className="w-full flex flex-col items-center gap-2">
						<Logo />
						<p className="text-base-content text-xl">Update your password</p>
					</div>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle absolute right-4 top-4"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Form */}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-6 p-4"
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

					{/*Old Password */}
					<div className="form-control">
						<label className="label">
							<span className="label-text font-medium">Old Password</span>
						</label>
						<div className="relative">
							<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Lock className="h-5 w-5 text-base-content/40" />
							</div>
							<input
								type={showOldPassword ? "text" : "password"}
								{...register("oldPassword")}
								className={`input input-bordered w-full pl-10 ${
									errors.oldPassword ? "input-error" : ""
								}`}
								placeholder="••••••••"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
								onClick={() => setShowOldPassword(!showOldPassword)}
							>
								{showOldPassword ? (
									<EyeOff className="h-5 w-5 text-base-content/40" />
								) : (
									<Eye className="h-5 w-5 text-base-content/40" />
								)}
							</button>
						</div>
						{errors.oldPassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.oldPassword.message}
							</p>
						)}
					</div>

					{/* New Password */}
					<div className="form-control">
						<label className="label">
							<span className="label-text font-medium">New Password</span>
						</label>
						<div className="relative">
							<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Lock className="h-5 w-5 text-base-content/40" />
							</div>
							<input
								type={showNewPassword ? "text" : "password"}
								{...register("newPassword")}
								className={`input input-bordered w-full pl-10 ${
									errors.newPassword ? "input-error" : ""
								}`}
								placeholder="••••••••"
							/>
							<button
								type="button"
								className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
								onClick={() => setShowNewPassword(!showNewPassword)}
							>
								{showNewPassword ? (
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

					{/* Submit Button */}
					<button
						type="submit"
						className="btn btn-primary w-full"
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
	);
};

export default UpdatePasswordModal;
