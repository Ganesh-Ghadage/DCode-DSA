import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { db } from "../libs/db.js";
import { razorpay } from "../utils/razorpay.js";
import crypto from "crypto";

export const createOrder = asyncHandler(async (req, res) => {
	const { sheetId } = req.body;
	const userId = req.user.id;

	const sheet = await db.sheet.findUnique({ where: { id: sheetId } });
	if (!sheet || !sheet.isPaid)
		throw new ApiError(404, "Sheet not found or not paid");

	const order = await razorpay.orders.create({
		amount: sheet.price,
		currency: "INR",
		receipt: `receipt_${Date.now()}`,
	});

	const dbOrder = await db.order.create({
		data: {
			userId,
			sheetId,
			razorpayOrderId: order.id,
			amount: sheet.price,
			status: "created",
		},
	});

	res.status(200).json(
		new ApiResponce(
			200,
			{
				orderId: order.id,
				amount: sheet.price,
				key: process.env.RAZORPAY_KEY_ID,
			},
			"Order Created sucessfully"
		)
	);
});

export const verifyPayment = asyncHandler(async (req, res) => {
	const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

	const body = `${razorpayOrderId}|${razorpayPaymentId}`;
	const expectedSignature = crypto
		.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
		.update(body)
		.digest("hex");

	const isValid = expectedSignature === razorpaySignature;
	if (!isValid) throw new ApiError(400, "Invalid payment signature");

	await db.order.updateMany({
		where: { razorpayOrderId },
		data: {
			razorpayPaymentId,
			razorpaySignature,
			status: "paid",
		},
	});

	res
		.status(200)
		.json(
			new ApiResponce(200, { success: true }, "Payment verified successfully")
		);
});

export const razorpayWebhookHandler = asyncHandler(async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const razorpaySignature = req.headers["x-razorpay-signature"];

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(req.body.toString())
    .digest("hex");

  if (razorpaySignature !== expectedSignature) {
		throw new ApiError(400, "Invalid webhook signature")
  }

  const event = JSON.parse(req.body.toString());

  // Handle successful payment
  if (event.event === "payment.captured" || event.event === "payment.authorized") {
    const payment = event.payload.payment.entity;

    // Update your Order table
    await db.order.updateMany({
      where: {
        razorpayOrderId: payment.order_id,
      },
      data: {
        status: "paid",
        razorpayPaymentId: payment.id,
      },
    });
  }

  res.status(200).json({ success: true });
});
