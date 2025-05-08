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
import { sheetFieldsValidator } from "../validators/sheet.validators.js";
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

sheetRouter.get("/", getAllSheets);

sheetRouter.get("/:sheetId", getSheetById);

sheetRouter.patch("/update-sheet/:sheetId", updateSheet);

sheetRouter.post("/:sheetId/add-problem", addProblemInSheet);

sheetRouter.delete("/:sheetId/remove-problem", removeProblemFromSheet);

sheetRouter.delete("/:sheetId", deleteSheet);

export default sheetRouter;
