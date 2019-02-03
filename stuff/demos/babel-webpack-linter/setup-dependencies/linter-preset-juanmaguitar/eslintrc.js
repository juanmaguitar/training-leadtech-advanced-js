// To take into account → https://stackoverflow.com/questions/51069070/removing-ts-errors-from-js-files-in-vs-code

const prettierOptions = require('./prettierrc.config.js')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

module.exports = {
  // eslint-config-standard, eslint-config-prettier
  extends: ['standard', 'prettier', 'prettier/standard'],
  parser: 'babel-eslint',
  // eslint-plugin-prettier
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [RULES.ERROR, prettierOptions]
  }
}
