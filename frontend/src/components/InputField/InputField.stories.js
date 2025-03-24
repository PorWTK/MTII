import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,

  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
    type: {
      options: [
        "icon-leading",
        "leading-text",
        "default",
        "leading-dropdown",
        "trailing-dropdown",
        "tags",
        "trailing-button",
        "payment-input",
      ],
      control: { type: "select" },
    },
    stateProp: {
      options: ["focused", "filled", "placeholder", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    required: true,
    helpIcon: true,
    hintText: true,
    label: true,
    size: "md",
    type: "icon-leading",
    destructive: true,
    stateProp: "focused",
    className: {},
    text: "olivia@untitledui.com",
  },
};
