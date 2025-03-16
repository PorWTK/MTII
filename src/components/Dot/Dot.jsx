/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dot = ({ size, outline, className, dotClassName }) => {
  return (
    <div className={`dot size-17-${size} ${className}`}>
      <div
        className={`div-4 outline-${outline} size-18-${size} ${dotClassName}`}
      />
    </div>
  );
};

Dot.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  outline: PropTypes.bool,
};
