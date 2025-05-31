import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { userDashboard } from "../controllers/dashboard.controllers.js";

const dashboardRouter = express.Router()

dashboardRouter.get("/", authMiddleware, userDashboard)

export default dashboardRouter