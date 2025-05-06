import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	addProblemToPlaylist,
	createPlaylist,
	deletePlaylist,
	getAllPlaylistDetails,
	getPlaylistDetails,
	removeProblemFromPlaylist,
} from "../controllers/playlist.controllers.js";
import { createPlaylistValidator, playlistIdPramaValidator } from "../validators/playlist.validators.js";
import validator from "../middlewares/validate.middleware.js";

const playlistRouter = express.Router();

playlistRouter.get("/", authMiddleware, getAllPlaylistDetails);

playlistRouter.get(
  "/:playlistId", 
  authMiddleware, 
  playlistIdPramaValidator(),
  validator,
  getPlaylistDetails
);

playlistRouter.post(
  "/create-playlist", 
  authMiddleware, 
  createPlaylistValidator(), 
  validator, 
  createPlaylist
);

playlistRouter.post(
	"/:playlistId/add-problem",
	authMiddleware,
	addProblemToPlaylist
);

playlistRouter.delete("/:playlistId", authMiddleware, deletePlaylist);

playlistRouter.delete(
	"/:playlistId/remove-problem",
	authMiddleware,
	removeProblemFromPlaylist
);

export default playlistRouter;
