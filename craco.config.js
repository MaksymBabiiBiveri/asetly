const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@icons': './src/assets/icons',
          '@image': './src/assets/images',
          '@components': './src/components',
          '@common': './src/components/Common',
          '@helpers': './src/helpers',
        },
      },
    },
  ],
};
