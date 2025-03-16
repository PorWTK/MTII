/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProgressBar = ({
  progress,
  label,
  className,
  progressClassName,
  percentageClassName,
}) => {
  return (
    <div className={`progress-bar label-${label} ${className}`}>
      <div className="div-5">
        {progress === "zero" &&
          ["bottom-floating", "top-floating"].includes(label) && (
            <>
              <div className="progress" />

              <div className="tooltip-5">
                <div className="content-23">
                  <div className="text-41">0%</div>
                </div>
              </div>
            </>
          )}

        {((label === "bottom" && progress === "zero") ||
          (label === "false" && progress === "zero") ||
          (label === "right" && progress === "zero") ||
          progress === "eighty" ||
          progress === "fifty" ||
          progress === "forty" ||
          progress === "ninety" ||
          progress === "one-hundred" ||
          progress === "seventy" ||
          progress === "sixty" ||
          progress === "ten" ||
          progress === "thirty" ||
          progress === "twenty") && (
          <div
            className={`progress-2 label-2-${label} ${progress} ${["bottom", "right"].includes(label) ? progressClassName : undefined}`}
          >
            {["bottom-floating", "top-floating"].includes(label) && (
              <div className="tooltip-6">
                <div className="content-23">
                  <div className="text-41">
                    {progress === "ten" && <>10%</>}

                    {progress === "twenty" && <>20%</>}

                    {progress === "thirty" && <>30%</>}

                    {progress === "forty" && <>40%</>}

                    {progress === "fifty" && <>50%</>}

                    {progress === "sixty" && <>60%</>}

                    {progress === "seventy" && <>70%</>}

                    {progress === "eighty" && <>80%</>}

                    {progress === "ninety" && <>90%</>}

                    {progress === "one-hundred" && <>100%</>}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {["bottom", "right"].includes(label) && (
        <div className={`percentage ${percentageClassName}`}>
          {progress === "zero" && <>0%</>}

          {progress === "ten" && <>10%</>}

          {progress === "twenty" && <>20%</>}

          {progress === "thirty" && <>30%</>}

          {progress === "forty" && <>40%</>}

          {progress === "fifty" && <>50%</>}

          {progress === "sixty" && <>60%</>}

          {progress === "seventy" && <>70%</>}

          {progress === "eighty" && <>80%</>}

          {progress === "ninety" && <>90%</>}

          {progress === "one-hundred" && <>100%</>}
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.oneOf([
    "sixty",
    "zero",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "ten",
    "fifty",
    "forty",
    "ninety",
    "seventy",
  ]),
  label: PropTypes.oneOf([
    "top-floating",
    "right",
    "false",
    "bottom",
    "bottom-floating",
  ]),
};
