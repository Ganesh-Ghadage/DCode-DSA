import { type Difficulty } from './common';
import { type Submission, type ProblemSolved, type ProblemInPlaylist, type ProblemInSheet, type User } from './index';

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  tags: string[];
  userId: string;
  examples: {
    input: string;
    output: string;
    explanation?: string | undefined;
  }[];
  constraints: string;
  hints?: string;
  editorial?: string;
  testcases: {
    input: string;
    output: string;
  }[];
  codeSnippets: {
    JavaScript: string,
    Java: string,
    Python: string
  };
  referenceSolutions: {
    JavaScript: string,
    Java: string,
    Python: string
  };
  createdAt: string;
  updatedAt: string;

  User: User;
  submission: Submission[] | [];
  solvedBy: ProblemSolved[] | [];
  problemsPlaylist: ProblemInPlaylist[] | [];
  problemsSheet: ProblemInSheet[] | [];
}
