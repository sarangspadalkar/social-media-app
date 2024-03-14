const { join } = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  overrides: [
    {
      files: ['*.ts'],
      env: {
        browser: true,
        node: true
      },
      extends: [
        'airbnb-base',
        'plugin:import/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:sonarjs/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['tsconfig.eslint.json']
      },
      rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never'
          }
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/no-floating-promises': [
          'error',
          { ignoreIIFE: true }
        ],
        'prettier/prettier': 'error',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: ['class', 'function'], next: '*' },
          {
            blankLine: 'always',
            prev: '*',
            next: ['class', 'function', 'return', 'try']
          },
          {
            blankLine: 'always',
            prev: ['import', 'for', 'if', 'switch', 'while'],
            next: ['const', 'expression', 'let']
          },
          {
            blankLine: 'always',
            prev: ['const', 'expression', 'let'],
            next: ['for', 'if', 'switch', 'try', 'while']
          },
          {
            blankLine: 'always',
            prev: ['const', 'expression', 'import', 'let'],
            next: 'export'
          },
          { blankLine: 'always', prev: ['for', 'switch', 'while'], next: 'if' },
          { blankLine: 'always', prev: ['if', 'switch', 'while'], next: 'for' },
          { blankLine: 'always', prev: ['if', 'for', 'while'], next: 'switch' },
          { blankLine: 'always', prev: ['if', 'for', 'switch'], next: 'while' }
        ]
      }
    }
  ]
};
