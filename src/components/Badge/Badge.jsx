import PropTypes from "prop-types";
import React from "react";
import { ArrowRight27 } from "../../icons/ArrowRight27";
import { ArrowUp12 } from "../../icons/ArrowUp12";
import { Plus7 } from "../../icons/Plus7";
import { XClose30 } from "../../icons/XClose30";
import "./style.css";

export const Badge = ({
  size,
  type,
  icon,
  color,
  className,
  override = <ArrowUp12 className="instance-node-10" color="#667085" />,
  text = "Label",
}) => {
  return (
    <div
      className={`badge icon-0-${icon} ${type} color-${color} size-3-${size} ${className}`}
    >
      {["avatar", "country", "dot", "icon-leading"].includes(icon) && (
        <>{override}</>
      )}

      {(icon === "avatar" ||
        icon === "country" ||
        icon === "dot" ||
        icon === "false" ||
        icon === "icon-leading" ||
        icon === "icon-trailing" ||
        icon === "x-close") && <div className="text-17">{text}</div>}

      {icon === "x-close" && (
        <div className="badge-close-x">
          <XClose30
            className="instance-node-10"
            color={
              color === "brand"
                ? "#B692F6"
                : color === "warning"
                  ? "#FDB022"
                  : color === "success"
                    ? "#47CD89"
                    : color === "blue-light"
                      ? "#36BFFA"
                      : color === "indigo"
                        ? "#8098F9"
                        : color === "purple"
                          ? "#9B8AFB"
                          : color === "blue"
                            ? "#53B1FD"
                            : color === "pink"
                              ? "#F670C7"
                              : color === "orange"
                                ? "#F38744"
                                : color === "error"
                                  ? "#F97066"
                                  : color === "gray"
                                    ? "#98A2B3"
                                    : "#717BBC"
            }
          />
        </div>
      )}

      {icon === "icon-trailing" && (
        <ArrowRight27
          className="instance-node-10"
          color={
            type === "pill-color" && color === "brand"
              ? "#9E77ED"
              : type === "pill-color" && color === "warning"
                ? "#F79009"
                : color === "warning" &&
                    ["badge-color", "pill-outline"].includes(type)
                  ? "#DC6803"
                  : type === "pill-color" && color === "success"
                    ? "#17B26A"
                    : color === "success" &&
                        ["badge-color", "pill-outline"].includes(type)
                      ? "#079455"
                      : ["blue-gray", "gray-blue"].includes(color)
                        ? "#4E5BA6"
                        : color === "blue-light"
                          ? "#0BA5EC"
                          : color === "indigo"
                            ? "#6172F3"
                            : color === "purple"
                              ? "#7A5AF8"
                              : color === "blue"
                                ? "#2E90FA"
                                : color === "pink"
                                  ? "#EE46BC"
                                  : color === "orange"
                                    ? "#EF6820"
                                    : type === "pill-color" && color === "error"
                                      ? "#F04438"
                                      : color === "error" &&
                                          [
                                            "badge-color",
                                            "pill-outline",
                                          ].includes(type)
                                        ? "#D92D20"
                                        : type === "badge-modern" ||
                                            (color === "gray" &&
                                              type === "pill-color")
                                          ? "#667085"
                                          : color === "gray" &&
                                              [
                                                "badge-color",
                                                "pill-outline",
                                              ].includes(type)
                                            ? "#475467"
                                            : "#7F56D9"
          }
        />
      )}

      {icon === "only" && (
        <Plus7
          className="instance-node-10"
          color={
            type === "pill-color" && color === "brand"
              ? "#9E77ED"
              : color === "brand" &&
                  ["badge-color", "pill-outline"].includes(type)
                ? "#7F56D9"
                : type === "pill-color" && color === "warning"
                  ? "#F79009"
                  : color === "warning" &&
                      ["badge-color", "pill-outline"].includes(type)
                    ? "#DC6803"
                    : type === "pill-color" && color === "success"
                      ? "#17B26A"
                      : color === "success" &&
                          ["badge-color", "pill-outline"].includes(type)
                        ? "#079455"
                        : ["blue-gray", "gray-blue"].includes(color)
                          ? "#4E5BA6"
                          : color === "blue-light"
                            ? "#0BA5EC"
                            : color === "indigo"
                              ? "#6172F3"
                              : color === "purple"
                                ? "#7A5AF8"
                                : color === "blue"
                                  ? "#2E90FA"
                                  : color === "pink"
                                    ? "#EE46BC"
                                    : color === "orange"
                                      ? "#EF6820"
                                      : type === "pill-color" &&
                                          color === "error"
                                        ? "#F04438"
                                        : color === "error" &&
                                            [
                                              "badge-color",
                                              "pill-outline",
                                            ].includes(type)
                                          ? "#D92D20"
                                          : type === "badge-modern" ||
                                              (color === "gray" &&
                                                type === "pill-color")
                                            ? "#667085"
                                            : color === "gray" &&
                                                [
                                                  "badge-color",
                                                  "pill-outline",
                                                ].includes(type)
                                              ? "#475467"
                                              : undefined
          }
        />
      )}
    </div>
  );
};

Badge.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  type: PropTypes.oneOf([
    "pill-outline",
    "badge-modern",
    "badge-color",
    "pill-color",
  ]),
  icon: PropTypes.oneOf([
    "icon-leading",
    "only",
    "country",
    "avatar",
    "false",
    "dot",
    "icon-trailing",
    "x-close",
  ]),
  color: PropTypes.oneOf([
    "warning",
    "blue-light",
    "blue-gray",
    "gray-blue",
    "gray",
    "success",
    "blue",
    "orange",
    "brand",
    "pink",
    "error",
    "purple",
    "indigo",
  ]),
  text: PropTypes.string,
};
