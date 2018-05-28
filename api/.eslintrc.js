module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['node'],
  // add your custom rules here
  rules: {
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'vue/attribute-hyphenation': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0
  },
};
