module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    // 函数最大深度
    'max-depth': ['error', 4],
    // 函数最大行数
    'max-lines-per-function': ['error', 100],
    // 文件最大行数
    'max-lines': ['error', 500],
    // 是否允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/comment-directive': 'off',
  },
}
