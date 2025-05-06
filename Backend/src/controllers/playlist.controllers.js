import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createPlaylist = asyncHandler(async (req, res) => {
	const { name, description } = req.body;
	const userId = req.user.id;

	try {
		const exisitingPlaylist = await db.Playlist.findUnique({
			where: {
				name_userId: {
					name,
					userId,
				},
			},
		});

		if (exisitingPlaylist) {
			throw new ApiError(401, "Playlist with same name already exists");
		}

		const createdPlaylist = await db.Playlist.create({
			data: {
				name,
				description,
				userId,
			},
		});

		if (!createPlaylist) {
			throw new ApiError(400, "Playlist creation failed");
		}

		return res
			.status(201)
			.json(
				new ApiResponce(201, createdPlaylist, "Playlist created successfully")
			);
	} catch (error) {
		console.error("Error While creating playlist", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While creating playlist",
			error
		);
	}
});

export const getAllPlaylistDetails = asyncHandler(async (req, res) => {
	try {
		const playlists = await db.Playlist.findMany({
			where: {
				userId: req.user.id,
			},
			include: {
				problems: {
					include: {
						problem: true,
					},
				},
			},
		});

		if (!playlists) {
			throw new ApiError(401, "No playlist found for user");
		}

		return res
			.status(200)
			.json(new ApiResponce(200, playlists, "Playlists fetched successfully"));
	} catch (error) {
		console.error("Error While fetching playlists", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While fetching playlists",
			error
		);
	}
});

export const getPlaylistDetails = asyncHandler(async (req, res) => {
	const { playlistId } = req.params;

	try {
		const playlist = await db.Playlist.findUnique({
			where: {
				userId: req.user.id,
				id: playlistId,
			},
			include: {
				problems: {
					include: {
						problem: true,
					},
				},
			},
		});

		if (!playlist) {
			throw new ApiError(401, "No playlist found for user");
		}

		return res
			.status(200)
			.json(new ApiResponce(200, playlist, "Playlist fetched successfully"));
	} catch (error) {
		console.error("Error While fetching playlist", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While fetching playlist",
			error
		);
	}
});

export const addProblemToPlaylist = asyncHandler(async (req, res) => {
	const { playlistId } = req.params;
	const { problemIds } = req.body;

	try {
    const exisitingPlaylist = await db.Playlist.findUnique({
			where: {
				id: playlistId,
			},
		});

		if (!exisitingPlaylist) {
			throw new ApiError(404, "Playlist not found");
		}

		if (exisitingPlaylist.userId !== req.user.id) {
			throw new ApiError(
				403,
				"You are not allowed to add problems into this playlist"
			);
		}

		const playlistProblems = [];

		for (let i = 0; i < problemIds.length; i++) {
			const problemId = problemIds[i];

			const addedProblem = await db.ProblemInPlaylist.upsert({
				where: {
					playlistId_problemId: {
						problemId,
						playlistId,
					},
				},
				update: {},
				create: {
					playlistId,
					problemId,
				},
			});

			playlistProblems.push(addedProblem);
		}

		return res
			.status(201)
			.json(
				new ApiResponce(
					201,
					playlistProblems,
					"Problem added in playlist successfully"
				)
			);
	} catch (error) {
		console.error("Error While adding problems in playlist", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While adding problems in playlist",
			error
		);
	}
});

export const deletePlaylist = asyncHandler(async (req, res) => {
	const { playlistId } = req.params;

	try {
		const exisitingPlaylist = await db.Playlist.findUnique({
			where: {
				id: playlistId,
			},
		});

		if (!exisitingPlaylist) {
			throw new ApiError(404, "Playlist not found or already deleted");
		}

		if (exisitingPlaylist.userId !== req.user.id) {
			throw new ApiError(403, "You are not allowed to delete this playlist");
		}

		const deletedPlaylist = await db.Playlist.delete({
			where: {
				id: playlistId,
				userId: req.user.id,
			},
		});

		return res
			.status(200)
			.json(
				new ApiResponce(200, deletedPlaylist, "Playlist deleted successfully")
			);
	} catch (error) {
		console.error("Error While deleting playlist", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While deleting playlist",
			error
		);
	}
});

export const removeProblemFromPlaylist = asyncHandler(async (req, res) => {
	const { playlistId } = req.params;
	const { problemIds } = req.body;

	try {
		const exisitingPlaylist = await db.Playlist.findUnique({
			where: {
				id: playlistId,
			},
		});

		if (!exisitingPlaylist) {
			throw new ApiError(404, "Playlist not found");
		}

		if (exisitingPlaylist.userId !== req.user.id) {
			throw new ApiError(
				403,
				"You are not allowed to remove problems from this playlist"
			);
		}

		const deletedProblems = await db.ProblemInPlaylist.deleteMany({
			where: {
				playlistId,
				problemId: {
					in: problemIds,
				},
			},
		});

		return res
			.status(200)
			.json(
				new ApiResponce(
					200,
					deletedProblems,
					"Problem removed successfully from playlist"
				)
			);
	} catch (error) {
		console.error("Error While removing problem from playlist", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While removing problem from playlist",
			error
		);
	}
});
