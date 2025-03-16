/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Starfilled38 = ({
  color = "black",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`starfilled-38 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 11.8467L12.12 14.3333L11.0267 9.64667L14.6667 6.49333L9.87333 6.08667L8 1.66667L6.12667 6.08667L1.33333 6.49333L4.97333 9.64667L3.88 14.3333L8 11.8467Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Starfilled38.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
