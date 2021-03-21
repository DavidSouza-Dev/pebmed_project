module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  root:false,
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
    "no-unused-vars": "off"
  }
};
