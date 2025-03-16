import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ChevronDown20 } from "../../icons/ChevronDown20";
import { ChevronUp } from "../../icons/ChevronUp";
import { Container } from "../../icons/Container";
import { DotsVertical2 } from "../../icons/DotsVertical2";
import { DotsVertical4 } from "../../icons/DotsVertical4";
import { DropdownListItem } from "../../icons/DropdownListItem";
import { HelpCircle61 } from "../../icons/HelpCircle61";
import { HomeLine } from "../../icons/HomeLine";
import { LayersTwo01 } from "../../icons/LayersTwo01";
import { LogOut01 } from "../../icons/LogOut01";
import { MessageSmileCircle } from "../../icons/MessageSmileCircle";
import { Settings01_2 } from "../../icons/Settings01_2";
import { User01_15 } from "../../icons/User01_15";
import { UserPlus01 } from "../../icons/UserPlus01";
import { Users01 } from "../../icons/Users01";
import { Zap1 } from "../../icons/Zap1";
import { Avatar } from "../Avatar";
import { ButtonsButton } from "../ButtonsButton";
import { ConcreteComponentNode } from "../ConcreteComponentNode";
import "./style.css";

export const Dropdown = ({
  type,
  open ,
  className,
  icon = <DotsVertical4 className="dots-vertical" />,
  menuClassName,
  visible = true,
  menuItemsClassName,
  concreteComponentNodeText = "View profile",
  concreteComponentNodeIcon = <User01_15 className="instance-node-14" />,
  concreteComponentNodeIconAndTextClassName,
  concreteComponentNodeShortcut,
  concreteComponentNodeTextClassName,
  concreteComponentNodeText1 = "Settings",
  override = <Settings01_2 className="instance-node-14" />,
  concreteComponentNodeIconAndTextClassNameOverride,
  concreteComponentNodeShortcut1,
  concreteComponentNodeTextClassNameOverride,
  concreteComponentNodeContentClassName,
  concreteComponentNodeText2 = "Keyboard shortcuts",
  concreteComponentNodeIcon1 = <Zap1 className="instance-node-14" />,
  concreteComponentNodeIconTrueCheckboxClassName,
  concreteComponentNodeCheckboxAndTextClassName,
  concreteComponentNodeShortcut2,
  concreteComponentNodeDivClassName,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
  visible5 = true,
  visible6 = true,
  visible7 = true,
  visible8 = true,
  visible9 = true,
  visible10 = true,
  visible11 = true,
  to,
  to1,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "icon",

    open: open ?? false,
  });

  return (
    <div
      className={`dropdown type-${state.type} open-${state.open} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.open && state.type === "icon" && (
        <>
          {icon}
          <div className={`menu-2 ${menuClassName}`}>
            {/* {visible && (
              <DropdownListHeader
                className="instance-node-13"
                type="avatar-group"
              />
            )} */}

            <div className={`menu-items-2 ${menuItemsClassName}`}>
              <ConcreteComponentNode
                checkbox={false}
                divider={false}
                icon
                iconAndTextClassName={concreteComponentNodeIconAndTextClassName}
                iconTrueCheckboxClassName="dropdown-list-item"
                override={concreteComponentNodeIcon}
                shortcut={concreteComponentNodeShortcut}
                stateProp="default"
                text={concreteComponentNodeText}
                text1="⌘K-&gt;P"
                textClassName={concreteComponentNodeTextClassName}
                to={to}
              />
              <ConcreteComponentNode
                checkbox={false}
                divider={false}
                icon
                iconAndTextClassName={
                  concreteComponentNodeIconAndTextClassNameOverride
                }
                iconTrueCheckboxClassName="dropdown-list-item"
                override={override}
                shortcut={concreteComponentNodeShortcut1}
                stateProp="default"
                text={concreteComponentNodeText1}
                text1="⌘S"
                textClassName={concreteComponentNodeTextClassNameOverride}
                to={to1}
              />
              <ConcreteComponentNode
                checkbox={false}
                contentClassName={concreteComponentNodeContentClassName}
                divider={false}
                icon
                iconAndTextClassName={
                  concreteComponentNodeCheckboxAndTextClassName
                }
                iconTrueCheckboxClassName={
                  concreteComponentNodeIconTrueCheckboxClassName
                }
                override={concreteComponentNodeIcon1}
                shortcut={concreteComponentNodeShortcut2}
                stateProp="default"
                text={concreteComponentNodeText2}
                text1="?"
                textClassName={concreteComponentNodeDivClassName}
              />

              {visible1 && (
                <DropdownListItem className="dropdown-list-item-instance" />
              )}

              {visible2 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<HomeLine className="instance-node-14" />}
                  stateProp="default"
                  text="Company profile"
                  text1="⌘K-&gt;C"
                />
              )}

              {visible3 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<Users01 className="instance-node-14" />}
                  stateProp="default"
                  text="Team"
                  text1="⌘K-&gt;T"
                />
              )}

              {visible4 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<UserPlus01 className="instance-node-14" />}
                  stateProp="default"
                  text="Invite colleagues"
                  text1="⌘I"
                />
              )}

              {visible5 && (
                <DropdownListItem className="dropdown-list-item-instance" />
              )}

              {visible6 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<LayersTwo01 className="instance-node-14" />}
                  stateProp="default"
                  text="Changelog"
                  text1="⌘K-&gt;C"
                />
              )}

              {visible7 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<MessageSmileCircle className="instance-node-14" />}
                  stateProp="default"
                  text="Slack Community"
                  text1="⌘K-&gt;S"
                />
              )}

              {visible8 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<HelpCircle61 className="instance-node-14" />}
                  stateProp="default"
                  text="Support"
                  text1="⌘/"
                />
              )}

              {visible9 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<Container className="instance-node-14" />}
                  stateProp="default"
                  text="API"
                  text1="⌘A"
                />
              )}

              {visible10 && (
                <DropdownListItem className="dropdown-list-item-instance" />
              )}

              {visible11 && (
                <ConcreteComponentNode
                  checkbox={false}
                  divider={false}
                  icon
                  iconTrueCheckboxClassName="dropdown-list-item"
                  override={<LogOut01 className="instance-node-14" />}
                  stateProp="default"
                  text="Log out"
                  text1="⌥⇧Q"
                />
              )}
            </div>
          </div>
        </>
      )}

      {!state.open && state.type === "icon" && (
        <DotsVertical2 className="instance-node-15" onClick={() => dispatch("click")} />
      )}

      {state.open && state.type === "avatar" && <div className="focus-ring" />}

      {state.type === "avatar" && (
        <Avatar
          className="avatar-7"
          placeholder={false}
          size="md"
          statusIcon="false"
          text={false}
        />
      )}

      {state.open && ["avatar", "button"].includes(state.type) && (
        <div className="menu-3">
          {/* <DropdownListHeader
            className="instance-node-13"
            type="avatar-group"
          /> */}
          <div className="menu-items-2">
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<User01_15 className="instance-node-14" />}
              stateProp="default"
              text="View profile"
              text1="⌘K-&gt;P"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<Settings01_2 className="instance-node-14" />}
              stateProp="default"
              text="Settings"
              text1="⌘S"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<Zap1 className="instance-node-14" />}
              stateProp="default"
              text="Keyboard shortcuts"
              text1="?"
            />
            <DropdownListItem className="dropdown-list-item-instance" />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<HomeLine className="instance-node-14" />}
              stateProp="default"
              text="Company profile"
              text1="⌘K-&gt;C"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<Users01 className="instance-node-14" />}
              stateProp="default"
              text="Team"
              text1="⌘K-&gt;T"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<UserPlus01 className="instance-node-14" />}
              stateProp="default"
              text="Invite colleagues"
              text1="⌘I"
            />
            <DropdownListItem className="dropdown-list-item-instance" />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<LayersTwo01 className="instance-node-14" />}
              stateProp="default"
              text="Changelog"
              text1="⌘K-&gt;C"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<MessageSmileCircle className="instance-node-14" />}
              stateProp="default"
              text="Slack Community"
              text1="⌘K-&gt;S"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<HelpCircle61 className="instance-node-14" />}
              stateProp="default"
              text="Support"
              text1="⌘/"
            />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<Container className="instance-node-14" />}
              stateProp="default"
              text="API"
              text1="⌘A"
            />
            <DropdownListItem className="dropdown-list-item-instance" />
            <ConcreteComponentNode
              checkbox={false}
              divider={false}
              icon
              iconTrueCheckboxClassName="dropdown-list-item"
              override={<LogOut01 className="instance-node-14" />}
              stateProp="default"
              text="Log out"
              text1="⌥⇧Q"
            />
          </div>
        </div>
      )}

      {state.type === "button" && (
        <ButtonsButton
          className="instance-node-13"
          hierarchy="secondary-gray"
          icon="default"
          icon2={
            !state.open ? (
              <ChevronDown20 className="instance-node-15" color="#344054" />
            ) : state.open ? (
              <ChevronUp className="instance-node-15" />
            ) : undefined
          }
          iconLeading={false}
          size="md"
          stateProp={
            !state.open ? "default" : state.open ? "focused" : undefined
          }
          text="Account"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.open === true && state.type === "icon") {
    switch (action) {
      case "click":
        return {
          open: false,

          type: "icon",
        };
    }
  }

  if (state.open === false && state.type === "icon") {
    switch (action) {
      case "click":
        return {
          open: true,

          type: "icon",
        };
    }
  }

  if (state.open === true && state.type === "button") {
    switch (action) {
      case "click":
        return {
          open: false,

          type: "button",
        };
    }
  }

  if (state.open === true && state.type === "avatar") {
    switch (action) {
      case "click":
        return {
          open: false,

          type: "avatar",
        };
    }
  }

  if (state.open === false && state.type === "button") {
    switch (action) {
      case "click":
        return {
          open: true,

          type: "button",
        };
    }
  }

  if (state.open === false && state.type === "avatar") {
    switch (action) {
      case "click":
        return {
          open: true,

          type: "avatar",
        };
    }
  }

  return state;
}

Dropdown.propTypes = {
  type: PropTypes.oneOf(["avatar", "icon", "button"]),
  open: PropTypes.bool,
  visible: PropTypes.bool,
  concreteComponentNodeText: PropTypes.string,
  concreteComponentNodeShortcut: PropTypes.bool,
  concreteComponentNodeText1: PropTypes.string,
  concreteComponentNodeShortcut1: PropTypes.bool,
  concreteComponentNodeText2: PropTypes.string,
  concreteComponentNodeShortcut2: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
  visible5: PropTypes.bool,
  visible6: PropTypes.bool,
  visible7: PropTypes.bool,
  visible8: PropTypes.bool,
  visible9: PropTypes.bool,
  visible10: PropTypes.bool,
  visible11: PropTypes.bool,
  to: PropTypes.string,
  to1: PropTypes.string,
};
