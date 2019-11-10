module.exports = function() {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.mjs', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: ['ts-loader'],
        },
      ],
    },
  };
};
