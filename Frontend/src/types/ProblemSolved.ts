import { type User, type Problem } from './index';

export interface ProblemSolved {
  id: string;
  userId: string;
  problemId: string;
  createdAt: string;
  updatedAt: string;

  user?: User;
  problem?: Problem;
}
