import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createSheet = asyncHandler(async (req, res) => {
	const { title, company, description } = req.body;

	try {
		const exisitingSheet = await db.Sheet.findUnique({
			where: {
				title_company: {
					title,
					company,
				},
			},
		});

		if (exisitingSheet) {
			throw new ApiError(406, `${title} sheet already exists for ${company}`);
		}

		const sheet = await db.Sheet.create({
			data: {
				title,
				company,
				description,
				userId: req.user.id,
			},
		});

		if (!sheet) {
			throw new ApiError(400, "Sheet creation failed");
		}

		return res
			.status(201)
			.json(new ApiResponce(201, sheet, "Sheet created successfully"));
	} catch (error) {
		console.error("Error While creating sheet", error);
		throw new ApiError(
			error.statusCode || 500,
			error?.message || "Error While creating sheet",
			error
		);
	}
});

export const getAllSheets = asyncHandler(async (req, res) => {});

export const getSheetById = asyncHandler(async (req, res) => {});

export const updateSheet = asyncHandler(async (req, res) => {});

export const addProblemInSheet = asyncHandler(async (req, res) => {});

export const removeProblemFromSheet = asyncHandler(async (req, res) => {});

export const deleteSheet = asyncHandler(async (req, res) => {});
