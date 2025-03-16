import { DatePickerDropdown } from ".";

export default {
  title: "Components/DatePickerDropdown",
  component: DatePickerDropdown,

  argTypes: {
    type: {
      options: ["dual-dates", "single-date"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["placeholder", "active"],
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
    opened: true,
    type: "dual-dates",
    stateProp: "placeholder",
    breakpoint: "desktop",
    className: {},
    buttonsButtonSizeMdHierarchyClassName: {},
    buttonsButtonTextClassName: {},
    buttonsButtonTextPaddingClassName: {},
    buttonsButtonText: "Jan 12, 2024 – Jan 18, 2024",
  },
};
