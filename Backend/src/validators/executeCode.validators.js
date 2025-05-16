import { body } from "express-validator";

export const executeCodeValidator = () => {
	return [
		body("source_code")
			.trim()
			.notEmpty().withMessage("Source code is required"),
		body("language_id")
			.trim()
			.notEmpty().withMessage("Language Id is required"),
		body("stdin")
			.trim()
			.notEmpty().withMessage("Standard Inputs are required")
			.isArray({ min: 1 }).withMessage("Inputs should be in array or atleat contain any value"),
		body("expected_outputs")
			.trim()
			.notEmpty().withMessage("Expected Outputs are required")
			.isArray({ min: 1 }).withMessage("Outputs should be in array or atleat contain any value"),
		body("problemId")
      .trim()
      .notEmpty().withMessage("Problem Id is required"),
	];
};
