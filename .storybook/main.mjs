const config = {
  stories: [
    '../storybook/stories/**/*.stories.js',
    '../storybook/stories/**/*.mdx',
  ],
  addons: [
    "@storybook/addon-docs",
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: ['../style-guide/public'],
};

export default config;
