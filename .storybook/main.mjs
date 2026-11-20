const config = {
  stories: [
    '../storybook/stories/**/*.stories.js',
    '../storybook/stories/**/*.mdx',
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;
