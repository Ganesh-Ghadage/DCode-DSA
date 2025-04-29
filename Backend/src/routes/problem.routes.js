import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { checkAdmin } from '../middlewares/admin.middleware.js'
import { createProblem, deleteProblem, getALLProblems, getALLProblemSolvedByUser, getProblemById, updateProblem } from '../controllers/problem.controllers.js'
import { problemFieldsValidator, problemIdValidator, problemIdAndFieldValidator } from '../validators/problem.validators.js'
import validator from '../middlewares/validate.middleware.js'

const problemRouter = express.Router()

problemRouter.post("/create-problem", authMiddleware, checkAdmin, problemFieldsValidator(), validator, createProblem)

problemRouter.get("/get-all-problems", authMiddleware, getALLProblems)

problemRouter.get("/get-problem/:id", authMiddleware, problemIdValidator(), validator, getProblemById)

problemRouter.put("/update-problem/:id", authMiddleware, checkAdmin, problemIdAndFieldValidator(), validator, updateProblem)

problemRouter.delete("/delete-problem/:id", authMiddleware, checkAdmin, problemIdValidator(), validator, deleteProblem)

problemRouter.get("get-solved-problems", authMiddleware, getALLProblemSolvedByUser)

export default problemRouter