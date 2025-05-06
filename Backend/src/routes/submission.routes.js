import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	getAllSubmission,
	getSubmissionAllForProblem,
	getSubmissionForProblem,
} from "../controllers/submissions.controllers.js";

const submissionRouter = express.Router();

submissionRouter.get(
  "/get-all-submissions", 
  authMiddleware, 
  getAllSubmission
);

submissionRouter.get(
	"/get-submission/:problemId",
	authMiddleware,
	getSubmissionForProblem
);

submissionRouter.get(
	"/get-submissions-count/:problemId",
	authMiddleware,
	getSubmissionAllForProblem
);

export default submissionRouter;
