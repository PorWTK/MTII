import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { DropdownListItem } from "../../icons/DropdownListItem";
import { Placeholder381 } from "../../icons/Placeholder381";
import "./style.css";

export const ConcreteComponentNode = ({
  supportingText = true,
  shortcut = true,
  icon,
  checkbox,
  stateProp,
  divider,
  iconTrueCheckboxClassName,
  override = <Placeholder381 className="placeholder-381" color="#667085" />,
  text = "Placeholder",
  text1 = "⌘C",
  iconAndTextClassName,
  textClassName,
  contentClassName,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    icon: icon || true,

    checkbox: checkbox || false,

    state: stateProp || "disabled",

    divider: divider || false,
  });

  return (
    <>
      {!state.divider && (
        <div
          className={`concrete-component-node ${iconTrueCheckboxClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        >
          <Link
            className={`content-21 state-7-${state.state} checkbox-0-${state.checkbox} icon-${state.icon} ${contentClassName}`}
            to={to}
          >
            <div className={`icon-and-text ${iconAndTextClassName}`}>
              {(state.checkbox || state.icon) && (
                <>
                  {override}
                  <div className={`text-52 ${textClassName}`}>{text}</div>
                </>
              )}

              {!state.checkbox && !state.icon && <>{text}</>}
            </div>

            {shortcut && <div className="shortcut">{text1}</div>}
          </Link>
        </div>
      )}

      {state.divider && <DropdownListItem className="icon-false-checkbox" />}
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

ConcreteComponentNode.propTypes = {
  supportingText: PropTypes.bool,
  shortcut: PropTypes.bool,
  icon: PropTypes.bool,
  checkbox: PropTypes.bool,
  stateProp: PropTypes.oneOf(["default", "hover", "disabled"]),
  divider: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  to: PropTypes.string,
};
