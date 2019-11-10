const webpackMerge = require('webpack-merge');

module.exports = function(env) {
  const { presets } = env;

  if (!presets || !presets.length) return {};

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName => {
    return require(`./presets/webpack.${presetName}`)(env);
  });

  return webpackMerge({}, ...mergedConfigs);
};
