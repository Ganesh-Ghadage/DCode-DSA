import { db } from "../libs/db.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
	getLanguageById,
	pollbatchResults,
	submitBatch,
} from "../utils/jude0.utils.js";

export const executeCode = asyncHandler(async (req, res) => {
	const { source_code, language_id, stdin, expected_outputs, problemId } =
		req.body;
	const userId = req.user.id;

	if (
		!Array.isArray(stdin) ||
		stdin.length === 0 ||
		!Array.isArray(expected_outputs) ||
		expected_outputs.length === 0 ||
		stdin.length !== expected_outputs.length
	) {
		throw new ApiError(422, "Invalid or missing test cases");
	}

	const problem = await db.problem.findUnique({
		where: {
			id: problemId,
		},
	});

	if (!problem) {
		throw new ApiError(401, "Invalid problem Id");
	}

	const jude0Submissions = stdin.map((input) => ({
		source_code,
		language_id,
		stdin: input,
	}));

	const submissionResult = await submitBatch(jude0Submissions);

	const tokens = submissionResult.map((res) => res.token);

	const results = await pollbatchResults(tokens);

	let allPassed = true;
	const detailedResult = results.map((result, idx) => {
		const stdout = result.stdout?.trim();
		const expected_output = expected_outputs[idx]?.trim();
		const passed = stdout === expected_output;

		if (!passed) allPassed = false;

		return {
			testCase: idx + 1,
			passed,
			stdout,
			expected: expected_output,
			stderr: result.stderr || null,
			compile_output: result.compile_output || null,
			status: result.status.description,
			memory: result.memory ? `${result.memory} KB` : null,
			time: result.time ? `${result.time} s` : null,
		};
	});

	const language = getLanguageById(language_id);

	const submission = await db.Submission.create({
		data: {
			userId,
			problemId,
			sourceCode: { [language]: source_code },
			language,
			stdin: stdin.join("\n"),
			stdout: JSON.stringify(detailedResult.map((r) => r.stdout)),
			stderr: detailedResult.some((r) => r.stderr)
				? JSON.stringify(detailedResult.map((r) => r.stderr))
				: null,
			compileOutput: detailedResult.some((r) => r.compile_output)
				? JSON.stringify(detailedResult.map((r) => r.compile_output))
				: null,
			status: allPassed ? "Accepted" : "Wrong Answer",
			memory: detailedResult.some((r) => r.memory)
				? JSON.stringify(detailedResult.map((r) => r.memory))
				: null,
			time: detailedResult.some((r) => r.time)
				? JSON.stringify(detailedResult.map((r) => r.time))
				: null,
		},
	});

	if (!submission) {
		throw new ApiError(500, "Failed to sumbit data");
	}

	const testCaseResult = detailedResult.map((result) => ({
		submissionId: submission.id,
		testCase: result.testCase,
		passed: result.passed,
		stdout: result.stdout,
		expected: result.expected,
		stderr: result.stderr,
		compileOutput: result.compile_output,
		status: result.status,
		memory: result.memory,
		time: result.time,
	}));

	const testCases = await db.TestCaseResult.createMany({
		data: testCaseResult,
	});

	if (!testCases) {
		throw new ApiError(500, "Failed to sumbit data");
	}

	if (allPassed) {
		const problemSolved = await db.ProblemSolved.upsert({
			where: {
				userId_problemId: {
					userId,
					problemId,
				},
			},
			update: {},
			create: {
				userId,
				problemId,
			},
		});

		if (!problemSolved) {
			throw new ApiError(500, "Failed to sumbit data");
		}
	}

	const submissionWithTestCases = await db.submission.findUnique({
		where: {
			id: submission.id,
		},
		include: {
			testCases: true,
		},
	});

	return res
		.status(200)
		.json(
			new ApiResponce(
				200,
				submissionWithTestCases,
				"Code executed successfully"
			)
		);
});

export const runCode = asyncHandler(async (req, res) => {
	const { source_code, language_id, stdin, expected_outputs, problemId } =
		req.body;
	const userId = req.user.id;

	if (
		!Array.isArray(stdin) ||
		stdin.length === 0 ||
		!Array.isArray(expected_outputs) ||
		expected_outputs.length === 0 ||
		stdin.length !== expected_outputs.length
	) {
		throw new ApiError(422, "Invalid or missing test cases");
	}

	const problem = await db.problem.findUnique({
		where: {
			id: problemId,
		},
	});

	if (!problem) {
		throw new ApiError(401, "Invalid problem Id");
	}

	const jude0Submissions = stdin.map((input) => ({
		source_code,
		language_id,
		stdin: input,
	}));

	const submissionResult = await submitBatch(jude0Submissions);

	const tokens = submissionResult.map((res) => res.token);

	const results = await pollbatchResults(tokens);

	let allPassed = true;
	const detailedResult = results.map((result, idx) => {
		const stdout = result.stdout?.trim();
		const expected_output = expected_outputs[idx]?.trim();
		const passed = stdout === expected_output;

		if (!passed) allPassed = false;

		return {
			testCase: idx + 1,
			passed,
			stdout,
			expected: expected_output,
			stderr: result.stderr || null,
			compile_output: result.compile_output || null,
			status: result.status.description,
			memory: result.memory ? `${result.memory} KB` : null,
			time: result.time ? `${result.time} s` : null,
		};
	});

	const language = getLanguageById(language_id);

	const submission = {
			userId,
			problemId,
			sourceCode: { [language]: source_code },
			language,
			stdin: stdin.join("\n"),
			stdout: JSON.stringify(detailedResult.map((r) => r.stdout)),
			stderr: detailedResult.some((r) => r.stderr)
				? JSON.stringify(detailedResult.map((r) => r.stderr))
				: null,
			compileOutput: detailedResult.some((r) => r.compile_output)
				? JSON.stringify(detailedResult.map((r) => r.compile_output))
				: null,
			status: allPassed ? "Accepted" : "Wrong Answer",
			memory: detailedResult.some((r) => r.memory)
				? JSON.stringify(detailedResult.map((r) => r.memory))
				: null,
			time: detailedResult.some((r) => r.time)
				? JSON.stringify(detailedResult.map((r) => r.time))
				: null,
		};

	const testCaseResult = detailedResult.map((result) => ({
		submissionId: submission.id,
		testCase: result.testCase,
		passed: result.passed,
		stdout: result.stdout,
		expected: result.expected,
		stderr: result.stderr,
		compileOutput: result.compile_output,
		status: result.status,
		memory: result.memory,
		time: result.time,
	}));

	const submissionWithTestCases = {...submission, testCases: testCaseResult}

	return res
		.status(200)
		.json(
			new ApiResponce(
				200,
				submissionWithTestCases,
				"Code Run successfully"
			)
		);
});