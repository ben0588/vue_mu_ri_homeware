module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'airbnb-base', 'prettier'],
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
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true }, ExportDeclaration: { multiline: true, minProperties: 3 } }],
  },
};
