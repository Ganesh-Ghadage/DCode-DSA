import  { type Sheet, type Problem } from './index';

export interface ProblemInSheet {
  id: string;
  problemId: string;
  sheetId: string;
  createdAt: string;
  updatedAt: string;

  sheet?: Sheet;
  problem?: Problem;
}
