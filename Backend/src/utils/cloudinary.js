import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({
	path: "./.env",
});

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upolodOnClodinary = async (filePath) => {
	try {
		if (!filePath) return null;

		const result = await cloudinary.uploader.upload(filePath, {
			resource_type: "auto",
			folder: "leetlab",
		});

		fs.unlinkSync(filePath);

		return result;
	} catch (error) {
		fs.unlinkSync(filePath);

		throw new Error("File upload on cloudinary failed", error);
	}
};

const deleteFromCloudinary = async (publicUrl) => {
	try {
		if (!publicUrl) return false;

		const fileName = publicUrl.split("/").pop(); // Extract filename
		const publicId = `leetlab/${fileName.split(".").slice(0, -1).join(".")}`; // Extract publicId

		const result = await cloudinary.uploader.destroy(publicId, {
			resource_type: "image",
		});

		return result.result === "ok";
	} catch (error) {
		throw new ("Error while deleting file from cloudinary", error)();
	}
};

export { upolodOnClodinary, deleteFromCloudinary };
