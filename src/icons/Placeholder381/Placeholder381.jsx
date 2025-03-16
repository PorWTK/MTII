/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Placeholder381 = ({ color = "#98A2B3", className }) => {
  return (
    <svg
      className={`placeholder-381 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_3925)">
        <path
          className="path"
          d="M8 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8 1.33331C4.3181 1.33331 1.33334 4.31808 1.33334 7.99998C1.33334 11.6819 4.3181 14.6666 8 14.6666Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_3925">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

Placeholder381.propTypes = {
  color: PropTypes.string,
};
