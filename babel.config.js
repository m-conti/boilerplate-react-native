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
            constants: './src/constants',
            hoc: './src/hoc',
            hooks: './src/hooks',
            layout: './src/layout',
            lib: './src/lib',
            locales: './src/locales',
            startup: './src/startup',
            types: './src/types',
          },
        },
      ],
    ],
  };
};
