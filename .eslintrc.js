module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  // extends: [
  //   'airbnb-base',
  //   'eslint:recommended',
  //   'plugin:prettier/recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'prettier',
  //   'prettier/@typescript-eslint',
  //   'prettier/babel',
  //   'prettier/react',
  //   'prettier/standard',
  // ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true,
      'useJSXTextNode': true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-prettier',
  ],
  rules: {
    // 'prettier/prettier': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'indent': ['error', 2],
    // 'curly': ['error', 'all'],
    // 'no-unexpected-multiline': 'error',
    // 'no-confusing-arrow': ['error', { 'allowParens': false }],
    // '@typescript-eslint/explicit-function-return-type': ['error', {
    //   allowExpressions: true,
    //   allowTypedFunctionExpressions: true,
    //   allowHigherOrderFunctions: true,
    // }],
    // 'linebreak-style': [
    //   'error',
    //   'unix',
    // ],
    // 'quotes': [
    //   'error',
    //   'single',
    // ],
    // 'semi': [
    //   'error',
    //   'never',
    // ],
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    // 'import/no-extraneous-dependencies': ['error', {
    //   devDependencies: true,
    // }],
    // 'import/extensions': 'off',
    // 'implicit-arrow-linebreak': ['error', 'beside'],
  },
  // settings: {
  //   resolve: {
  //     alias: {
  //       ['@ui']: './src/@ui',
  //       // pages: '/Users/.../project/src/app/pages',
  //       // components: '/Users/.../project/src/app/components',
  //       // reducers: '/Users/.../project/src/app/store/reducers',
  //       // utilities: '/Users/.../project/src/app/utilities',
  //     },
  //     extensions: ['.ts', '.js', '.jsx', '.json', '.css'],
  //   },
  //   //'import/resolver': 'webpack',
  //   //{
  //   // webpack: {
  //   //   config: 'webpack.dev.config.js'
  //   // }
  //   // alias: {
  //   //   map: [
  //   //     [, ''],
  //   //     ['@feature', './src/@feature'],
  //   //     ['@lib', './src/@lib'],
  //   //     ['@styles', './src/@styles'],
  //   //   ],
  //   //
  //   // },
  //   // },
  // },
}
