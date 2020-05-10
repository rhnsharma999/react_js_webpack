module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  setupFiles: ["raf/polyfill"],
  testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
  setupFilesAfterEnv: ["<rootDir>src/setup/setupTests.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
}
