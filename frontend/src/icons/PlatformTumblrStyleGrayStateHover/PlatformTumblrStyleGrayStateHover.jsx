/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformTumblrStyleGrayStateHover = ({
  color = "#667085",
  className,
}) => {
  return (
    <svg
      className={`platform-tumblr-style-gray-state-hover ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_18071)">
        <path
          className="path"
          d="M14.6 24C11 24 8.3 22.15 8.3 17.7V10.6H5V6.75C8.6 5.8 10.1 2.7 10.3 0H14.05V6.1H18.4V10.6H14.05V16.8C14.05 18.65 15 19.3 16.5 19.3H18.6V24H14.6Z"
          fill={color}
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_18071">
          <rect
            className="rect"
            fill="white"
            height="24"
            transform="translate(5)"
            width="13.6"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

PlatformTumblrStyleGrayStateHover.propTypes = {
  color: PropTypes.string,
};
