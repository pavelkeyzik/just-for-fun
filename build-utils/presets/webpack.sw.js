const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/sw.js',
        exclude: [/.*_redirects.*/],
      }),
    ],
  };
};
