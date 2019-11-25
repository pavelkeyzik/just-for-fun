const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = function() {
  return {
    plugins: [new BundleAnalyzerPlugin()],
  };
};
