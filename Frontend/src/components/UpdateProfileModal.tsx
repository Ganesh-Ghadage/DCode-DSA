import React, { useCallback, useRef, useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Logo from "./Logo";
import { Code, X } from "lucide-react";
import { useForm } from "react-hook-form";
import Cropper from "react-easy-crop";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { profileUpdateSchema } from "@/schemas/profileUpdateSchema";
import { getCroppedImg } from "@/utils/cropImage";

interface props {
	isOpen: boolean;
	onClose: () => void;
}

const UpdateProfileModal = ({ isOpen, onClose }: props) => {
	const { authUser, updateProfile, isLoading } = useAuthStore();

	const [imageSrc, setImageSrc] = useState<string | null>(null);
	const [fileSize, setFileSize] = useState<number | null>(null);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null);

	const fileInputRef = useRef<HTMLInputElement>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof profileUpdateSchema>>({
		resolver: zodResolver(profileUpdateSchema),
		defaultValues: {
			name: authUser?.name || "",
		},
	});

	const onCropComplete = useCallback(
		(_croppedArea: any, croppedAreaPixels: any) => {
			setCroppedAreaPixels(croppedAreaPixels);
		},
		[]
	);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (!selectedFile) return;

		const sizeInKB = selectedFile.size / 1024;
		setFileSize(sizeInKB);
		setCrop({ x: 0, y: 0 })
		setZoom(1)

		const reader = new FileReader();
		reader.onload = () => setImageSrc(reader.result as string);
		reader.readAsDataURL(selectedFile);
	};

	const handleCrop = async () => {
		if (!imageSrc || !croppedAreaPixels) return;
		const cropped = await getCroppedImg(imageSrc, croppedAreaPixels);
		if (cropped) {
			setCroppedBlob(cropped);
			setImageSrc(null);
		}
	};

	const onSubmit = async (data: z.infer<typeof profileUpdateSchema>) => {
		await updateProfile(data.name, croppedBlob);

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
				<div className="flex items-center p-4 border-b border-base-300 relative">
					<div className="w-full flex flex-col items-center gap-2">
						<Logo />
						<p className="text-base-content text-xl">Update your profile</p>
					</div>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle absolute right-4 top-4"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-6 p-4"
				>
					{/* Profile Picture Preview */}
					<div className="flex flex-col justify-center items-center gap-2">
						{croppedBlob || authUser?.image ? (
							<img
								src={
									croppedBlob
										? URL.createObjectURL(croppedBlob)
										: authUser?.image
								}
								alt="Preview"
								className="w-16 h-16 rounded-full object-cover border border-base-300"
							/>
						) : (
							<div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center text-xs">
								No Image
							</div>
						)}

						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className="btn btn-xs btn-outline"
						>
							Choose Image
						</button>
						<input
							type="file"
							{...register("image")}
							accept="image/*"
							onChange={handleFileChange}
							ref={(e) => {
								register("image").ref(e);
								fileInputRef.current = e;
							}}
							className={`hidden ${errors.name ? "input-error" : ""}`}
						/>
						{fileSize && (
							<p className="text-xs text-base-content">
								File size: {(fileSize / 1024).toFixed(2)} MB
							</p>
						)}
						{errors.image && (
							<p className="text-red-500 text-sm mt-1">
								{typeof errors.image?.message === "string"
									? errors.image.message
									: null}
							</p>
						)}
					</div>

					{/* Name Input */}
					<div className="form-control">
						<label className="label">
							<span className="label-text font-medium">Name</span>
						</label>
						<div className="relative">
							<div className="absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Code className="h-5 w-5 text-base-content/40" />
							</div>
							<input
								type="text"
								{...register("name")}
								className={`input input-bordered w-full pl-10 ${
									errors.name ? "input-error" : ""
								}`}
								placeholder="John Doe"
							/>
						</div>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
						)}
					</div>

					<div className="flex justify-end gap-2 mt-6">
						<button
							type="button"
							onClick={onClose}
							className="btn btn-ghost"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="btn btn-primary"
							disabled={isLoading}
						>
							{isLoading ? "Updating..." : "Update Profile"}
						</button>
					</div>
				</form>
			</div>

			{/* Cropper Modal */}
			{imageSrc && (
				<div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
					<div className="bg-base-100 p-4 w-[90vw] max-w-lg relative">
						<h3 className="text-lg font-bold text-center mb-4">Crop Image</h3>

						<div className="relative h-[300px] w-full overflow-hidden bg-base-300">
							<Cropper
								image={imageSrc}
								crop={crop}
								zoom={zoom}
								aspect={1}
								cropShape="round"
								showGrid={false}
								onCropChange={setCrop}
								onZoomChange={setZoom}
								onCropComplete={onCropComplete}
							/>
						</div>

						<div className="flex justify-between mt-4">
							<button
								className="btn btn-outline"
								onClick={() => setImageSrc(null)}
								type="button"
							>
								Cancel
							</button>
							<button
								className="btn btn-primary"
								onClick={handleCrop}
								type="button"
							>
								Crop
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default UpdateProfileModal;
