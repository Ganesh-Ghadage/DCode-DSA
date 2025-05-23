import { type User, type ProblemInSheet } from './index';

export interface Sheet {
  id: string;
  title: string;
  company: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  user?: User;
  problems?: ProblemInSheet[];
}
