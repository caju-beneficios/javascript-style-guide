module.exports = {
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'sort-destructure-keys'
  ],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'multiline-ternary': ['error', 'always-multiline'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
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
    'sort-destructure-keys/sort-destructure-keys': ['error']
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error']
      }
    },
  ],
}
