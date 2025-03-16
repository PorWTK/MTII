import PropTypes from "prop-types";
import React from "react";
import { CheckboxBase } from "../CheckboxBase";
import "./style.css";

export const Checkbox = ({
  supportingText = true,
  checked,
  indeterminate,
  size,
  type,
  text,
  state,
  className,
}) => {
  return (
    <div className={`checkbox text-3-${text} size-28-${size} ${className}`}>
      {text && (
        <>
          <div className="checkbox-base-wrapper">
            <CheckboxBase
              checked={!checked ? false : true}
              className={`${type === "radio" ? "class-143" : (checked && size === "md" && type === "checkbox") ? "class-144" : !checked && size === "sm" && type === "checkbox" ? "class-145" : !checked && size === "md" && type === "checkbox" ? "class-146" : "class-147"}`}
              indeterminate={false}
              size={size === "md" ? "md" : "sm"}
              stateProp={
                state === "disabled"
                  ? "disabled"
                  : state === "hover"
                    ? "hover"
                    : state === "default"
                      ? "default"
                      : "focused"
              }
              type={type === "radio" ? "radio" : "checkbox"}
            />
          </div>

          <div className="text-and-supporting-10">
            <div className="text-40">Remember me</div>

            {supportingText && (
              <p className="supporting-text-9">
                Save my login details for next time.
              </p>
            )}
          </div>
        </>
      )}

      {!text && (
        <CheckboxBase
          checked={!checked ? false : true}
          className={`${type === "radio" ? "class-148" : (checked && size === "md" && type === "checkbox") ? "class-144" : !checked && size === "sm" && type === "checkbox" ? "class-145" : !checked && size === "md" && type === "checkbox" ? "class-146" : "class-147"}`}
          indeterminate={indeterminate ? true : undefined}
          size={size === "md" ? "md" : "sm"}
          stateProp={
            state === "disabled"
              ? "disabled"
              : state === "hover"
                ? "hover"
                : state === "default"
                  ? "default"
                  : "focused"
          }
          type={type === "radio" ? "radio" : "checkbox"}
        />
      )}
    </div>
  );
};

Checkbox.propTypes = {
  supportingText: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf(["radio", "checkbox"]),
  text: PropTypes.bool,
  state: PropTypes.oneOf(["default", "focused", "hover", "disabled"]),
};
