module.exports = {
  clearMocks: true,
  browser: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
