const { join } = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import"],
  overrides: [
    {
      files: ["*.ts"],
      env: {
        browser: true,
        node: true,
      },
      extends: [
        "airbnb-base",
        "plugin:import/typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:sonarjs/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: ["tsconfig.eslint.json"],
      },
      rules: {
        "import/prefer-default-export": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/no-floating-promises": [
          "error",
          { ignoreIIFE: true },
        ],
      },
    },
  ],
};
