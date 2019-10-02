module.exports = {
	clearMocks: true,
	coverageDirectory: "coverage",
	
	coveragePathIgnorePatterns: [
		"/node_modules/"
	],
	
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 95,
			lines: 95,
			statements: 95
		}
	},
	
	moduleFileExtensions: [
		"js",
		"json",
		"ts",
		"node"
	],
	
	roots: [
		"src/"
	],
	
	setupFiles: ["<rootDir>/setupTests.ts"],
	
	
	testEnvironment: "node",
	
	transform: {
		".*.ts": "ts-jest",
		".*.tsx": "ts-jest"
	},
};
