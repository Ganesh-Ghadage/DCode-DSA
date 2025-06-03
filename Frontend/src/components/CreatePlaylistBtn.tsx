import type { playlistSchema } from "@/schemas/playlistSchema";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { z } from "zod";
import CreatePlaylistModal from "./CreatePlaylistModal";

const CreatePlaylistBtn = () => {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
	const { createPlaylist } = usePlaylistStore();

	const handleCreatePlaylist = async (data: z.infer<typeof playlistSchema>) => {
		await createPlaylist(data);
	};

	return (
		<div className="">
			<button
				className="btn btn-primary gap-2"
				onClick={() => setIsCreateModalOpen(true)}
			>
				<Plus className="w-4 h-4" />
				Create Playlist
			</button>

			<CreatePlaylistModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				onSubmit={handleCreatePlaylist}
			/>
		</div>
	);
};

export default CreatePlaylistBtn;
