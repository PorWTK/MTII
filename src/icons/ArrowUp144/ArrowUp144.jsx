/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowUp144 = ({ color = "black", className }) => {
  return (
    <svg
      className={`arrow-up-144 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.6668 15.8332V4.1665M10.6668 4.1665L4.8335 9.99984M10.6668 4.1665L16.5002 9.99984"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowUp144.propTypes = {
  color: PropTypes.string,
};
