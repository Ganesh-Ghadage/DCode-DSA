import express from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const healthCheckRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: Health check for the API
 */

/**
 * @swagger
 * /api/v1/health-check:
 *   get:
 *     summary: Perform a health check of the server
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is healthy and reachable
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   example: { status: "OK" }
 *                 message:
 *                   type: string
 *                   example: "Health check passed"
 */
healthCheckRouter.get("/", healthCheck);

export default healthCheckRouter;
