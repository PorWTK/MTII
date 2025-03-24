import { Change } from ".";

export default {
  title: "Components/Change",
  component: Change,

  argTypes: {
    type: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    trend: {
      options: ["negative", "positive"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "two",
    trend: "negative",
    className: {},
    text: "100%",
  },
};
