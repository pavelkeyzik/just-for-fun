const webpackMerge = require('webpack-merge');

module.exports = function(env) {
  const { presets } = env;
  const presetsArray = presets ? presets.split(',') : [];

  if (!presetsArray || !presetsArray.length) return {};

  console.log('===> Used presets:', presetsArray, '\n');

  const mergedPresets = [].concat(...[presetsArray]);
  const mergedConfigs = mergedPresets.map(presetName => {
    return require(`./presets/webpack.${presetName}`)(env);
  });

  return webpackMerge({}, ...mergedConfigs);
};
