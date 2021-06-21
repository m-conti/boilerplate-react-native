const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const webConfig = require('./config/web-config');

const { mergeWebpack } = require('./config/utils');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  return mergeWebpack(config, webConfig);
};
