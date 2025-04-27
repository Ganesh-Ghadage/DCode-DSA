import { db } from '../libs/db.js'
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getJudge0LangunageId, pollbatchResults, submitBatch } from "../utils/jude0.utils.js";

export const createProblem = asyncHandler(async (req, res) => {
  // get required details from req.body
  const {title, description, difficulty, tags, examples, constraints, testcases, codeSnippets, referenceSolutions} = req.body

  // check user role once again
  if(req.user.role !== "ADMIN") {
    throw new ApiError(403, "You are not allowed to create problem, only Admin can add it")
  }

  try {
    // loop through each referance solution for different langunage
    for(const [language, solutionCode] of Object.entries(referenceSolutions)) {
      // get judge0 language id for current langunage
      const languageId = getJudge0LangunageId(language)

      if(!languageId) {
        throw new ApiError(406, `langunage ${language} is not supported`)
      }

      // prepare judge0 submission for all the test cases
      const submissions = testcases.map(({input, output}) => (
        {
          source_code: solutionCode,
          language_id: languageId,
          stdin: input,
          expected_output: output
        }
      ))

      // submit all test cases in one batch
      const submissionResult = await submitBatch(submissions)

      // extract tokens from submission
      const tokens = submissionResult.map(res => res.token) 

      // poll judge0 utill all submissions are done
      const results = await pollbatchResults(tokens)

      // validate data for each test case
      for(let i = 0; i < results.length; i++) {
        const result = results[i]

        if(result.status.id !== 3) {
          throw new ApiError(400, `Testcase ${i+1} failed for langunage ${language}, status: ${result.status.description}`)
        }
      }
    }
    // save the problem in database after all validations are passed
    const problem = await db.problem.create({
      data: {
        title, 
        description, 
        difficulty, 
        tags, 
        examples, 
        constraints, 
        testcases, 
        codeSnippets, 
        referenceSolutions,
        userId: req.user.id
      }
    })

    return res.status(201).json(new ApiResponce(201, problem, "Problem created successfully"))
  
  } catch (error) {
    console.error("Error while creating problem: ", error)

    throw new ApiError(500, error?.message || "Error while creating problem: ", error)
  }
})

export const getALLProblems = asyncHandler(async (req, res) => {})

export const getProblemById = asyncHandler(async (req, res) => {})

export const updateProblem = asyncHandler(async (req, res) => {})

export const deleteProblem = asyncHandler(async (req, res) => {})

export const getALLProblemSolvedByUser = asyncHandler(async (req, res) => {})