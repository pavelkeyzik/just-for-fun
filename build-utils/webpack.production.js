const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
  return {
    devtool: 'source-map',
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
          exclude: /\.module\.css$/,
        },
      ],
    },
  };
};
