import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ArrowLeft21 } from "../../icons/ArrowLeft21";
import { ArrowRight111 } from "../../icons/ArrowRight111";
import { ArrowRight131 } from "../../icons/ArrowRight131";
import { ButtonsButton } from "../ButtonsButton";
import "./style.css";

export const Pagination = ({
  type,
  shape,
  breakpoint,
  className,
  hasButtonWrap = true,
  hasPaginationNumbers = true,
  buttonsButtonText = "Next",
  to,
}) => {
  return (
    <div
      className={`pagination ${type} breakpoint-1-${breakpoint} ${className}`}
    >
      {((breakpoint === "mobile" && type === "card-minimal-left-aligned") ||
        (breakpoint === "mobile" && type === "card-minimal-right-aligned") ||
        type === "card-default" ||
        type === "card-minimal-center-aligned" ||
        type === "page-default" ||
        type === "page-minimal-center-aligned") && (
        <>
          <>
            {hasButtonWrap && (
              <>
                <>
                  {breakpoint === "mobile" && (
                    <ButtonsButton
                      className="buttons-button-6"
                      hierarchy="secondary-gray"
                      icon="only"
                      icon1={
                        <ArrowLeft1
                          className="instance-node-13"
                          color="#344054"
                        />
                      }
                      size="sm"
                      stateProp="default"
                    />
                  )}

                  {breakpoint === "desktop" && (
                    <div className="button-wrap">
                      <ButtonsButton
                        className="buttons-button-6"
                        hierarchy={
                          type === "page-default"
                            ? "link-gray"
                            : "secondary-gray"
                        }
                        icon="default"
                        iconLeading={
                          type === "card-minimal-center-aligned"
                            ? false
                            : undefined
                        }
                        iconTrailing={false}
                        override={
                          [
                            "card-default",
                            "page-default",
                            "page-minimal-center-aligned",
                          ].includes(type) ? (
                            <ArrowLeft1
                              className="instance-node-13"
                              color={
                                type === "page-default"
                                  ? "#475467"
                                  : [
                                        "card-default",
                                        "page-minimal-center-aligned",
                                      ].includes(type)
                                    ? "#344054"
                                    : undefined
                              }
                            />
                          ) : undefined
                        }
                        size="sm"
                        stateProp="default"
                        text="Previous"
                      />
                    </div>
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {((breakpoint === "mobile" && type === "card-minimal-left-aligned") ||
        (breakpoint === "mobile" && type === "card-minimal-right-aligned") ||
        type === "card-default" ||
        type === "card-minimal-center-aligned" ||
        type === "page-default" ||
        type === "page-minimal-center-aligned") && (
        <>
          <>
            {hasPaginationNumbers && (
              <div className="pagination-numbers">
                {breakpoint === "desktop" &&
                  [
                    "card-default",
                    "page-default",
                    "page-minimal-center-aligned",
                  ].includes(type) && (
                    <>
                      <div className={`pagination-number ${shape}`}>
                        <div className="content-8">
                          <div className="number-18">1</div>
                        </div>
                      </div>

                      <div className={`content-wrapper shape-0-${shape}`}>
                        <div className="content-9">
                          <div className="number-19">2</div>
                        </div>
                      </div>

                      <div className={`pagination-number-2 shape-2-${shape}`}>
                        <div className="content-10">
                          <div className="number-19">3</div>
                        </div>
                      </div>

                      <div className={`pagination-number-3 shape-4-${shape}`}>
                        <div className="content-11">
                          <div className="number-19">...</div>
                        </div>
                      </div>

                      <div className={`pagination-number-4 shape-6-${shape}`}>
                        <div className="content-12">
                          <div className="number-19">8</div>
                        </div>
                      </div>

                      <div className={`pagination-number-5 shape-8-${shape}`}>
                        <div className="content-13">
                          <div className="number-19">9</div>
                        </div>
                      </div>

                      <div className={`pagination-number-6 shape-10-${shape}`}>
                        <div className="content-14">
                          <div className="number-19">10</div>
                        </div>
                      </div>
                    </>
                  )}

                {breakpoint === "desktop" &&
                  type === "card-minimal-center-aligned" && <>Page 1 of 10</>}

                {breakpoint === "mobile" && (
                  <>
                    <p className="span-wrapper">
                      <span className="span">Page </span>
                    </p>

                    <p className="span-wrapper">
                      <span className="text-wrapper-10">1</span>
                    </p>

                    <p className="span-wrapper">
                      <span className="text-wrapper-3"> of </span>
                    </p>

                    <p className="span-wrapper">
                      <span className="text-wrapper-10">10</span>
                    </p>
                  </>
                )}
              </div>
            )}
          </>
        </>
      )}

      {((breakpoint === "desktop" && type === "card-default") ||
        (breakpoint === "desktop" && type === "card-minimal-center-aligned") ||
        (breakpoint === "desktop" && type === "page-default") ||
        (breakpoint === "desktop" &&
          type === "page-minimal-center-aligned")) && (
        <div className="buttons-button-wrapper">
          <ButtonsButton
            className="buttons-button-6"
            hierarchy={type === "page-default" ? "link-gray" : "secondary-gray"}
            icon="default"
            icon2={
              [
                "card-default",
                "page-default",
                "page-minimal-center-aligned",
              ].includes(type) ? (
                <ArrowRight111
                  className="instance-node-13"
                  color={
                    type === "page-default"
                      ? "#475467"
                      : [
                            "card-default",
                            "page-minimal-center-aligned",
                          ].includes(type)
                        ? "#344054"
                        : undefined
                  }
                />
              ) : undefined
            }
            iconLeading={false}
            iconTrailing={
              type === "card-minimal-center-aligned" ? false : undefined
            }
            size="sm"
            stateProp="default"
            text={buttonsButtonText}
            to={to}
          />
        </div>
      )}

      {((breakpoint === "mobile" && type === "card-default") ||
        (breakpoint === "mobile" && type === "card-minimal-center-aligned") ||
        (breakpoint === "mobile" && type === "card-minimal-left-aligned") ||
        (breakpoint === "mobile" && type === "card-minimal-right-aligned") ||
        (breakpoint === "mobile" && type === "page-default") ||
        (breakpoint === "mobile" &&
          type === "page-minimal-center-aligned")) && (
        <ButtonsButton
          className="buttons-button-6"
          hierarchy="secondary-gray"
          icon="only"
          icon1={<ArrowRight111 className="instance-node-13" color="#344054" />}
          size="sm"
          stateProp="default"
        />
      )}

      {breakpoint === "desktop" &&
        ["card-minimal-left-aligned", "card-minimal-right-aligned"].includes(
          type,
        ) && (
          <>
            <div className="details">
              {type === "card-minimal-right-aligned" && <>Page 1 of 10</>}

              {type === "card-minimal-left-aligned" && (
                <>
                  <ButtonsButton
                    className="buttons-button-6"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="sm"
                    stateProp="default"
                    text="Previous"
                  />
                  <ButtonsButton
                    className="buttons-button-6"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="sm"
                    stateProp="default"
                    text="Next"
                  />
                </>
              )}
            </div>

            <div className="actions-6">
              {type === "card-minimal-right-aligned" && (
                <>
                  <ButtonsButton
                    className="buttons-button-6"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="sm"
                    stateProp="default"
                    text="Previous"
                  />
                  <ButtonsButton
                    className="buttons-button-6"
                    hierarchy="secondary-gray"
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="sm"
                    stateProp="default"
                    text="Next"
                  />
                </>
              )}

              {type === "card-minimal-left-aligned" && <>Page 1 of 10</>}
            </div>
          </>
        )}

      {[
        "card-button-group-center-aligned",
        "card-button-group-left-aligned",
        "card-button-group-right-aligned",
      ].includes(type) && (
        <div className="pagination-button">
          {breakpoint === "desktop" && (
            <div className="pagination-button-2">
              <ArrowLeft21 className="instance-node-13" />
              <div className="text-20">Previous</div>
            </div>
          )}

          {breakpoint === "mobile" && (
            <div className="arrow-left-wrapper">
              <ArrowLeft21 className="instance-node-13" />
            </div>
          )}

          <div className="pagination-button-3">
            <div className="text-21">1</div>
          </div>

          <div className="pagination-button-4">
            <div className="text-20">2</div>
          </div>

          <div className="pagination-button-5">
            <div className="text-20">
              {breakpoint === "desktop" && <>3</>}

              {breakpoint === "mobile" && <>...</>}
            </div>
          </div>

          <div className="pagination-button-6">
            <div className="text-20">
              {breakpoint === "desktop" && <>...</>}

              {breakpoint === "mobile" && <>9</>}
            </div>
          </div>

          <div className="pagination-button-7">
            <div className="text-20">
              {breakpoint === "desktop" && <>8</>}

              {breakpoint === "mobile" && <>10</>}
            </div>
          </div>

          {breakpoint === "mobile" && (
            <div className="arrow-right-wrapper">
              <ArrowRight131 className="instance-node-13" />
            </div>
          )}

          {breakpoint === "desktop" && (
            <>
              <div className="pagination-button-8">
                <div className="text-20">9</div>
              </div>

              <div className="pagination-button-9">
                <div className="text-20">10</div>
              </div>

              <div className="pagination-button-10">
                <div className="text-20">Next</div>

                <ArrowRight131 className="instance-node-13" />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  type: PropTypes.oneOf([
    "card-button-group-center-aligned",
    "card-default",
    "page-minimal-center-aligned",
    "card-button-group-right-aligned",
    "card-minimal-right-aligned",
    "page-default",
    "card-minimal-left-aligned",
    "card-button-group-left-aligned",
    "card-minimal-center-aligned",
  ]),
  shape: PropTypes.oneOf(["circle", "square"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  hasButtonWrap: PropTypes.bool,
  hasPaginationNumbers: PropTypes.bool,
  buttonsButtonText: PropTypes.string,
  to: PropTypes.string,
};
