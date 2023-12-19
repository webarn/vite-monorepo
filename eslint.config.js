import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      }],
      'style/semi': ['error', 'never'],
    },
    files: ['*.js', '*.ts', '*.vue'],
  },
)
