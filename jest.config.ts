export default {
  clearMocks: true,
  testTimeout: 30000,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],

  preset: "ts-jest",
  testEnvironment: "node",
};
