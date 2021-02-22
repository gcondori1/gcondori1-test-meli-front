module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx': 'off',
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off'
  },
};
