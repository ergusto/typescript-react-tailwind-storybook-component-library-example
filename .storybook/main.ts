import type { StorybookConfig } from "@storybook/react-vite";

import { mergeConfig } from "vite";
// type Webpack = (config: any, { configType }) => Promise<any>;
// interface StorybookConfig extends Config {
//   viteFinal: Webpack;
// }
const config: StorybookConfig = {
  stories: [
    // {
    //   directory: "../stories",
    //   files: "*.stories.*",
    // },
    "../stories/**/*.mdx",
    "../src/**/*.jsx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@",
            replacement: "./src",
          },
        ],
      },
    };
  },
};
export default config;
