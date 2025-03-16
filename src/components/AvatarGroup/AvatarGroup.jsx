import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import { AvatarAddButton } from "../AvatarAddButton";
import "./style.css";

export const AvatarGroup = ({
  addMoreButton = true,
  moreUsers = true,
  size,
  className,
  visible = true,
  visible1 = true,
  visible2 = true,
  visible3 = true,
  visible4 = true,
}) => {
  return (
    <div className={`avatar-group ${className}`}>
      <div className="avatars">
        <Avatar
          className={`${size === "sm" ? "class-132" : (size === "md") ? "class-133" : "class-134"}`}
          overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          statusIcon="false"
          text={false}
        />
        <Avatar
          className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
          overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          statusIcon="false"
          text={false}
        />
        <Avatar
          className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
          overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          statusIcon="false"
          text={false}
        />
        <Avatar
          className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
          overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          statusIcon="false"
          text={false}
        />
        <Avatar
          className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
          overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
          placeholder={false}
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          statusIcon="false"
          text={false}
        />

        {visible && (
          <Avatar
            className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text={false}
          />
        )}

        {visible1 && (
          <Avatar
            className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text={false}
          />
        )}

        {visible2 && (
          <Avatar
            className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text={false}
          />
        )}

        {visible3 && (
          <Avatar
            className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text={false}
          />
        )}

        {visible4 && (
          <Avatar
            className={`${size === "sm" ? "class-135" : (size === "md") ? "class-136" : "class-137"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text={false}
          />
        )}

        {moreUsers && (
          <Avatar
            className={`${size === "sm" ? "class-138" : (size === "md") ? "class-139" : "class-140"}`}
            overlapGroupClassName={`${size === "sm" ? "class-129" : (size === "md") ? "class-130" : "class-131"}`}
            placeholder={false}
            size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
            statusIcon="false"
            text
            text1="+5"
            textClassName="avatar-7"
          />
        )}
      </div>

      {addMoreButton && (
        <AvatarAddButton
          className="avatar-add-button-instance"
          size={size === "sm" ? "sm" : size === "md" ? "md" : "xs"}
          stateProp="default"
        />
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  addMoreButton: PropTypes.bool,
  moreUsers: PropTypes.bool,
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  visible: PropTypes.bool,
  visible1: PropTypes.bool,
  visible2: PropTypes.bool,
  visible3: PropTypes.bool,
  visible4: PropTypes.bool,
};
