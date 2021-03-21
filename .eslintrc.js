module.exports = {
  env: {
    browser: true,
    es2021: true,
    jquery: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-param-reassign': ['off'],
    'no-shadow': ['off'],
    indent: ['error', 4],
    "no-multiple-empty-lines": [2, {"max": 3, "maxBOF": 0}],
    "function-paren-newline": ["error", { "minItems": 3 }]
  },
};
