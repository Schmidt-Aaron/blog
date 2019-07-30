module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: `babel-eslint`,
  extends: [
    `react-app`,
    `google`,
    `eslint:recommended`,
    `plugin:flowtype/recommended`,
    `plugin:react/recommended`,
    `prettier`,
    `prettier/flowtype`,
    `prettier/react`,
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [`emotion`, `react`],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: `module`,
    ecmaFeatures: {
      jsx: true,
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  },
  rules: {
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"], // vs object
    // from gatsby core
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true,
      },
    ],
    "consistent-return": ["error"],
    "filenames/match-regex": ["error", "^[a-z-\\d\\.]+$", true],
    "no-console": "off",
    "no-inner-declarations": "off",
    "prettier/prettier": "error",
    quotes: ["error", "backtick"],
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
  },
}
