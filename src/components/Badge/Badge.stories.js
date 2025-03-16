import { Badge } from ".";

export default {
  title: "Components/Badge",
  component: Badge,

  argTypes: {
    size: {
      options: ["md", "lg", "sm"],
      control: { type: "select" },
    },
    type: {
      options: ["pill-outline", "badge-modern", "badge-color", "pill-color"],
      control: { type: "select" },
    },
    icon: {
      options: [
        "icon-leading",
        "only",
        "country",
        "avatar",
        "false",
        "dot",
        "icon-trailing",
        "x-close",
      ],
      control: { type: "select" },
    },
    color: {
      options: [
        "warning",
        "blue-light",
        "blue-gray",
        "gray-blue",
        "gray",
        "success",
        "blue",
        "orange",
        "brand",
        "pink",
        "error",
        "purple",
        "indigo",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "md",
    type: "pill-outline",
    icon: "icon-leading",
    color: "warning",
    className: {},
    text: "Label",
  },
};
