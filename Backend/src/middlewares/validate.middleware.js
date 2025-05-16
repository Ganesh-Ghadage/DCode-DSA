import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

const validator = (req, res, next) => {
	const errors = validationResult(req);

	if (errors.isEmpty()) {
		return next();
	}

	const extractedError = [];
	errors.array().map((err) => {
		extractedError.push({
			[err.path]: err.msg,
		});
	});

	throw new ApiError(422, "Data is not valid", extractedError);
};

export default validator;
