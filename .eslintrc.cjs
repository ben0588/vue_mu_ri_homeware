module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],

  },
  plugins: ['vue'],
  rules: {
    // 忽略所有換行格式不同所造成的錯誤 Expected linebreaks to be 'LF' but found 'CRLF'  linebreak-style
    'linebreak-style': 0,
  },
};
