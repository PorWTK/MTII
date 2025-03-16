/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PlatformClubhouseStyleBrandStateDefault = ({
  color = "#6515DD",
  className,
}) => {
  return (
    <svg
      className={`platform-clubhouse-style-brand-state-default ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M1.74167 17.875C0.783333 17.875 0 18.6583 0 19.6167C0 20.575 0.783333 21.3583 1.74167 21.3583C2.7 21.3583 3.48333 20.575 3.48333 19.6167C3.48333 18.6583 2.70833 17.875 1.74167 17.875Z"
        fill={color}
      />

      <path
        className="path"
        d="M23.1833 2.66663L12.2166 6.16663V2.70829L0.391602 6.48329V16.5083L10.5916 13.25V16.6916L23.9999 12.4166L20.3666 8.86663L23.1833 2.66663ZM10.5916 11.5333L2.02494 14.2666V7.67496L10.5916 4.94163V11.5333ZM20.9666 11.675L12.2166 14.4666V7.88329L20.2749 5.30829L18.4249 9.20829L20.9666 11.675Z"
        fill={color}
      />
    </svg>
  );
};

PlatformClubhouseStyleBrandStateDefault.propTypes = {
  color: PropTypes.string,
};
