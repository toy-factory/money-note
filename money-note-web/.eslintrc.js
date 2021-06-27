module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    JSX: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'modules-newline',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'modules-newline/import-declaration-newline': 'warn',
    'modules-newline/export-declaration-newline': 'warn',
    'import/order': ['error', {
      'newlines-between': 'always-and-inside-groups',
      groups: [['builtin', 'external'], 'internal'],
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['#', './src']],
      },
    },
  },
};
