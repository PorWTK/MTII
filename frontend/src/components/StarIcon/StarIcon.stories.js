import { StarIcon } from ".";

export default {
  title: "Components/StarIcon",
  component: StarIcon,

  argTypes: {
    fill: {
      options: [
        "sixty",
        "zero",
        "thirty",
        "eighty",
        "twenty",
        "one-hundred",
        "ten",
        "fifty",
        "forty",
        "ninety",
        "seventy",
      ],
      control: { type: "select" },
    },
    color: {
      options: ["yellow", "gray"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    fill: "sixty",
    color: "yellow",
    className: {},
    starClassName: {},
  },
};
