import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const healthCheck = asyncHandler(async (req, res) => {
	res
		.status(200)
		.json(
			new ApiResponce(200, { message: "Server is up and running" }),
			"Sucess"
		);
});
