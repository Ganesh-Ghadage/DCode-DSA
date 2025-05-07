import swaggerAutogen from "swagger-autogen";

const doc = {
	openapi: "3.0.0",
	info: {
		title: "DCode DSA API",
		description: "Personalized DSA learning platform",
		version: "1.0.0",
	},
	servers: [
		{
			url: "http://localhost:8080",
		},
	],
	tags: [
		{
			name: "Auth",
			description: "Authentication routes",
		},
		{
			name: "Health",
			description: "Health check route",
		},
		{
			name: "ExecuteCode",
			description: "Code execution route",
		},
		{
			name: "Playlist",
			description: "Playlist management route",
		},
		{
			name: "Problem",
			description: "Problem management route",
		},
		{
			name: "Submission",
			description: "Code submission route",
		},
	],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
	"./src/routes/auth.routes.js",
	"./src/routes/executeCode.routes.js",
	"./src/routes/healthCheck.routes.js",
	"./src/routes/playlist.routes.js",
	"./src/routes/problem.routes.js",
	"./src/routes/submission.routes.js",
];

swaggerAutogen()(outputFile, endpointsFiles, doc);
