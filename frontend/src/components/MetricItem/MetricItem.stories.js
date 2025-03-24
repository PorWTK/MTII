import { MetricItem } from ".";

export default {
  title: "Components/MetricItem",
  component: MetricItem,

  argTypes: {
    type: {
      options: [
        "icon-01",
        "chart-01",
        "icon-03",
        "chart-03",
        "chart-02",
        "icon-02",
        "simple",
      ],
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
    dropdownIcon: true,
    actions: true,
    type: "icon-01",
    breakpoint: "desktop",
    className: {},
    headingClassName: {},
    text: "Views 24 hours",
    numberClassName: {},
    text1: "2,000",
    hasChangeAndText: true,
    hasBadgeWrap: true,
  },
};
