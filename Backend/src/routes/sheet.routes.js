import express from "express";
import {
	addProblemInSheet,
	createSheet,
	deleteSheet,
	getAllSheets,
	getSheetById,
	removeProblemFromSheet,
	updateSheet,
} from "../controllers/sheet.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkAdmin } from "../middlewares/admin.middleware.js";
import {
	sheetFieldsValidator,
	sheetIdParamsValidator,
	sheetProblemsValidator,
	updatedSheetValidator,
} from "../validators/sheet.validators.js";
import validator from "../middlewares/validate.middleware.js";

const sheetRouter = express.Router();

sheetRouter.post(
	"/create-sheet",
	authMiddleware,
	checkAdmin,
	sheetFieldsValidator(),
	validator,
	createSheet
);

sheetRouter.get("/", authMiddleware, getAllSheets);

sheetRouter.get(
	"/:sheetId",
	authMiddleware,
	sheetIdParamsValidator(),
	validator,
	getSheetById
);

sheetRouter.patch(
	"/update-sheet/:sheetId",
	authMiddleware,
	checkAdmin,
	updatedSheetValidator(),
	validator,
	updateSheet
);

sheetRouter.post(
	"/:sheetId/add-problem",
	authMiddleware,
	checkAdmin,
	sheetProblemsValidator(),
	validator,
	addProblemInSheet
);

sheetRouter.delete(
	"/:sheetId/remove-problem",
	authMiddleware,
	checkAdmin,
	sheetProblemsValidator(),
	validator,
	removeProblemFromSheet
);

sheetRouter.delete(
	"/:sheetId",
	authMiddleware,
	checkAdmin,
	sheetIdParamsValidator(),
	validator,
	deleteSheet
);

export default sheetRouter;
