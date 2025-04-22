import { body, cookie, param } from 'express-validator'

export const userRegistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid Email format"),
    body("name")
      .trim()
      .notEmpty().withMessage("Name is required"),
    body("password")
      .trim()
      .notEmpty().withMessage("Password is required")
      .isLength({min: 8}).withMessage("Username should be more than 8 char")
      .isLength({max: 20}).withMessage("Username cannot exceed more than 20 char")
      .isStrongPassword({minUppercase: 1, minNumbers: 2,  minSymbols: 1}).withMessage("Password should contain at least 1 Uppcase letter, 1 Symbol and at least 2 number"),
  ]
}


export const userLoginValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid Email format"),
    body("password")
      .trim()
      .notEmpty().withMessage("Password is required")
      .isLength({min: 8}).withMessage("Username should be more than 8 char")
      .isLength({max: 20}).withMessage("Username cannot exceed more than 20 char")
      .isStrongPassword({minUppercase: 1, minNumbers: 2,  minSymbols: 1}).withMessage("Password should contain at least 1 Uppcase letter, 1 Symbol and at least 2 number"),
  ]
}

export const userVerificationValidator = () => {
  return [
    param('token')
      .trim()
      .notEmpty().withMessage("Verfication token is required")
  ]
}

export const refreshAccessTokenValidator = () => {
  return [
    cookie("refreshToken")
      .trim()
      .notEmpty().withMessage("Refresh Token not found")
  ]
}

export const forgotPasswordValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Invalid Email format"),
  ]
}