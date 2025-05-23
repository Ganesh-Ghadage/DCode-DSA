import { type User, type Problem, type TestCaseResult } from './index';

export interface Submission {
  id: string;
  userId: string;
  problemId: string;
  sourceCode: any;
  language: string;
  stdin?: string;
  stdout?: string;
  stderr?: string;
  compileOutput?: string;
  status: string;
  memory?: string;
  time?: string;
  createdAt: string;
  updatedAt: string;

  user?: User;
  problem?: Problem;
  testCases?: TestCaseResult[];
}
