import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const hasSheetAccess = asyncHandler(async (req, res, next) => {
	const userId = req.user?.id;
	const sheetId = req.params.sheetId || req.body.sheetId;

	if (!sheetId) {
		throw new ApiError(400, "Sheet ID is required");
	}

	try {
		const sheet = await db.sheet.findUnique({
			where: { id: sheetId },
		});

		if (!sheet) {
			throw new ApiError(404, "Sheet not found");
		}

		if (!sheet.isPaid) {
			return next();
		}

		const order = await db.order.findFirst({
			where: {
				sheetId,
				userId,
				status: "paid",
			},
		});

		if (!order) {
			throw new ApiError(403, "You must purchase this sheet to access it");
		}

		if(order.amount < sheet.price) {
			throw new ApiError(403, "You purchased sheet with invalid price");
		}

		return next();
	} catch (error) {
		throw new ApiError(
			error?.statusCode || 500,
			error?.message || "Error while authenticating user",
			error
		);
	}
});
