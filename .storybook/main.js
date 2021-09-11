module.exports = {
  addons: [
    // addons on top
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    // addons on right side
    '@storybook/addon-actions',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
  stories: ['../docs/*.stories.mdx', '../**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    });

    return config;
  },
};
