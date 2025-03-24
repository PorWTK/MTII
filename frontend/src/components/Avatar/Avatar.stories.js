import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,

  argTypes: {
    size: {
      options: ["xl", "xs", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    statusIcon: {
      options: ["company", "false", "verified", "online-indicator"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    contrastBorder: true,
    size: "xl",
    placeholder: true,
    text: true,
    statusIcon: "company",
    className: {},
    overlapGroupClassName: {},
    textClassName: {},
    text1: "OR",
  },
};
