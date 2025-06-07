import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
	createPaymentValidator,
	verifyPaymentValidator,
} from "../validators/payment.validators.js";
import validator from "../middlewares/validate.middleware.js";
import {
	createOrder,
	razorpayWebhookHandler,
	verifyPayment,
} from "../controllers/payment.controllers.js";

const paymentRouter = express.Router();

paymentRouter.post(
	"/create-order",
	authMiddleware,
	createPaymentValidator(),
	validator,
	createOrder
);

paymentRouter.post(
	"/verify",
	authMiddleware,
	verifyPaymentValidator(),
	validator,
	verifyPayment
);

paymentRouter.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	razorpayWebhookHandler
);

export default paymentRouter;
