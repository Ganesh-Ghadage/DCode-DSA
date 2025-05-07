import express from "express";
import {
	addProblemInSheet,
	createSheet,
	deleteSheet,
	getAllSheets,
	getSheetById,
	removeProblemFromSheet,
	updateSheet,
} from "../controllers/sheet.controllers";

const sheetRouter = express.Router();

sheetRouter.post("/create-sheet", createSheet);

sheetRouter.get("/", getAllSheets);

sheetRouter.get("/:sheetId", getSheetById);

sheetRouter.patch("/update-sheet/:sheetId", updateSheet);

sheetRouter.post("/:sheetId/add-problem", addProblemInSheet);

sheetRouter.delete("/:sheetId/remove-problem", removeProblemFromSheet);

sheetRouter.delete("/:sheetId", deleteSheet);

export default sheetRouter;
