const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = {
  stories: ['../src/tests/stories/**/*.stories.mdx', '../src/tests/stories/**/*.stories.@(js|jsx|ts|tsx)',
   '../src/components/**/*.stories.@(js|jsx|ts|tsx)', "../src/components/auth/**/*.stories.@(js|jsx|ts|tsx)",
  "../src/pages/**/*.stories.tsx"],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));

    return mergeConfig(config, {
      ...userConfig,
      plugins: []
    })
  },
};