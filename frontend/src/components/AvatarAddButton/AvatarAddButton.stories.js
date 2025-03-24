import { AvatarAddButton } from ".";

export default {
  title: "Components/AvatarAddButton",
  component: AvatarAddButton,

  argTypes: {
    size: {
      options: ["md", "xs", "sm"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    stateProp: "disabled",
    className: {},
  },
};
