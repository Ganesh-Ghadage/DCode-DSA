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
        id: playlistId
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
})

export const addProblemToPlaylist = asyncHandler(async (req, res) => {})

export const deletePlaylist = asyncHandler(async (req, res) => {})

export const removeProblemFromPlaylist = asyncHandler(async (req, res) => {})