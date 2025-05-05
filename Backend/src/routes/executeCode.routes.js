import express from "express";
import { executeCode } from "../controllers/executeCode.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { executeCodeValidator } from "../validators/executeCode.validators.js";
import validator from "../middlewares/validate.middleware.js";

const executeCodeRouter = express.Router()

executeCodeRouter.post('/', authMiddleware, executeCodeValidator(), validator, executeCode)

export default executeCodeRouter