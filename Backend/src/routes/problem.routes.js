import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { checkAdmin } from '../middlewares/admin.middleware.js'
import { createProblem, deleteProblem, getALLProblems, getALLProblemSolvedByUser, getProblemById, updateProblem } from '../controllers/problem.controllers.js'
import { getProblemByIdValidator } from '../validators/problem.validators.js'
import validator from '../middlewares/validate.middleware.js'

const problemRouter = express.Router()

problemRouter.post("/create-problem", authMiddleware, checkAdmin, createProblem)

problemRouter.get("/get-all-problems", authMiddleware, getALLProblems)

problemRouter.get("/get-problem/:id", authMiddleware, getProblemByIdValidator(), validator, getProblemById)

problemRouter.put("/update-problem/:id", authMiddleware, checkAdmin, updateProblem)

problemRouter.delete("/delete-problem/:id", authMiddleware, checkAdmin, deleteProblem)

problemRouter.get("get-solved-problems", authMiddleware, getALLProblemSolvedByUser)

export default problemRouter