import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	addProblemToPlaylist,
	createPlaylist,
	deletePlaylist,
	getAllPlaylistDetails,
	getPlaylistDetails,
	removeProblemFromPlaylist,
	updatePlaylist,
} from "../controllers/playlist.controllers.js";
import {
	createPlaylistValidator,
	playlistIdPramaValidator,
	playlistProblemsValidator,
	updatedPlaylistValidator,
} from "../validators/playlist.validators.js";
import validator from "../middlewares/validate.middleware.js";

const playlistRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Playlist
 *   description: Playlist management APIs
 */

/**
 * @swagger
 * /api/v1/playlist:
 *   get:
 *     summary: Get all playlists for the authenticated user
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of playlists
 */
playlistRouter.get("/", authMiddleware, getAllPlaylistDetails);

/**
 * @swagger
 * /api/v1/playlist/{playlistId}:
 *   get:
 *     summary: Get details of a specific playlist
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the playlist
 *     responses:
 *       200:
 *         description: Playlist details
 */
playlistRouter.get(
	"/:playlistId",
	authMiddleware,
	playlistIdPramaValidator(),
	validator,
	getPlaylistDetails
);

/**
 * @swagger
 * /api/v1/playlist/create-playlist:
 *   post:
 *     summary: Create a new playlist
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Playlist created
 */
playlistRouter.post(
	"/create-playlist",
	authMiddleware,
	createPlaylistValidator(),
	validator,
	createPlaylist
);

/**
 * @swagger
 * /api/v1/playlist/{playlistId}/add-problems:
 *   post:
 *     summary: Add problems to a playlist
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the playlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - problemIds
 *             properties:
 *               problemIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Problems added to playlist
 */
playlistRouter.post(
	"/:playlistId/add-problems",
	playlistProblemsValidator(),
	validator,
	authMiddleware,
	addProblemToPlaylist
);

/**
 * @swagger
 * /api/v1/playlist/{playlistId}:
 *   delete:
 *     summary: Delete a playlist
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the playlist
 *     responses:
 *       200:
 *         description: Playlist deleted successfully
 */
playlistRouter.delete(
	"/:playlistId",
	playlistIdPramaValidator(),
	validator,
	authMiddleware,
	deletePlaylist
);

/**
 * @swagger
 * /api/v1/playlist/{playlistId}/remove-problem:
 *   delete:
 *     summary: Remove problems from a playlist
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the playlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - problemIds
 *             properties:
 *               problemIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Problems removed from playlist
 */
playlistRouter.delete(
	"/:playlistId/remove-problem",
	authMiddleware,
	playlistProblemsValidator(),
	validator,
	removeProblemFromPlaylist
);

/**
 * @swagger
 * /api/v1/playlist/{playlistId}/update:
 *   patch:
 *     summary: Update playlist details
 *     tags: [Playlist]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the playlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Playlist updated successfully
 */
playlistRouter.patch(
	"/:playlistId/update",
	authMiddleware,
	updatedPlaylistValidator(),
	validator,
	updatePlaylist
);

export default playlistRouter;
