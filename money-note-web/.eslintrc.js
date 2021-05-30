module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
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
  },
  settings: {
    'import/resolver': {
      // typescript: {},
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
