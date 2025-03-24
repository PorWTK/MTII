/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const DotsVertical4 = ({ className }) => {
  return (
    <svg
      className={`dots-vertical-4 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_dd_1_5307)">
        <path
          className="path"
          d="M4 8C4 5.79086 5.79086 4 8 4H20C22.2091 4 24 5.79086 24 8V20C24 22.2091 22.2091 24 20 24H8C5.79086 24 4 22.2091 4 20V8Z"
          fill="white"
        />

        <path
          className="path"
          d="M14.0001 14.8333C14.4603 14.8333 14.8334 14.4602 14.8334 14C14.8334 13.5397 14.4603 13.1666 14.0001 13.1666C13.5398 13.1666 13.1667 13.5397 13.1667 14C13.1667 14.4602 13.5398 14.8333 14.0001 14.8333Z"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />

        <path
          className="path"
          d="M14.0001 8.99998C14.4603 8.99998 14.8334 8.62688 14.8334 8.16665C14.8334 7.70641 14.4603 7.33331 14.0001 7.33331C13.5398 7.33331 13.1667 7.70641 13.1667 8.16665C13.1667 8.62688 13.5398 8.99998 14.0001 8.99998Z"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />

        <path
          className="path"
          d="M14.0001 20.6666C14.4603 20.6666 14.8334 20.2935 14.8334 19.8333C14.8334 19.3731 14.4603 19 14.0001 19C13.5398 19 13.1667 19.3731 13.1667 19.8333C13.1667 20.2935 13.5398 20.6666 14.0001 20.6666Z"
          stroke="#667085"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="28"
          id="filter0_dd_1_5307"
          width="28"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feMorphology
            className="fe-morphology"
            in="SourceAlpha"
            operator="dilate"
            radius="4"
            result="effect1_dropShadow_1_5307"
          />

          <feOffset className="fe-offset" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.619608 0 0 0 0 0.466667 0 0 0 0 0.929412 0 0 0 1 0"
          />

          <feBlend
            className="fe-blend"
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_1_5307"
          />

          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feMorphology
            className="fe-morphology"
            in="SourceAlpha"
            operator="dilate"
            radius="2"
            result="effect2_dropShadow_1_5307"
          />

          <feOffset className="fe-offset" />

          <feComposite
            className="fe-composite"
            in2="hardAlpha"
            operator="out"
          />

          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />

          <feBlend
            className="fe-blend"
            in2="effect1_dropShadow_1_5307"
            mode="normal"
            result="effect2_dropShadow_1_5307"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_5307"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
