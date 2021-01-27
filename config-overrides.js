const {
  override,
  addBabelPreset,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('customize-cra');

module.exports = override(
  addBabelPreset(['@emotion/babel-preset-css-prop', { modules: false }]),
);
