import { SectionHeader } from ".";

export default {
  title: "Components/SectionHeader",
  component: SectionHeader,

  argTypes: {
    type: {
      options: ["search", "button-group", "buttons"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    actions: true,
    divider: true,
    supportingText: true,
    dropdownIcon: true,
    tabs: true,
    type: "search",
    breakpoint: "desktop",
    className: {},
    text: "Team members",
    img: "/img/divider.svg",
  },
};
