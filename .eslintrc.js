module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/label-has-associated-control': [2, {
      labelComponents: ['label'],
      labelAttributes: ['label'],
      controlComponents: ['Input'],
      depth: 3,
    }],
    // 'react/button-has-type': 'off',
  },
};
