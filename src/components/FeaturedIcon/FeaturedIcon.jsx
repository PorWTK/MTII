/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AlertCircle49 } from "../../icons/AlertCircle49";
import { AlertCircle68 } from "../../icons/AlertCircle68";
import { AlertCircle93 } from "../../icons/AlertCircle93";
import { AlertCircle94 } from "../../icons/AlertCircle94";
import { AlertCircle103 } from "../../icons/AlertCircle103";
import { AlertCircle114 } from "../../icons/AlertCircle114";
import "./style.css";

export const FeaturedIcon = ({
  gradientMask = true,
  size,
  color,
  type,
  icon = <AlertCircle68 className="alert-circle" color="#079455" />,
}) => {
  return (
    <div className={`featured-icon size-31-${size} ${type} color-1-${color}`}>
      {["dark", "light", "modern"].includes(type) && <>{icon}</>}

      {["glass", "gradient"].includes(type) && (
        <div className="overlap-group-8">
          {type === "glass" && (
            <>
              <div className="icon-background" />

              <div className="icon-glass">
                {size === "lg" && (
                  <AlertCircle68 className="alert-circle" color="white" />
                )}

                {size === "md" && (
                  <AlertCircle93 className="alert-circle-93" color="white" />
                )}

                {size === "sm" && (
                  <AlertCircle94 className="alert-circle-94" color="white" />
                )}

                {size === "xl" && (
                  <AlertCircle49 className="alert-circle-49" color="white" />
                )}
              </div>
            </>
          )}

          {type === "gradient" && ["lg", "xl"].includes(size) && (
            <AlertCircle103 className="alert-circle-103" />
          )}

          {type === "gradient" && ["md", "sm"].includes(size) && (
            <AlertCircle114 className="alert-circle-114" />
          )}
        </div>
      )}
    </div>
  );
};

FeaturedIcon.propTypes = {
  gradientMask: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]),
  color: PropTypes.oneOf(["warning", "gray", "success", "brand", "error"]),
  type: PropTypes.oneOf(["gradient", "glass", "modern", "light", "dark"]),
};
