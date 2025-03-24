import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,

  argTypes: {
    stateProp: {
      options: ["default", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    supportingText: true,
    shortcut: true,
    icon: true,
    checkbox: true,
    stateProp: "default",
    divider: true,
    iconTrueCheckboxClassName: {},
    text: "Placeholder",
    text1: "⌘C",
    iconAndTextClassName: {},
    textClassName: {},
    contentClassName: {},
  },
};
