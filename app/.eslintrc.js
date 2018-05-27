module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'linebreak-style': 0,
    'import/extensions': 0,
    'vue/max-attributes-per-line': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'vue/attribute-hyphenation': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-underscore-dangle': 0
  },
};
