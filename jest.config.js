module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  preset: "ts-jest",
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  testEnvironment: "jsdom",
  globals: {
    jsx: "react",
    "ts-jest": {
      "tsConfig": "tsconfig.jest.json"
    }
  },
  testPathIgnorePatterns: [
    "<rootDir>/tests/setup.ts"
  ],
  setupFiles: [
    "<rootDir>/tests/setup.ts"
  ],
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    "~graphql/(.*)": "<rootDir>/graphql/$1",
    "~graphqlQ/(.*)": "<rootDir>/graphql/queries/$1",
    "~graphqlM/(.*)": "<rootDir>/graphql/mutations/$1",
    "~views/(.*)": "<rootDir>/views/$1",
    "~viewsUi/(.*)": "<rootDir>/views/ui/$1",
    "~viewsComp/(.*)": "<rootDir>/views/components/$1",
    "~viewsLay/(.*)": "<rootDir>/views/layouts/$1",
    "~styles/(.*)": "<rootDir>/styles/$1",
    "~lib/(.*)": "<rootDir>/lib/$1",
    "~assets/(.*)": "<rootDir>/assets/$1",
    "~static/(.*)": "<rootDir>/public/static/$1"
  }
};

