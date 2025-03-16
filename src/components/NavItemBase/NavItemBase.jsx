import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { BarChart01_6 } from "../../icons/BarChart01_6";
import { ChevronDown20 } from "../../icons/ChevronDown20";
import { Badge } from "../Badge";
import { Dot } from "../Dot";
import "./style.css";

export const NavItemBase = ({
  dot = true,
  dropdown = true,
  icon = true,
  badge = true,
  current,
  stateProp,
  className,
  contentClassName,
  text = "Dashboard",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    current: current || false,

    state: stateProp || "default",
  });

  return (
    <Link
      className={`nav-item-base ${state.state} current-${state.current} ${className}`}
      to={to}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`content ${contentClassName}`}>
        {dot && <Dot className="dot-instance" outline={false} size="md" />}

        {icon && <BarChart01_6 className="bar-chart" color="#667085" />}

        <div className="text-wrapper">{text}</div>
      </div>

      {badge && (
        <Badge
          className="badge-instance"
          color="gray"
          icon="false"
          size="sm"
          text="10"
          type="pill-color"
        />
      )}

      {dropdown && <ChevronDown20 className="chevron-down" color="#667085" />}
    </Link>
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

NavItemBase.propTypes = {
  dot: PropTypes.bool,
  dropdown: PropTypes.bool,
  icon: PropTypes.bool,
  badge: PropTypes.bool,
  current: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
