import { Pagination } from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,

  argTypes: {
    type: {
      options: [
        "card-button-group-center-aligned",
        "card-default",
        "page-minimal-center-aligned",
        "card-button-group-right-aligned",
        "card-minimal-right-aligned",
        "page-default",
        "card-minimal-left-aligned",
        "card-button-group-left-aligned",
        "card-minimal-center-aligned",
      ],
      control: { type: "select" },
    },
    shape: {
      options: ["circle", "square"],
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
    type: "card-button-group-center-aligned",
    shape: "circle",
    breakpoint: "desktop",
    className: {},
    hasButtonWrap: true,
    hasPaginationNumbers: true,
    buttonsButtonText: "Next",
  },
};
