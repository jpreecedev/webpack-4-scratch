module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    jest: true
  }
}
