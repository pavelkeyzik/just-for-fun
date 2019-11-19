const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const presetConfig = require('./build-utils/load-presets');
const dotenv = require('dotenv');
const WorkboxPlugin = require('workbox-webpack-plugin');

dotenv.config();

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
        new webpack.DefinePlugin({
          'process.env.MAPBOX_ACCESS_TOKEN': JSON.stringify(
            process.env.MAPBOX_ACCESS_TOKEN,
          ),
        }),
        new WorkboxPlugin.GenerateSW({
          // these options encourage the ServiceWorkers to get in there fast
          // and not allow any straggling "old" SWs to hang around
          clientsClaim: true,
          skipWaiting: true,
        }),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
