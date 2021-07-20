module.exports = {
  extends: [
    'react-app',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off', // replaced by ts-eslint rule below
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off', // replaced by ts-eslint rule below
    "@typescript-eslint/no-unused-vars": ["error"],
    'no-use-before-define': 'off', // replaced by ts-eslint rule below
    "@typescript-eslint/no-use-before-define": ["error"],
    'max-len': ['error', {
      code: 150,
    }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      'd.ts': 'never',
    }],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      pathGroups: [
        { // imports from @onoff go after external in a separate group
          pattern: '@onoff/**',
          group: 'external',
          position: 'after'
        },
        { // types go before internal
          pattern: "types{,/**}",
          group: "internal",
          position: "before"
        },
        { // helpers go before internal after types
          pattern: "helpers{,/**}",
          group: "internal",
          position: "before"
        },
        { // styles go as a separate group at the end
          pattern: "./**/*.{scss,sass,css}",
          group: "index",
          position: "after"
        }
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
      alphabetize: {
        order: "asc"
      }
    }]
  },
  overrides: [
    {
      files: [
        'src/**/*.{ts,tsx}',
      ],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['src/**/*.{js,jsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/prop-types': 'warn',
        'react/forbid-prop-types': 'warn',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        paths: ['src'],
      },
    },
  },
};
