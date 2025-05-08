import { body } from 'express-validator'

export const sheetFieldsValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty().withMessage("Title is required"),
    body("company")
      .trim()
      .notEmpty().withMessage("Company is required"),
    body("description")
      .trim()
      .isLength({max: 200}).withMessage("Description can not be more that 200 chars")
  ]
}