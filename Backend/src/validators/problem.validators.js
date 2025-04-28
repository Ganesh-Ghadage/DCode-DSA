import { body, param } from 'express-validator'

export const createProblemValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty().withMessage("title is required"),
    body("description")
      .trim()
      .notEmpty().withMessage("description is required"),
    body("difficulty")
      .trim()
      .notEmpty().withMessage("difficulty is required")
      .isIn("EASY", "HARD", "MEDIUM").withMessage("difficulty not matched"),
    body("tags")
      .isArray()
      .notEmpty().withMessage("tags are required"),
    body("examples")
      .isJSON()
      .notEmpty().withMessage("examples are required"),
    body("constraints")
      .trim()
      .notEmpty().withMessage("constraints are required"),
    body("testcases")
      .isJSON()
      .notEmpty().withMessage("testcases are required"),
    body("codeSnippets")
      .isJSON()
      .notEmpty().withMessage("codeSnippets are required"),
    body("referenceSolutions")
      .isJSON()
      .notEmpty().withMessage("referenceSolutions are required"),
  ]
}

export const getProblemByIdValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty().withMessage("Problem id is required")
  ]
}