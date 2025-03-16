import { Dropdown } from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,

  argTypes: {
    type: {
      options: ["avatar", "icon", "button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "avatar",
    open: true,
    className: {},
    menuClassName: {},
    visible: true,
    menuItemsClassName: {},
    concreteComponentNodeText: "View profile",
    concreteComponentNodeIconAndTextClassName: {},
    concreteComponentNodeShortcut: true,
    concreteComponentNodeTextClassName: {},
    concreteComponentNodeText1: "Settings",
    concreteComponentNodeIconAndTextClassNameOverride: {},
    concreteComponentNodeShortcut1: true,
    concreteComponentNodeTextClassNameOverride: {},
    concreteComponentNodeContentClassName: {},
    concreteComponentNodeText2: "Keyboard shortcuts",
    concreteComponentNodeIconTrueCheckboxClassName: {},
    concreteComponentNodeCheckboxAndTextClassName: {},
    concreteComponentNodeShortcut2: true,
    concreteComponentNodeDivClassName: {},
    visible1: true,
    visible2: true,
    visible3: true,
    visible4: true,
    visible5: true,
    visible6: true,
    visible7: true,
    visible8: true,
    visible9: true,
    visible10: true,
    visible11: true,
  },
};
