const webpackMerge = require('webpack-merge');

/**
 * Function that return list of string with presets name.
 * Also, makes list of presets as flatten array.
 *
 * (Ex, From [['typescrip,sw'], ['analyzer]]) to ['typescript', 'sw', 'analyzer']
 *
 * @param {string[]} presets List of strings with presets
 */
function getFlattenPresetsArray(presets) {
  if (!presets) {
    return [];
  }

  if (typeof presets === 'string') {
    return presets.split(',');
  }

  if (Array.isArray(presets)) {
    const mappedPresets = presets.map(preset => preset.split(','));
    return [].concat(...mappedPresets);
  }
}

module.exports = function(env) {
  const { presets } = env;
  const presetsArray = getFlattenPresetsArray(presets);

  if (!presetsArray || !presetsArray.length) return {};

  console.log('===> Used presets:', presetsArray, '\n');

  const mergedConfigs = presetsArray.map(presetName => {
    return require(`./presets/webpack.${presetName}`)(env);
  });

  return webpackMerge({}, ...mergedConfigs);
};
