import { z } from "zod"

export const problemSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  tags: z.array(
    z.string()
  ).min(1, "At least one tag is required"),
  constraints: z.string().min(1, "Constraints are required"),
  hints: z.string().optional(),
  editorial: z.string().optional(),
  testcases: z.array(
    z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
    })
  ).min(1, "At least one test case is required"),
  examples: z.array(
    z.object({
      input: z.string().min(1, "Input is required"),
      output: z.string().min(1, "Output is required"),
      explanation: z.string().optional(),
    })
  ).min(1, "At least one example is required"),
  codeSnippets: z.object({
    JavaScript: z.string().min(1, "JavaScript code snippet is required"),
    Python: z.string().min(1, "Python code snippet is required"),
    Java: z.string().min(1, "Java solution is required"),
  }),
  referenceSolutions: z.object({
    JavaScript: z.string().min(1, "JavaScript solution is required"),
    Python: z.string().min(1, "Python solution is required"),
    Java: z.string().min(1, "Java solution is required"),
  }),
});