import { useState } from "react";
import { Link } from "react-router-dom";
import {
	BookOpen,
	ChevronDown,
	ChevronUp,
	Clock,
	List,
	Tag,
	ExternalLink,
} from "lucide-react";
import type { Playlist } from "../types";
import { usePlaylistStore } from "@/store/usePlaylistStore";
import type { playlistSchema } from "@/schemas/playlistSchema";
import type { z } from "zod";
import CreatePlaylistModal from "./CreatePlaylistModal";

interface props {
	allPlaylists: Playlist[];
	deletePlaylist: (id: string) => void;
}

const UserPlaylists = ({ allPlaylists, deletePlaylist }: props) => {
	const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

	const { createPlaylist } = usePlaylistStore();

	const togglePlaylist = (id: string) => {
		if (expandedPlaylist === id) {
			setExpandedPlaylist(null);
		} else {
			setExpandedPlaylist(id);
		}
	};

	const handleDelete = async (id: string) => {
		await deletePlaylist(id);
	};

	const handleCreatePlaylist = async (data: z.infer<typeof playlistSchema>) => {
		await createPlaylist(data);
	};

	const getDifficultyBadge = (difficulty: string) => {
		switch (difficulty) {
			case "EASY":
				return <span className="badge badge-success">Easy</span>;
			case "MEDIUM":
				return <span className="badge badge-warning">Medium</span>;
			case "HARD":
				return <span className="badge badge-error">Hard</span>;
			default:
				return <span className="badge">Unknown</span>;
		}
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		}).format(date);
	};

	return (
		<div className="p-4 bg-base-200 min-h-screen rounded-xl">
			<div className="max-w-4xl mx-auto">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold text-primary">My Playlists</h2>
					<button
						onClick={() => setIsCreateModalOpen(true)}
						className="btn btn-primary btn-sm"
					>
						Create Playlist
					</button>
				</div>

				{allPlaylists.length === 0 ? (
					<div className="card bg-base-100 shadow-xl">
						<div className="card-body items-center text-center">
							<h3 className="text-xl font-medium">No playlists found</h3>
							<p className="text-base-content/70">
								Create your first playlist to organize problems!
							</p>
							<div className="card-actions justify-center mt-4">
								<button
									onClick={() => setIsCreateModalOpen(true)}
									className="btn btn-primary"
								>
									Create Playlist
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="space-y-6">
						{allPlaylists.map((playlist) => (
							<div
								key={playlist.id}
								className="card bg-base-100 shadow-xl"
							>
								<div className="card-body p-4">
									{/* Playlist Header */}
									<div
										className="flex justify-between items-center cursor-pointer"
										onClick={() => togglePlaylist(playlist.id)}
									>
										<div className="flex items-center gap-3">
											<div className="avatar placeholder flex items-center justify-center">
												<div className="flex bg-primary text-primary-content rounded-lg w-12 items-center justify-center">
													<BookOpen
														size={24}
														className="m-auto mt-3"
													/>
												</div>
											</div>
											<div>
												<h3 className="text-xl font-bold">{playlist.name}</h3>
												<div className="flex items-center gap-2 mt-1 text-sm text-base-content/70">
													<div className="flex items-center gap-1">
														<List size={14} />
														<span>{playlist.problems?.length} problems</span>
													</div>
													<div className="flex items-center gap-1">
														<Clock size={14} />
														<span>
															Created {formatDate(playlist.createdAt)}
														</span>
													</div>
												</div>
											</div>
										</div>
										<button className="btn btn-ghost btn-sm">
											{expandedPlaylist === playlist.id ? (
												<ChevronUp />
											) : (
												<ChevronDown />
											)}
										</button>
									</div>

									{/* Description */}
									<p className="text-base-content/80 mt-1">
										{playlist.description}
									</p>

									{/* Expanded Problems List */}
									{expandedPlaylist === playlist.id && (
										<div className="mt-4 pt-4 border-t border-base-300">
											<h4 className="text-lg font-semibold mb-3">
												Problems in this playlist
											</h4>

											{playlist.problems?.length === 0 ? (
												<div className="alert">
													<span>No problems added to this playlist yet.</span>
												</div>
											) : (
												<div className="overflow-x-auto">
													<table className="table table-zebra w-full">
														<thead>
															<tr>
																<th>Problem</th>
																<th>Difficulty</th>
																<th>Tags</th>
																<th className="text-right">Action</th>
															</tr>
														</thead>
														<tbody>
															{playlist.problems?.map((item) => (
																<tr
																	key={item.id}
																	className="hover"
																>
																	<td className="font-medium">
																		{item.problem?.title}
																	</td>
																	<td>
																		{getDifficultyBadge(
																			item?.problem?.difficulty || ""
																		)}
																	</td>
																	<td>
																		<div className="flex flex-wrap gap-1">
																			{item.problem?.tags &&
																				item.problem?.tags.map((tag, idx) => (
																					<div
																						key={idx}
																						className="badge badge-outline badge-sm"
																					>
																						<Tag
																							size={10}
																							className="mr-1"
																						/>
																						{tag}
																					</div>
																				))}
																		</div>
																	</td>
																	<td className="text-right">
																		<Link
																			to={`/problem/${item.problem?.id}`}
																			className="btn btn-xs btn-outline btn-primary"
																		>
																			<ExternalLink size={12} />
																			Solve
																		</Link>
																	</td>
																</tr>
															))}
														</tbody>
													</table>
												</div>
											)}

											<div className="flex justify-between items-center mt-4">
												<button
													onClick={() => handleDelete(playlist.id)}
													className="btn btn-sm btn-error"
												>
													Delete Playlist
												</button>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			<CreatePlaylistModal
				isOpen={isCreateModalOpen}
				onClose={() => setIsCreateModalOpen(false)}
				onSubmit={handleCreatePlaylist}
			/>
		</div>
	);
};

export default UserPlaylists;
