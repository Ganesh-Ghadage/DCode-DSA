import { useEffect, useState } from "react";
import { X, Plus, Loader } from "lucide-react";
import { usePlaylistStore } from "../store/usePlaylistStore";
import CreatePlaylistBtn from "./CreatePlaylistBtn";

interface props {
	isOpen: boolean;
	onClose: () => void;
	problemId: string;
}

const AddToPlaylistModal = ({ isOpen, onClose, problemId }: props) => {
	const { allPlaylists, getPlaylists, addProblemInPlaylist, isLoading } =
		usePlaylistStore();
	const [selectedPlaylist, setSelectedPlaylist] = useState("");

	useEffect(() => {
		if (isOpen) {
			getPlaylists();
		}
	}, [isOpen]);

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!selectedPlaylist) return;

		await addProblemInPlaylist(selectedPlaylist, [problemId]);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
			<div
				className="absolute inset-0"
				onClick={onClose}
			/>

			<div className="bg-base-100 rounded-lg shadow-xl w-full max-w-md z-50">
				<div className="flex justify-between items-center p-4 border-b border-base-300">
					<h3 className="text-xl font-bold">Add to Playlist</h3>
					<button
						onClick={onClose}
						className="btn btn-ghost btn-sm btn-circle"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{allPlaylists.length > 0 ? (
					<form
						onSubmit={handleSubmit}
						className="p-6 space-y-4"
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-medium">Select Playlist</span>
							</label>
							<select
								className="select select-bordered w-full"
								value={selectedPlaylist}
								onChange={(e) => setSelectedPlaylist(e.target.value)}
								disabled={isLoading}
							>
								<option value="">Select a playlist</option>
								{allPlaylists.map((playlist) => (
									<option
										key={playlist.id}
										value={playlist.id}
									>
										{playlist.name}
									</option>
								))}
							</select>
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
								disabled={!selectedPlaylist || isLoading}
							>
								{isLoading ? (
									<Loader className="w-4 h-4 animate-spin" />
								) : (
									<Plus className="w-4 h-4" />
								)}
								Add to Playlist
							</button>
						</div>
					</form>
				) : (
					<div className="flex flex-col justify-center items-center gap-4 p-4">
						<p className="text-lg">You don't have any playlist</p>
						<CreatePlaylistBtn />
					</div>
				)}
			</div>
		</div>
	);
};

export default AddToPlaylistModal;
