import { body, param } from 'express-validator'

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

export const sheetIdParamsValidator = () => {
  return [
    param("sheetId")
      .trim()
      .notEmpty().withMessage("Sheet id is required")
      .isUUID().withMessage("Invalid sheet Id")
  ]
}

export const updatedSheetValidator = () => {
  return [
    sheetFieldsValidator(),
    sheetIdParamsValidator()
  ]
}