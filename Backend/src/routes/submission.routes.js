import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	getAllSubmission,
	getSubmissionAllForProblem,
	getSubmissionForProblem,
} from "../controllers/submissions.controllers.js";

const submissionRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Submissions
 *   description: API for handling code submissions
 */

/**
 * @swagger
 * /api/v1/submissions/get-all-submissions:
 *   get:
 *     summary: Get all submissions by the logged-in user
 *     tags: [Submissions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All submissions fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Submission'
 *                 message:
 *                   type: string
 *       400:
 *         description: Submissions not found for the user
 */
submissionRouter.get("/get-all-submissions", authMiddleware, getAllSubmission);

/**
 * @swagger
 * /api/v1/submissions/get-submission/{problemId}:
 *   get:
 *     summary: Get all submissions by the user for a specific problem
 *     tags: [Submissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: problemId
 *         required: true
 *         schema:
 *           type: string
 *         description: Problem ID to fetch submissions for
 *     responses:
 *       200:
 *         description: Submissions for the problem fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Submission'
 *                 message:
 *                   type: string
 *       400:
 *         description: Submissions not found for the problem
 */
submissionRouter.get(
	"/get-submission/:problemId",
	authMiddleware,
	getSubmissionForProblem
);

/**
 * @swagger
 * /api/v1/submissions/get-submissions-count/{problemId}:
 *   get:
 *     summary: Get count of all submissions for a problem (admin/report usage)
 *     tags: [Submissions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: problemId
 *         required: true
 *         schema:
 *           type: string
 *         description: Problem ID to count submissions for
 *     responses:
 *       200:
 *         description: Count of submissions fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: object
 *                   properties:
 *                     count:
 *                       type: integer
 *                 message:
 *                   type: string
 *       400:
 *         description: Submissions not found for the problem
 */
submissionRouter.get(
	"/get-submissions-count/:problemId",
	authMiddleware,
	getSubmissionAllForProblem
);

export default submissionRouter;
