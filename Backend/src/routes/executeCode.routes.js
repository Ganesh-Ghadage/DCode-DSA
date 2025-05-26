import express from "express";
import { executeCode } from "../controllers/executeCode.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { executeCodeValidator } from "../validators/executeCode.validators.js";
import validator from "../middlewares/validate.middleware.js";
import { apiRateLimiter } from "../utils/rateLimiter.js";

const executeCodeRouter = express.Router();

const executionLimit = apiRateLimiter(1, 4);

/**
 * @swagger
 * tags:
 *   - name: ExecuteCode
 *     description: Code execution related routes
 */

/**
 * @swagger
 * /api/v1/execute-code:
 *   post:
 *     summary: Execute user code and test against multiple test cases
 *     tags: [ExecuteCode]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - source_code
 *               - language_id
 *               - stdin
 *               - expected_outputs
 *               - problemId
 *             properties:
 *               source_code:
 *                 type: string
 *                 example: "print(input())"
 *               language_id:
 *                 type: integer
 *                 example: 71
 *               stdin:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Hello", "World"]
 *               expected_outputs:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Hello", "World"]
 *               problemId:
 *                 type: string
 *                 format: uuid
 *                 example: "0c7e4dd3-92ef-4c4d-8417-bf799d1c3943"
 *     responses:
 *       200:
 *         description: Code executed and results returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Code executed successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: Submission ID
 *                     userId:
 *                       type: string
 *                       format: uuid
 *                     problemId:
 *                       type: string
 *                       format: uuid
 *                     language:
 *                       type: string
 *                     sourceCode:
 *                       type: object
 *                       additionalProperties:
 *                         type: string
 *                     status:
 *                       type: string
 *                     testCases:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           testCase:
 *                             type: integer
 *                             example: 1
 *                           passed:
 *                             type: boolean
 *                           stdout:
 *                             type: string
 *                           expected:
 *                             type: string
 *                           stderr:
 *                             type: string
 *                             nullable: true
 *                           compileOutput:
 *                             type: string
 *                             nullable: true
 *                           status:
 *                             type: string
 *                           memory:
 *                             type: string
 *                             nullable: true
 *                           time:
 *                             type: string
 *                             nullable: true
 *       401:
 *         description: Unauthorized
 *       422:
 *         description: Validation error for missing or malformed input
 *       500:
 *         description: Internal server error
 */
executeCodeRouter.post(
	"/",
	executionLimit,
	authMiddleware,
	executeCodeValidator(),
	validator,
	executeCode
);

export default executeCodeRouter;
