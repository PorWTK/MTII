/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowUp149 = ({ color = "#475467", className }) => {
  return (
    <svg
      className={`arrow-up-149 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.00004 12.6666V3.33331M8.00004 3.33331L3.33337 7.99998M8.00004 3.33331L12.6667 7.99998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
};

ArrowUp149.propTypes = {
  color: PropTypes.string,
};
