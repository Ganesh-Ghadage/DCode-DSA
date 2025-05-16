import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "DCode DSA",
			description:
				"Personalized DSA learning platform to help you master algorithms and ace technical interviews.",
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
				description: "Authentication related routes",
			},
			{
				name: "Health",
				description: "Health check route",
			},
			{
				name: "ExecuteCode",
				description: "Code execution related APIs",
			},
			{
				name: "Playlist",
				description: "Playlist management route",
			},
			{
				name: "Problems",
				description: "Problem Management APIs",
			},
			{
				name: "Submissions",
				description: "API for handling code submissions",
			},
			{
				name: "Sheets",
				description: "Sheet management and problem association",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	apis: [
		"./src/routes/auth.routes.js",
		"./src/routes/executeCode.routes.js",
		"./src/routes/healthCheck.routes.js",
		"./src/routes/playlist.routes.js",
		"./src/routes/problem.routes.js",
		"./src/routes/submission.routes.js",
		"./src/routes/sheet.routes.js",
	],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };
