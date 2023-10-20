import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
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
  async viteFinal(config, options) {
    if (config && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": "../src",
      };
    }

    return config;
  },
};
export default config;
