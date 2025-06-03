import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { playlistSchema } from "../schemas/playlistSchema";
import { useEffect } from "react";

interface props {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: z.infer<typeof playlistSchema>) => void;
}

const CreatePlaylistModal = ({ isOpen, onClose, onSubmit }: props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(playlistSchema),
	});

	const handleFormSubmit = async (data: z.infer<typeof playlistSchema>) => {
		await onSubmit(data);
		reset();
		onClose();
	};

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

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-10">
			<div
				className="absolute inset-0"
				onClick={onClose}
			/>
			<div className="bg-base-100 rounded-lg shadow-xl w-full max-w-md z-50">
				<div className="flex justify-between items-center p-4 border-b border-base-300">
					<h3 className="text-xl font-bold">Create New Playlist</h3>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				<form
					onSubmit={handleSubmit(handleFormSubmit)}
					className="p-6 space-y-4"
				>
					<div className="form-control text-start">
						<label className="label">
							<span className="label-text font-medium">Playlist Name</span>
						</label>
						<input
							type="text"
							className="input input-bordered w-full"
							placeholder="Enter playlist name"
							{...register("name", { required: "Playlist name is required" })}
						/>
						{errors.name && (
							<label className="label">
								<span className="label-text-alt text-error">
									{errors.name.message}
								</span>
							</label>
						)}
					</div>

					<div className="form-control text-start">
						<label className="label">
							<span className="label-text font-medium">Description</span>
						</label>
						<textarea
							className="textarea textarea-bordered h-24 w-full"
							placeholder="Enter playlist description"
							{...register("description")}
						/>
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
						>
							Create Playlist
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePlaylistModal;
