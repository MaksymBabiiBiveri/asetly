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
          '@UiKitComponents': './src/UiKitComponents',
          '@common': './src/components/Common',
          '@helpers': './src/helpers',
          '@Actions': './src/store/actions',
          '@RootStateType': './src/store',
          '@Types': './src/store/types',
          '@hooks': './src/hooks',
          '@schema': './src/schemas',
        },
      },
    },
  ],
};
