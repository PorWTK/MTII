import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { Placeholder336 } from "../../icons/Placeholder336";
import { Dot } from "../Dot";
import "./style.css";

export const ButtonsButton = ({
  iconTrailing = true,
  iconLeading = true,
  size,
  hierarchy,
  icon,
  stateProp,
  className,
  override = <Placeholder336 className="placeholder-336" color="#344054" />,
  text = "Button CTA",
  textPaddingClassName,
  textClassName,
  icon1 = <Placeholder336 className="placeholder-336" color="#475467" />,
  icon2 = <Placeholder336 className="placeholder-336" color="#344054" />,
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",

    hierarchy: hierarchy || "primary",

    icon: icon || "dot-leading",

    state: stateProp || "default",
  });

  return (
    <Link
      className={`buttons-button state-1-${state.state} ${state.hierarchy} icon-${state.icon} size-${state.size} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {state.icon === "dot-leading" && (
        <>
          <Dot
            className="instance-node"
            dotClassName={`${state.hierarchy === "primary" && ["default", "focused"].includes(state.state) && "class"} ${state.state === "disabled" && "class-2"} ${state.hierarchy === "primary" && state.state === "hover" && "class-3"}`}
            outline={false}
            size="md"
          />
          <div className="text-3">{text}</div>
        </>
      )}

      {state.icon === "default" && (
        <>
          <>{iconLeading && <>{override}</>}</>

          <div className={`text-padding ${textPaddingClassName}`}>
            {[
              "primary",
              "secondary-color",
              "secondary-gray",
              "tertiary-color",
              "tertiary-gray",
            ].includes(state.hierarchy) && (
              <div className={`text-4 ${textClassName}`}>{text}</div>
            )}

            {["link-color", "link-gray"].includes(state.hierarchy) && (
              <>{text}</>
            )}
          </div>

          <>{iconTrailing && <>{icon2}</>}</>
        </>
      )}

      {state.icon === "only" && <>{icon1}</>}
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

ButtonsButton.propTypes = {
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  hierarchy: PropTypes.oneOf([
    "tertiary-color",
    "link-color",
    "tertiary-gray",
    "secondary-color",
    "link-gray",
    "primary",
    "secondary-gray",
  ]),
  icon: PropTypes.oneOf(["dot-leading", "only", "default"]),
  stateProp: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
