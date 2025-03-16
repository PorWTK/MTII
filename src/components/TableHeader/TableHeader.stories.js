import { TableHeader } from ".";

export default {
  title: "Components/TableHeader",
  component: TableHeader,

  argTypes: {
    arrow: {
      options: ["false", "up", "down"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    helpIcon: true,
    arrow: "false",
    stateProp: "hover",
    className: {},
    text: "Company",
    visible: true,
  },
};
