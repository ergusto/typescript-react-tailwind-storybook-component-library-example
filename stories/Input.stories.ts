// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import { InputDemo } from "./Input.demo";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InputDemo> = {
  component: InputDemo,
  title: "Components/Text Input Field",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputDemo>;

export const InputStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
    starterText: "hello world",
  },
};

export const WarningInputStory: Story = {
  args: {},
};
