import { body, param } from "express-validator";

export const createPaymentValidator = () => {
  return [
    body("sheetId")
      .trim()
      .notEmpty().withMessage("Sheet Id is required")
  ]
}

export const verifyPaymentValidator = () => {
  return [
    body("razorpayOrderId")
      .trim()
      .notEmpty().withMessage("razorpayOrderId is required"),
    body("razorpayPaymentId")
      .trim()
      .notEmpty().withMessage("razorpayPaymentId is required"),
    body("razorpaySignature")
      .trim()
      .notEmpty().withMessage("razorpaySignature is required")
  ]
}