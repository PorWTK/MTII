import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowDown4 } from "../../icons/ArrowDown4";
import { ArrowUp149 } from "../../icons/ArrowUp149";
import { HelpIcon } from "../HelpIcon";
import "./style.css";

export const TableHeader = ({
  helpIcon,
  arrow,
  stateProp,
  className,
  text = "Company",
  visible = true,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    helpIcon: helpIcon || false,

    arrow: arrow || "false",

    state: stateProp || "default",
  });

  return (
    <div
      className={`table-header ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`text-16 state-8-${state.state}`}>{text}</div>

      {((state.helpIcon && state.arrow === "false") ||
        (!state.helpIcon && state.arrow === "down") ||
        (!state.helpIcon && state.arrow === "up")) && (
        <>
          <>
            {visible && (
              <>
                <>
                  {state.arrow === "down" && (
                    <ArrowDown4
                      className="instance-node-8"
                      color={state.state === "hover" ? "#344054" : "#475467"}
                    />
                  )}

                  {state.arrow === "up" && (
                    <ArrowUp149
                      className="instance-node-8"
                      color={state.state === "hover" ? "#344054" : "#475467"}
                    />
                  )}

                  {state.helpIcon && (
                    <HelpIcon
                      className={`${state.state === "hover" ? "class-36" : "class-37"}`}
                      open={false}
                      supportingText={false}
                      tooltip="top-no-arrow"
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {state.helpIcon && ["down", "up"].includes(state.arrow) && (
        <HelpIcon
          className={`${state.arrow === "up" && state.state === "hover" ? "class-38" : (state.state === "default" && state.arrow === "down") ? "class-39" : state.arrow === "down" && state.state === "hover" ? "class-40" : "class-41"}`}
          open={false}
          supportingText={false}
          tooltip="top-no-arrow"
        />
      )}

      {state.helpIcon && state.arrow === "down" && (
        <ArrowDown4
          className="instance-node-8"
          color={state.state === "hover" ? "#344054" : "#475467"}
        />
      )}

      {state.arrow === "up" && state.helpIcon && (
        <ArrowUp149
          className="instance-node-8"
          color={state.state === "hover" ? "#344054" : "#475467"}
        />
      )}
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

TableHeader.propTypes = {
  helpIcon: PropTypes.bool,
  arrow: PropTypes.oneOf(["false", "up", "down"]),
  stateProp: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  visible: PropTypes.bool,
};
