module.exports = {
  root: true,
  'parser': 'babel-eslint',
  extends: ["airbnb"],
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
  },
  'globals': {
    "fetch": false
  }
};
