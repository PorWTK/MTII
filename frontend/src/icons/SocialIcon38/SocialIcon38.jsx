/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SocialIcon38 = ({ color = "white", className }) => {
  return (
    <svg
      className={`social-icon-38 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.9457 23L10.3963 15.0901L3.44911 23H0.51001L9.09233 13.2311L0.51001 1H8.05596L13.2862 8.45502L19.8395 1H22.7786L14.5946 10.3165L23.4917 23H15.9457ZM19.2187 20.77H17.24L4.71836 3.23H6.69735L11.7124 10.2532L12.5796 11.4719L19.2187 20.77Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

SocialIcon38.propTypes = {
  color: PropTypes.string,
};
