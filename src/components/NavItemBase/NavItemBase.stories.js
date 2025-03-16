import { NavItemBase } from ".";

export default {
  title: "Components/NavItemBase",
  component: NavItemBase,

  argTypes: {
    stateProp: {
      options: ["focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    dot: true,
    dropdown: true,
    icon: true,
    badge: true,
    current: true,
    stateProp: "focused",
    className: {},
    contentClassName: {},
    text: "Dashboard",
  },
};
