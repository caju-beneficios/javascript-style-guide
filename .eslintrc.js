module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'sort-destructure-keys',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': [
      'never',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': 'off',
    'multiline-ternary': ['error', 'always-multiline'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    semi: [2, 'never'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'function-paren-newline': [2, 'multiline'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'max-len': [
      2,
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-params': [
      2,
      {
        max: 3,
      },
    ],
    complexity: [
      1,
      {
        max: 4,
      },
    ],
    'max-depth': [
      2,
      {
        max: 3,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
}
