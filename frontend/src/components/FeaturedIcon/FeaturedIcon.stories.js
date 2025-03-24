import { FeaturedIcon } from ".";

export default {
  title: "Components/FeaturedIcon",
  component: FeaturedIcon,

  argTypes: {
    size: {
      options: ["md", "sm", "lg", "xl"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "gray", "success", "brand", "error"],
      control: { type: "select" },
    },
    type: {
      options: ["gradient", "glass", "modern", "light", "dark"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    gradientMask: true,
    size: "md",
    color: "warning",
    type: "gradient",
  },
};
