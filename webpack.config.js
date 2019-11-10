const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');

function modeConfig(env) {
  return require(`./build-utils/webpack.${env}`)(env);
}

module.exports = function(
  { mode, presets } = { mode: 'production', presets: [] },
) {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      plugins: [new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
