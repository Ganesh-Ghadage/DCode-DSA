import { type Submission } from './index';

export interface TestCaseResult {
  id: string;
  submissionId: string;
  testCase: number;
  passed: boolean;
  stdout?: string;
  expected: string;
  stderr?: string;
  compileOutput?: string;
  status: string;
  memory?: string;
  time?: string;
  createdAt: string;
  updatedAt: string;

  submission?: Submission;
}
