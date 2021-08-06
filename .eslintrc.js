module.exports = {
  extends: ['airbnb-base'],
  rules: {
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
  },
}