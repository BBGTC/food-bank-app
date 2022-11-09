module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: [
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname
  },
  plugins: [
      'react',
      'react-native'
  ],
  rules: {
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
