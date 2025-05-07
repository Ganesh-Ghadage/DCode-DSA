import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { checkAdmin } from "../middlewares/admin.middleware.js";
import {
	createProblem,
	deleteProblem,
	getALLProblems,
	getALLProblemSolvedByUser,
	getProblemById,
	updateProblem,
} from "../controllers/problem.controllers.js";
import {
	problemFieldsValidator,
	problemIdValidator,
	problemIdAndFieldValidator,
} from "../validators/problem.validators.js";
import validator from "../middlewares/validate.middleware.js";

const problemRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Problems
 *   description: Problem Management APIs
 */

/**
 * @swagger
 * /api/v1/problems/create-problem:
 *   post:
 *     summary: Create a new problem (Admin only)
 *     tags: [Problems]
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
 *               - description
 *               - difficulty
 *               - tags
 *               - examples
 *               - constraints
 *               - testcases
 *               - codeSnippets
 *               - referenceSolutions
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               difficulty:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               examples:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *               constraints:
 *                 type: array
 *                 items:
 *                   type: string
 *               testcases:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *               codeSnippets:
 *                 type: object
 *               referenceSolutions:
 *                 type: object
 *     responses:
 *       201:
 *         description: Problem created successfully
 *       403:
 *         description: Unauthorized - Admin access only
 */
problemRouter.post(
	"/create-problem",
	authMiddleware,
	checkAdmin,
	problemFieldsValidator(),
	validator,
	createProblem
);

/**
 * @swagger
 * /api/v1/problems/get-all-problems:
 *   get:
 *     summary: Get all problems
 *     tags: [Problems]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Problems fetched successfully
 */
problemRouter.get("/get-all-problems", authMiddleware, getALLProblems);

/**
 * @swagger
 * /api/v1/problems/get-problem/{id}:
 *   get:
 *     summary: Get problem by ID
 *     tags: [Problems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Problem ID
 *     responses:
 *       200:
 *         description: Problem fetched successfully
 *       404:
 *         description: Problem not found
 */
problemRouter.get(
	"/get-problem/:id",
	authMiddleware,
	problemIdValidator(),
	validator,
	getProblemById
);

/**
 * @swagger
 * /api/v1/problems/update-problem/{id}:
 *   put:
 *     summary: Update problem by ID (Admin only)
 *     tags: [Problems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Problem ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProblemInput'
 *     responses:
 *       200:
 *         description: Problem updated successfully
 *       404:
 *         description: Problem not found
 */
problemRouter.put(
	"/update-problem/:id",
	authMiddleware,
	checkAdmin,
	problemIdAndFieldValidator(),
	validator,
	updateProblem
);

/**
 * @swagger
 * /api/v1/problems/delete-problem/{id}:
 *   delete:
 *     summary: Delete problem by ID (Admin only)
 *     tags: [Problems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Problem ID
 *     responses:
 *       200:
 *         description: Problem deleted successfully
 *       404:
 *         description: Problem not found
 */
problemRouter.delete(
	"/delete-problem/:id",
	authMiddleware,
	checkAdmin,
	problemIdValidator(),
	validator,
	deleteProblem
);

/**
 * @swagger
 * /api/v1/problems/get-solved-problems:
 *   get:
 *     summary: Get all problems solved by the authenticated user
 *     tags: [Problems]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Solved problems fetched successfully
 *       404:
 *         description: No solved problems found
 */
problemRouter.get(
	"/get-solved-problems",
	authMiddleware,
	getALLProblemSolvedByUser
);

export default problemRouter;
