/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformLayersStyleGrayStateHover = ({
  color = "#667085",
  opacity = "unset",
  fillOpacity = "unset",
  opacity1 = "unset",
  opacity2 = "unset",
  opacity3 = "unset",
  opacity4 = "unset",
  className,
}) => {
  return (
    <svg
      className={`platform-layers-style-gray-state-hover ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_18202)">
        <path
          className="path"
          d="M0.363845 13.6945L0.422027 4.96865C0.432209 3.38902 1.53694 2.03484 3.06203 1.73302L11.4889 0.0624719C13.5137 -0.338983 15.3929 1.24574 15.3798 3.34247L15.3217 12.0697C15.3108 13.6487 14.206 15.0021 12.6809 15.3047L4.25403 16.9752C2.2293 17.3767 0.350027 15.7919 0.363845 13.6945Z"
          fill={color}
          fillOpacity={fillOpacity}
          opacity={opacity}
        />

        <path
          className="path"
          d="M4.49226 17.176L4.55044 8.44873C4.5599 6.87055 5.66535 5.5171 7.19045 5.21455L15.6174 3.54473C17.6421 3.14328 19.5214 4.72728 19.5075 6.82473L19.4494 15.552C19.4392 17.1309 18.3344 18.4844 16.8094 18.7869L8.38245 20.4575C6.35772 20.8582 4.47845 19.2742 4.49226 17.1775V17.176Z"
          fill={color}
          fillOpacity={opacity2}
          opacity={opacity1}
        />

        <path
          className="path"
          d="M8.62091 20.6575L8.67909 11.9302C8.68928 10.3506 9.794 8.99784 11.3191 8.6953L19.746 7.02475C21.7707 6.6233 23.65 8.20802 23.6362 10.3048L23.578 19.032C23.5678 20.6117 22.4631 21.9651 20.938 22.2669L12.5111 23.9375C10.4864 24.3389 8.60709 22.7542 8.62019 20.6575H8.62091Z"
          fill={color}
          fillOpacity={opacity4}
          opacity={opacity3}
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_18202">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

PlatformLayersStyleGrayStateHover.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fillOpacity: PropTypes.string,
  opacity1: PropTypes.string,
  opacity2: PropTypes.string,
  opacity3: PropTypes.string,
  opacity4: PropTypes.string,
};
