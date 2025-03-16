import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Plus119 } from "../../icons/Plus119";
import { Plus130 } from "../../icons/Plus130";
import "./style.css";

export const AvatarAddButton = ({ size, stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "xs",

    state: stateProp || "default",
  });

  return (
    <div
      className={`avatar-add-button size-35-${state.size} state-12-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["default", "disabled", "focus"].includes(state.state) && (
        <div className="plus-wrapper">
          {["sm", "xs"].includes(state.size) && (
            <Plus119
              className="plus"
              color={state.state === "disabled" ? "#D0D5DD" : "#98A2B3"}
            />
          )}

          {state.size === "md" && (
            <Plus130
              className="plus-130"
              color={state.state === "disabled" ? "#D0D5DD" : "#98A2B3"}
            />
          )}
        </div>
      )}

      {state.state === "hover" && (
        <>
          <div className="overlap-5">
            <div className="content-24">
              {["sm", "xs"].includes(state.size) && (
                <Plus119 className="plus" color="#667085" />
              )}

              {state.size === "md" && (
                <Plus130 className="plus-130" color="#667085" />
              )}
            </div>

            <div className="cursor-4">
              <div className="overlap-group-9">
                <img className="lines-4" alt="Lines" src="/img/lines.svg" />
              </div>
            </div>
          </div>

          <div className="tooltip-7">
            <div className="content-25">
              <div className="FIND-ME-3">Add user</div>
            </div>

            <img
              className="tooltip-8"
              alt="Tooltip"
              src="/img/tooltip-12.svg"
            />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.size === "xs" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "xs",

          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "sm",

          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          size: "md",

          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "xs",

          state: "hover",
        };
    }
  }

  if (state.size === "sm" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "sm",

          state: "hover",
        };
    }
  }

  if (state.size === "md" && state.state === "focus") {
    switch (action) {
      case "click":
        return {
          size: "md",

          state: "hover",
        };
    }
  }

  if (state.size === "xs" && state.state === "hover") {
    switch (action) {
      case "click":
        return {
          size: "xs",

          state: "focus",
        };

      case "mouse_leave":
        return {
          size: "xs",

          state: "default",
        };
    }
  }

  if (state.size === "sm" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "sm",

          state: "default",
        };

      case "click":
        return {
          size: "sm",

          state: "focus",
        };
    }
  }

  if (state.size === "md" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          size: "md",

          state: "default",
        };

      case "click":
        return {
          size: "md",

          state: "focus",
        };
    }
  }

  return state;
}

AvatarAddButton.propTypes = {
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  stateProp: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
};
