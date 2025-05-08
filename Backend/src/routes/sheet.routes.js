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

/**
 * @swagger
 * tags:
 *   name: Sheets
 *   description: Sheet management and problem association
 */

/**
 * @swagger
 * /api/v1/sheet/create-sheet:
 *   post:
 *     summary: Create a new sheet
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - company
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sheet created successfully
 *       406:
 *         description: Sheet already exists
 */
sheetRouter.post(
	"/create-sheet",
	authMiddleware,
	checkAdmin,
	sheetFieldsValidator(),
	validator,
	createSheet
);

/**
 * @swagger
 * /api/v1/sheet:
 *   get:
 *     summary: Get all sheets
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sheets fetched successfully
 *       404:
 *         description: No sheets found
 */
sheetRouter.get("/", authMiddleware, getAllSheets);

/**
 * @swagger
 * /api/v1/sheet/{sheetId}:
 *   get:
 *     summary: Get a sheet by ID with its problems
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sheetId
 *         required: true
 *         schema:
 *           type: string
 *         description: The sheet ID
 *     responses:
 *       200:
 *         description: Sheet fetched successfully
 *       404:
 *         description: Sheet not found
 */
sheetRouter.get(
	"/:sheetId",
	authMiddleware,
	sheetIdParamsValidator(),
	validator,
	getSheetById
);

/**
 * @swagger
 * /api/v1/sheet/update-sheet/{sheetId}:
 *   patch:
 *     summary: Update a sheet's information
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sheetId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the sheet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sheet updated successfully
 *       404:
 *         description: Sheet not found
 */
sheetRouter.patch(
	"/update-sheet/:sheetId",
	authMiddleware,
	checkAdmin,
	updatedSheetValidator(),
	validator,
	updateSheet
);

/**
 * @swagger
 * /api/v1/sheet/{sheetId}/add-problem:
 *   post:
 *     summary: Add problems to a sheet
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sheetId
 *         required: true
 *         schema:
 *           type: string
 *         description: Sheet ID
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
 *         description: Problems added successfully
 *       404:
 *         description: Sheet not found
 */
sheetRouter.post(
	"/:sheetId/add-problem",
	authMiddleware,
	checkAdmin,
	sheetProblemsValidator(),
	validator,
	addProblemInSheet
);

/**
 * @swagger
 * /api/v1/sheet/{sheetId}/remove-problem:
 *   delete:
 *     summary: Remove problems from a sheet
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sheetId
 *         required: true
 *         schema:
 *           type: string
 *         description: Sheet ID
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
 *         description: Problems removed successfully
 *       404:
 *         description: Sheet not found
 */
sheetRouter.delete(
	"/:sheetId/remove-problem",
	authMiddleware,
	checkAdmin,
	sheetProblemsValidator(),
	validator,
	removeProblemFromSheet
);

/**
 * @swagger
 * /api/v1/sheet/{sheetId}:
 *   delete:
 *     summary: Delete a sheet by ID
 *     tags: [Sheets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sheetId
 *         required: true
 *         schema:
 *           type: string
 *         description: Sheet ID
 *     responses:
 *       200:
 *         description: Sheet deleted successfully
 *       404:
 *         description: Sheet not found or already deleted
 */
sheetRouter.delete(
	"/:sheetId",
	authMiddleware,
	checkAdmin,
	sheetIdParamsValidator(),
	validator,
	deleteSheet
);

export default sheetRouter;
