const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@components': './src/components',
          '@component': './src/components',
          '@assets': './src/assets',
          '@pages': './src/pages',
          '@icons': './src/assets/icons',
          '@image': './src/assets/images',
          '@common': './src/components/Common',
        },
      },
    },
  ],
};
