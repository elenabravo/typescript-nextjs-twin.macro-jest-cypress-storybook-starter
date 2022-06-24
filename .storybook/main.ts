import type { StorybookConfig } from '@storybook/react/types'

const path = require('path')
const fs = require('fs')

// Fix for package resolution
function getPackageDir(filepath: string) {
  let currDir = path.dirname(require.resolve(filepath))
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir
    }
    const { dir, root } = path.parse(currDir)
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      )
    }
    currDir = dir
  }
}

const mainConfig: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y'
  ],
  webpackFinal: async (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        '@emotion/core': getPackageDir('@emotion/react'),
        '@emotion/styled': getPackageDir('@emotion/styled')
      }
    }
    return config
  },
  core: {
    builder: 'webpack4',
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true
  },
  staticDirs: ['../public'],
  features: {
    buildStoriesJson: true
  }
}

module.exports = mainConfig
