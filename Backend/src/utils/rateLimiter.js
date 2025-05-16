import { rateLimit } from "express-rate-limit";
import { ApiError } from "./ApiError.js";

export const apiRateLimiter = (msTime, limit) => {
	return rateLimit({
		windowMs: msTime * 60 * 1000,
		limit: limit,
		standardHeaders: "draft-8",
		legacyHeaders: false,
		message: new ApiError(429, "Too Many Requests"),
	});
};
