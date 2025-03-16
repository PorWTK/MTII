import PropTypes from "prop-types";
import React from "react";
import { User01 } from "../../icons/User01";
import { User01_18 } from "../../icons/User01_18";
import { User01_24 } from "../../icons/User01_24";
import { User01_27 } from "../../icons/User01_27";
import { User01_33 } from "../../icons/User01_33";
import { VerifiedTick3 } from "../../icons/VerifiedTick3";
import "./style.css";

export const Avatar = ({
  contrastBorder = true,
  size,
  placeholder,
  text,
  statusIcon,
  className,
  overlapGroupClassName,
  textClassName,
  text1 = "OR",
}) => {
  return (
    <div
      className={`avatar size-19-${size} text-0-${text} placeholder-${placeholder} ${statusIcon} ${className}`}
    >
      {((placeholder && statusIcon === "false") ||
        (statusIcon === "company" && !text) ||
        (statusIcon === "online-indicator" && !text) ||
        statusIcon === "verified" ||
        text) && (
        <div className={`overlap-group-6 ${overlapGroupClassName}`}>
          {statusIcon === "false" && text && (
            <div className={`text-38 ${textClassName}`}>{text1}</div>
          )}

          {(statusIcon === "company" ||
            statusIcon === "online-indicator" ||
            (size === "xs" && statusIcon === "verified")) && (
            <>
              <>{contrastBorder && <div className="contrast-border" />}</>
            </>
          )}

          {text && ["company", "online-indicator"].includes(statusIcon) && (
            <div className="text-39">{text1}</div>
          )}

          {placeholder && ["two-xl", "xl"].includes(size) && (
            <User01_18
              className={`${size === "xl" && ["company", "online-indicator"].includes(statusIcon) && "class-115"} ${size === "two-xl" && ["company", "online-indicator"].includes(statusIcon) && "class-116"} ${statusIcon === "false" && size === "xl" && "class-117"} ${statusIcon === "false" && size === "two-xl" && "class-118"}`}
            />
          )}

          {((!placeholder && statusIcon === "company") ||
            (!placeholder && statusIcon === "online-indicator") ||
            (placeholder && size === "two-xl" && statusIcon === "company") ||
            (placeholder &&
              size === "two-xl" &&
              statusIcon === "online-indicator") ||
            (placeholder && size === "xl" && statusIcon === "company") ||
            (placeholder &&
              size === "xl" &&
              statusIcon === "online-indicator")) && (
            <div className="avatar-online" />
          )}

          {size === "lg" && placeholder && (
            <User01_24
              className={`${statusIcon === "false" && "class-119"} ${["company", "online-indicator"].includes(statusIcon) && "class-120"}`}
            />
          )}

          {placeholder &&
            size === "lg" &&
            ["company", "online-indicator"].includes(statusIcon) && (
              <div className="avatar-company-icon" />
            )}

          {size === "md" && placeholder && (
            <User01_27
              className={`${["company", "online-indicator"].includes(statusIcon) && "class-121"} ${statusIcon === "false" && "class-122"}`}
            />
          )}

          {placeholder &&
            size === "md" &&
            ["company", "online-indicator"].includes(statusIcon) && (
              <div className="avatar-company-icon-2" />
            )}

          {size === "sm" && placeholder && <User01 className="user-01" />}

          {placeholder &&
            size === "sm" &&
            ["company", "online-indicator"].includes(statusIcon) && (
              <div className="avatar-company-icon-3" />
            )}

          {size === "xs" && placeholder && <User01_33 className="user-01-33" />}

          {placeholder &&
            size === "xs" &&
            ["company", "online-indicator"].includes(statusIcon) && (
              <div className="avatar-company-icon-4" />
            )}

          {statusIcon === "verified" && (
            <VerifiedTick3
              className={`${size === "xl" ? "class-123" : (size === "two-xl") ? "class-124" : size === "lg" ? "class-125" : size === "md" ? "class-126" : size === "sm" ? "class-127" : "class-128"}`}
            />
          )}
        </div>
      )}

      {statusIcon === "false" && !text && !placeholder && (
        <>
          <>
            {contrastBorder && (
              <div className={`contrast-border-2 ${overlapGroupClassName}`} />
            )}
          </>
        </>
      )}
    </div>
  );
};

Avatar.propTypes = {
  contrastBorder: PropTypes.bool,
  size: PropTypes.oneOf(["xl", "xs", "lg", "two-xl", "sm", "md"]),
  placeholder: PropTypes.bool,
  text: PropTypes.bool,
  statusIcon: PropTypes.oneOf([
    "company",
    "false",
    "verified",
    "online-indicator",
  ]),
  text1: PropTypes.string,
};
