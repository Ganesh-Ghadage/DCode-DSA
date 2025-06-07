import { type User, type ProblemInSheet } from './index';
import type { Order } from './order';

export interface Sheet {
  id: string;
  title: string;
  company: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  isPaid: boolean;

  orders?: Order[];

  user?: User;
  problems?: ProblemInSheet[];
}
