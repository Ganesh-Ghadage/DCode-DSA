import type { User } from "./User";

export type OrderStatus = "created" | "paid" | "failed";

export interface Order {
  id: string;
  userId: string;
  sheetId: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  amount: number; // in paise
  status: OrderStatus;
  createdAt: string; // ISO date string
  updatedAt: string;

  user?: User;
}