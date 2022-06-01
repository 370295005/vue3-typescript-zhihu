module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // jenkins部署项目工作区存在缓存，没法更新依赖，所以关闭此规则，本不应该关闭
    'no-unused-vars': 'off',
    'no-async-promise-executor': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.tsx', '.ts', '.jsx', '.js', 'vue']
      }
    }
  }
}
