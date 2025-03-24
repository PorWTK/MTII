/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowDown11 = ({ color = "black", className }) => {
  return (
    <svg
      className={`arrow-down-11 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.3333 4.1665V15.8332M10.3333 15.8332L16.1667 9.99984M10.3333 15.8332L4.5 9.99984"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowDown11.propTypes = {
  color: PropTypes.string,
};
