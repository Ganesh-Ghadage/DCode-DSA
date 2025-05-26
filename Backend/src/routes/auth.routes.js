import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
	changePasswordViaTokenValidator,
	forgotPasswordValidator,
	refreshAccessTokenValidator,
	updatePasswordValidator,
	userLoginValidator,
	userRegistrationValidator,
	userVerificationValidator,
} from "../validators/auth.validators.js";
import validate from "../middlewares/validate.middleware.js";
import {
	changePasswordViaToken,
	forgotPassword,
	getUserProfile,
	loginUser,
	logoutUser,
	refreshAccessToken,
	registerUser,
	resendVerificationMail,
	updatePassword,
	verifyUser,
} from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { apiRateLimiter } from "../utils/rateLimiter.js";

const authRouter = express.Router();

const authLimit = apiRateLimiter(5, 10);

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User registered successfully
 */
authRouter.post(
	"/register",
	authLimit,
	upload.single("image"),
	userRegistrationValidator(),
	validate,
	registerUser
);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Log in a user
 *     responses:
 *       200:
 *         description: Login successful
 */
authRouter.post("/login", authLimit, upload.none(), userLoginValidator(), validate, loginUser);

/**
 * @swagger
 * /api/v1/auth/verify/{token}:
 *   get:
 *     tags: [Auth]
 *     summary: Verify user email with token
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email verified
 */
authRouter.get(
	"/verify/:token",
	upload.none(),
	userVerificationValidator(),
	validate,
	verifyUser
);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Log out the current user
 *     responses:
 *       200:
 *         description: Logout successful
 */
authRouter.post("/logout", upload.none(), authMiddleware, logoutUser);

/**
 * @swagger
 * /api/v1/auth/profile:
 *   get:
 *     tags: [Auth]
 *     summary: Get the profile of the current user
 *     responses:
 *       200:
 *         description: Profile data returned
 */
authRouter.get("/profile", upload.none(), authMiddleware, getUserProfile);

/**
 * @swagger
 * /api/v1/auth/resend-verify-email:
 *   post:
 *     tags: [Auth]
 *     summary: Resend email verification link
 *     responses:
 *       200:
 *         description: Verification email sent
 */
authRouter.post("/resend-verify-email", upload.none(), authMiddleware, resendVerificationMail);

/**
 * @swagger
 * /api/v1/auth/refresh-tokens:
 *   post:
 *     tags: [Auth]
 *     summary: Refresh access and refresh tokens
 *     responses:
 *       200:
 *         description: Tokens refreshed
 */
authRouter.post(
	"/refresh-tokens",
	upload.none(),
	refreshAccessTokenValidator(),
	validate,
	authMiddleware,
	refreshAccessToken
);

/**
 * @swagger
 * /api/v1/auth/forgot-password:
 *   post:
 *     tags: [Auth]
 *     summary: Send password reset email
 *     responses:
 *       200:
 *         description: Reset link sent
 */
authRouter.post(
	"/forgot-password",
	upload.none(),
	forgotPasswordValidator(),
	validate,
	forgotPassword
);

/**
 * @swagger
 * /api/v1/auth/change-password/{token}:
 *   put:
 *     tags: [Auth]
 *     summary: Change password using token
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Password changed
 */
authRouter.put(
	"/change-password/:token",
	upload.none(),
	changePasswordViaTokenValidator(),
	validate,
	changePasswordViaToken
);

/**
 * @swagger
 * /api/v1/auth/update-password:
 *   put:
 *     tags: [Auth]
 *     summary: Change password for logged-in user
 *     responses:
 *       200:
 *         description: Password updated
 */
authRouter.put(
	"/update-password",
	upload.none(),
	updatePasswordValidator(),
	validate,
	updatePassword
);

export default authRouter;
