import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Bell01_1 } from "../../icons/Bell01_1";
import "./style.css";

export const NavItemButton = ({
  current,
  size,
  stateProp,
  className,
  icon = <Bell01_1 className="bell" color="#667085" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    current: current || false,

    size: size || "lg",

    state: stateProp || "default",
  });

  return (
    <div
      className={`nav-item-button ${state.size} state-0-${state.state} current-1-${state.current} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {icon}
    </div>
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

NavItemButton.propTypes = {
  current: PropTypes.bool,
  size: PropTypes.oneOf(["md", "lg"]),
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
