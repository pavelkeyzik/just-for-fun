const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');
const dotenv = require('dotenv');

dotenv.config();

function modeConfig(env) {
  return require(`./build-utils/webpack.${env}`)(env);
}

function getEnvironmentVariables() {
  const defineObject = {};
  const environmentVariables = process.env;

  Object.keys(environmentVariables).forEach(
    key =>
      (defineObject[`process.env.${key}`] = JSON.stringify(
        environmentVariables[key],
      )),
  );

  return defineObject;
}

module.exports = function(
  { mode, presets } = { mode: 'production', presets: [] },
) {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name]-[contenthash].bundle.js',
        chunkFilename: '[name]-[contenthash].bundle.js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['babel-loader', 'react-svg-loader'],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin(getEnvironmentVariables()),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
