const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');
const dotenv = require('dotenv');

const parsedEnvVariables = dotenv.config().parsed;
const envKeys = Object.keys(parsedEnvVariables).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(parsedEnvVariables[next]);
  return prev;
}, {});

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
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin(envKeys),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
