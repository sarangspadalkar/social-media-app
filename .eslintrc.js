const { join } = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: [join(__dirname, "tsconfig.eslint.json")],
        sourceType: "module",
      },
    },
  ],
};
