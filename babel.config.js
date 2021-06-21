module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            layout: './src/layout',
            lib: './src/lib',
            types: './src/types',
            constants: './src/constants',
            locales: './src/locales',
            startup: './src/startup',
          },
        },
      ],
    ],
  };
};
