module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: './src',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', 'tsx'],
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': ['off'],
    'no-restricted-exports': ['off'],
    'import/prefer-default-export': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/button-has-type': ['off'],
    'react/require-default-props': ['off'],
    'react/default-props-match-prop-types': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    camelcase: ['off', { ignoreDestructuring: true }],
  },
};
