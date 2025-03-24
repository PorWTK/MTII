import { SectionLabel } from ".";

export default {
  title: "Components/SectionLabel",
  component: SectionLabel,

  argTypes: {
    size: {
      options: ["md", "sm"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    helpIcon: true,
    supportingText: true,
    required: true,
    size: "md",
    actions: true,
    className: {},
    text: "Team members",
  },
};
