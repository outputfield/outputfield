module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-viewport",
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        sassLoaderOptions: {
          implementation: require("sass"),
        },
      },
    },
  ],
};
