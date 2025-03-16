/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft1 = ({ color = "#475467", className }) => {
  return (
    <svg
      className={`arrow-left-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.8333 10H4.16666M4.16666 10L10 15.8334M4.16666 10L10 4.16669"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.66667"
      />
    </svg>
  );
};

ArrowLeft1.propTypes = {
  color: PropTypes.string,
};
