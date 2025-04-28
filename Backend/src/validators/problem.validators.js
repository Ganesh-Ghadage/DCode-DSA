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
      .isArray()
      .notEmpty().withMessage("examples are required"),
    body("constraints")
      .trim()
      .notEmpty().withMessage("constraints are required"),
    body("testcases")
      .isArray()
      .notEmpty().withMessage("testcases are required"),
    body("codeSnippets")
      .isObject()
      .notEmpty().withMessage("codeSnippets are required"),
    body("referenceSolutions")
      .isObject()
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

export const updateProblemValidator = () => {
  return [
    param("id")
      .trim()
      .notEmpty().withMessage("Problem id is required"),
    createProblemValidator()
  ]
}