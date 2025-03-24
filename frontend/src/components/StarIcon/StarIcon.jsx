import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StarIcon = ({ fill, color, className, starClassName }) => {
  return (
    <div className={`star-icon fill-${fill} ${className}`}>
      {(fill === "eighty" ||
        fill === "fifty" ||
        fill === "forty" ||
        fill === "ninety" ||
        fill === "one-hundred" ||
        fill === "seventy" ||
        fill === "sixty" ||
        fill === "ten" ||
        fill === "thirty" ||
        fill === "twenty") && (
        <div className="overlap-group-7">
          <img
            className="star-background"
            alt="Star background"
            src="/img/star-background.svg"
          />

          <div className="star-wrapper">
            <img
              className="star-2"
              alt="Star"
              src={
                fill === "ten" && color === "gray"
                  ? "/img/star-18.svg"
                  : color === "yellow" && fill === "twenty"
                    ? "/img/star-21.svg"
                    : color === "gray" && fill === "twenty"
                      ? "/img/star-22.svg"
                      : color === "yellow" && fill === "thirty"
                        ? "/img/star-23.svg"
                        : color === "gray" && fill === "thirty"
                          ? "/img/star-24.svg"
                          : color === "yellow" && fill === "forty"
                            ? "/img/star-25.svg"
                            : color === "gray" && fill === "forty"
                              ? "/img/star-26.svg"
                              : fill === "fifty" && color === "yellow"
                                ? "/img/star-27.svg"
                                : color === "gray" && fill === "fifty"
                                  ? "/img/star-28.svg"
                                  : color === "yellow" && fill === "sixty"
                                    ? "/img/star-29.svg"
                                    : color === "gray" && fill === "sixty"
                                      ? "/img/star-30.svg"
                                      : color === "yellow" && fill === "seventy"
                                        ? "/img/star-31.svg"
                                        : color === "gray" && fill === "seventy"
                                          ? "/img/star-32.svg"
                                          : fill === "eighty" &&
                                              color === "yellow"
                                            ? "/img/star-33.svg"
                                            : color === "gray" &&
                                                fill === "eighty"
                                              ? "/img/star-34.svg"
                                              : fill === "ninety" &&
                                                  color === "yellow"
                                                ? "/img/star-35.svg"
                                                : fill === "ninety" &&
                                                    color === "gray"
                                                  ? "/img/star-36.svg"
                                                  : color === "yellow" &&
                                                      fill === "one-hundred"
                                                    ? "/img/star-5.svg"
                                                    : color === "gray" &&
                                                        fill === "one-hundred"
                                                      ? "/img/star-38.svg"
                                                      : "/img/star-17.svg"
              }
            />
          </div>
        </div>
      )}

      {fill === "zero" && (
        <>
          <img
            className="star-background"
            alt="Star background"
            src="/img/star-background.svg"
          />

          <div className="star-3">
            <img
              className={`star-4 ${starClassName}`}
              alt="Star"
              src={color === "gray" ? "/img/star-20.svg" : "/img/star-9.svg"}
            />
          </div>
        </>
      )}
    </div>
  );
};

StarIcon.propTypes = {
  fill: PropTypes.oneOf([
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
  color: PropTypes.oneOf(["yellow", "gray"]),
};
