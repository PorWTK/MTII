import { InputDropdown } from ".";

export default {
  title: "Components/InputDropdown",
  component: InputDropdown,

  argTypes: {
    type: {
      options: [
        "icon-leading",
        "avatar-leading",
        "default",
        "tags",
        "dot-leading",
        "search",
      ],
      control: { type: "select" },
    },
    stateProp: {
      options: ["open", "default", "focused", "placeholder", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    helpIcon: true,
    required: true,
    hintText: true,
    scrollBar: true,
    supportingText: true,
    label: true,
    type: "icon-leading",
    stateProp: "open",
    className: {},
    text: "Team member",
    text1: "Olivia Rhye",
    inputWithLabelClassName: {},
    text2: "Select team member",
  },
};
