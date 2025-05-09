import { Prisma } from "../generated/prisma/index.js";
import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
	let error = err;

	if (!(error instanceof ApiError)) {
		const statusCode =
			error.statusCode || error instanceof Prisma.PrismaClientKnownRequestError
				? 400
				: 500;
		const errorMessage = error?.message || "Something Went Wrong";

		error = new ApiError(
			statusCode,
			errorMessage,
			error?.error || [],
			error?.stack
		);
	}

	const response = {
		...error,
		message: error.message,
		...(process.env.NODE_ENV === "development" ? { stack: error?.stack } : {}),
	};

	return res.status(error.statusCode).json(response);
};

export default errorHandler;
