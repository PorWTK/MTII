import PropTypes from "prop-types";
import React from "react";
import { ArrowUp12 } from "../../icons/ArrowUp12";
import { ChartMini } from "../../icons/ChartMini";
import { ChartMini1 } from "../../icons/ChartMini1";
import { ChartMini2 } from "../../icons/ChartMini2";
import { ChartMini3 } from "../../icons/ChartMini3";
import { ChartMini4 } from "../../icons/ChartMini4";
import { ChartMini5 } from "../../icons/ChartMini5";
import { ChartMini6 } from "../../icons/ChartMini6";
import { ChartMini7 } from "../../icons/ChartMini7";
import { ChartMini8 } from "../../icons/ChartMini8";
import { ChartMini9 } from "../../icons/ChartMini9";
import { ChartMini10 } from "../../icons/ChartMini10";
import { ChartMini11 } from "../../icons/ChartMini11";
import { Eye } from "../../icons/Eye";
import { Settings01_7 } from "../../icons/Settings01_7";
import { TrendUp01 } from "../../icons/TrendUp01";
import { Zap4 } from "../../icons/Zap4";
import { Badge } from "../Badge";
import { ButtonsButton } from "../ButtonsButton";
import { Change } from "../Change";
import { Dropdown } from "../Dropdown";
import { FeaturedIcon } from "../FeaturedIcon";
import "./style.css";

export const MetricItem = ({
  dropdownIcon = true,
  actions,
  type,
  breakpoint,
  className,
  text = "Views 24 hours",
  text1 = "2,000",
  changeText = "100%",
  text2 = "vs last month",
  hasBadgeWrap = true,
  changeTrend = "positive",
}) => {
  return (
    <div
      className={`metric-item breakpoint-8-${breakpoint} actions-${actions} ${type} ${className}`}
    >
      {((!actions && type === "chart-01") ||
        (!actions && type === "chart-02") ||
        (!actions && type === "icon-02") ||
        (!actions && type === "simple") ||
        actions) && (
        <>
          <div className="heading">
            {!actions && ["chart-01", "simple"].includes(type) && <>{text}</>}

            {((actions && type === "chart-01") ||
              (actions && type === "chart-02") ||
              (actions && type === "icon-02") ||
              (actions && type === "simple")) && (
              <div className="heading-2">
                {["chart-01", "simple"].includes(type) && <>{text}</>}

                {["chart-02", "icon-02"].includes(type) && (
                  <>
                    <FeaturedIcon
                      color={type === "chart-02" ? "gray" : "brand"}
                      icon={
                        type === "chart-02" ? (
                          <Eye className="instance-node-15" />
                        ) : (
                          <Zap4 className="instance-node-15" color="#7F56D9" />
                        )
                      }
                      size="lg"
                      type={type === "chart-02" ? "modern" : "light"}
                    />
                    <div className="heading-3">{text}</div>
                  </>
                )}
              </div>
            )}

            {((actions && type === "chart-01") ||
              (actions && type === "chart-02") ||
              (actions && type === "icon-02") ||
              (actions && type === "simple") ||
              type === "chart-03") && (
              <div className="number-and-badge">
                {["chart-03", "icon-02", "simple"].includes(type) && (
                  <>
                    <div className="number-20">
                      {["icon-02", "simple"].includes(type) && <>{text1}</>}

                      {type === "chart-03" && <>{text}</>}
                    </div>

                    <div className="badge-wrap">
                      {type === "simple" && (
                        <Badge
                          className="instance-node-16"
                          color="success"
                          icon="icon-leading"
                          override={
                            <ArrowUp12 className="arrow-up" color="#17B26A" />
                          }
                          size="md"
                          text="100%"
                          type="pill-color"
                        />
                      )}

                      {type === "icon-02" && (
                        <>
                          <Change
                            className="instance-node-16"
                            text="100%"
                            trend="positive"
                            type="one"
                          />
                          <div className="text-22">{text2}</div>
                        </>
                      )}

                      {type === "chart-03" && (
                        <>
                          <div className="number-21">{text1}</div>

                          <div className="change-and-text">
                            <Change
                              className="instance-node-16"
                              text="100%"
                              trend="positive"
                              type="two"
                            />
                            <div className="text-23">{text2}</div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                {type === "chart-02" && (
                  <div className="number-and-badge-2">
                    <div className="number-22">{text1}</div>

                    <Change
                      className="instance-node-16"
                      text="100%"
                      trend="positive"
                      type="two"
                    />
                  </div>
                )}

                {type === "chart-02" && breakpoint === "desktop" && (
                  <ChartMini1 className="chart-mini" />
                )}

                {type === "chart-01" && (
                  <div className="number-and-badge-3">
                    <div className="number-23">{text1}</div>

                    <div className="change-and-text-2">
                      <Change
                        className="instance-node-16"
                        text="100%"
                        trend="positive"
                        type="one"
                      />
                      <div className="text-22">{text2}</div>
                    </div>
                  </div>
                )}

                {type === "chart-01" && breakpoint === "desktop" && (
                  <ChartMini10 className="chart-mini-2" />
                )}

                {breakpoint === "mobile" && type === "chart-02" && (
                  <ChartMini2 className="chart-mini" />
                )}

                {type === "chart-01" && breakpoint === "mobile" && (
                  <ChartMini5 className="chart-mini-3" />
                )}
              </div>
            )}

            {(type === "icon-01" ||
              type === "icon-03" ||
              (!actions && type === "chart-02") ||
              (!actions && type === "icon-02")) && (
              <>
                <FeaturedIcon
                  color={
                    type === "icon-01"
                      ? "success"
                      : type === "icon-02"
                        ? "brand"
                        : "gray"
                  }
                  icon={
                    type === "icon-02" ? (
                      <Zap4 className="instance-node-15" color="#7F56D9" />
                    ) : type === "chart-02" ? (
                      <Eye className="instance-node-15" />
                    ) : (
                      <TrendUp01
                        className="instance-node-15"
                        color={
                          type === "icon-01"
                            ? "#079455"
                            : type === "icon-03"
                              ? "#344054"
                              : undefined
                        }
                      />
                    )
                  }
                  size="lg"
                  type={
                    ["chart-02", "icon-03"].includes(type) ? "modern" : "light"
                  }
                />
                <div className="heading-and-number">
                  {actions && (
                    <>
                      <div className="heading-4">{text}</div>

                      <div className="number-and-badge-4">
                        <div className="number-24">{text1}</div>

                        <div className="badge-wrap-2">
                          {type === "icon-01" && (
                            <Badge
                              className="instance-node-16"
                              color="success"
                              icon="icon-leading"
                              override={
                                <ArrowUp12
                                  className="arrow-up"
                                  color="#17B26A"
                                />
                              }
                              size="md"
                              text="100%"
                              type="pill-color"
                            />
                          )}

                          {type === "icon-03" && (
                            <>
                              <Change
                                className="instance-node-16"
                                text="100%"
                                trend="positive"
                                type="two"
                              />
                              <div className="text-23">{text2}</div>
                            </>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {!actions && <>{text}</>}
                </div>
              </>
            )}

            {type === "chart-03" && breakpoint === "desktop" && (
              <ChartMini8 className="chart-mini-4" />
            )}

            {breakpoint === "mobile" && type === "chart-03" && (
              <ChartMini11 className="chart-mini-4" />
            )}
          </div>

          <div className="number-and-badge-5">
            {!actions && (
              <>
                <div className="number-25">
                  {["icon-02", "simple"].includes(type) && <>{text1}</>}

                  {type === "chart-02" && (
                    <>
                      <div className="number-26">{text1}</div>

                      <Change
                        className="instance-node-16"
                        text="100%"
                        trend="positive"
                        type="two"
                      />
                    </>
                  )}

                  {type === "chart-01" && (
                    <>
                      <div className="number-27">{text1}</div>

                      <div className="change-and-text-2">
                        <Change
                          className="instance-node-16"
                          text={changeText}
                          trend={changeTrend}
                          type="one"
                        />
                        <div className="text-22">{text2}</div>
                      </div>
                    </>
                  )}
                </div>

                <>
                  {hasBadgeWrap && (
                    <>
                      <>
                        {["icon-02", "simple"].includes(type) && (
                          <div className="badge-wrap-3">
                            {type === "simple" && (
                              <Badge
                                className="instance-node-16"
                                color="success"
                                icon="icon-leading"
                                override={
                                  <ArrowUp12
                                    className="arrow-up"
                                    color="#17B26A"
                                  />
                                }
                                size="md"
                                text="100%"
                                type="pill-color"
                              />
                            )}

                            {type === "icon-02" && (
                              <>
                                <Change
                                  className="instance-node-16"
                                  text="100%"
                                  trend="positive"
                                  type="one"
                                />
                                <div className="text-22">{text2}</div>
                              </>
                            )}
                          </div>
                        )}

                        {type === "chart-02" && breakpoint === "desktop" && (
                          <ChartMini className="chart-mini" />
                        )}

                        {type === "chart-01" && breakpoint === "desktop" && (
                          <ChartMini4 className="chart-mini-2" />
                        )}

                        {type === "chart-01" && breakpoint === "mobile" && (
                          <ChartMini9 className="chart-mini-3" />
                        )}

                        {breakpoint === "mobile" && type === "chart-02" && (
                          <ChartMini3 className="chart-mini" />
                        )}
                      </>
                    </>
                  )}
                </>
              </>
            )}

            {actions && (
              <div className="content-15">
                {["chart-02", "chart-03", "icon-03"].includes(type) && (
                  <ButtonsButton
                    className="instance-node-16"
                    hierarchy="tertiary-gray"
                    icon="only"
                    icon1={<Settings01_7 className="settings" />}
                    size="sm"
                    stateProp="default"
                  />
                )}

                <ButtonsButton
                  className="instance-node-16"
                  hierarchy={
                    ["chart-02", "chart-03", "icon-03"].includes(type)
                      ? "secondary-gray"
                      : "link-color"
                  }
                  icon="default"
                  iconLeading={false}
                  iconTrailing={false}
                  size={
                    ["chart-02", "chart-03", "icon-03"].includes(type)
                      ? "sm"
                      : "md"
                  }
                  stateProp="default"
                  text="View report"
                />
              </div>
            )}
          </div>
        </>
      )}

      {!actions && ["icon-01", "icon-03"].includes(type) && (
        <FeaturedIcon
          color={type === "icon-03" ? "gray" : "success"}
          icon={
            <TrendUp01
              className="instance-node-15"
              color={
                type === "icon-01"
                  ? "#079455"
                  : type === "icon-03"
                    ? "#344054"
                    : undefined
              }
            />
          }
          size="lg"
          type={type === "icon-03" ? "modern" : "light"}
        />
      )}

      {((!actions && breakpoint === "desktop" && type === "chart-03") ||
        (!actions && breakpoint === "desktop" && type === "icon-01") ||
        (!actions && breakpoint === "desktop" && type === "icon-03") ||
        (!actions && type === "chart-01") ||
        (!actions && type === "chart-02") ||
        (!actions && type === "icon-02") ||
        (!actions && type === "simple") ||
        actions) && (
        <>
          <>
            {dropdownIcon && (
              <Dropdown
                className={`${breakpoint === "mobile" ? "dropdown-2" : "class-42"}`}
                open={false}
                type="icon"
              />
            )}
          </>
        </>
      )}

      {!actions && ["chart-03", "icon-01", "icon-03"].includes(type) && (
        <div className="heading-and-number-2">
          <div className="heading-4">{text}</div>

          {((breakpoint === "desktop" && type === "chart-03") ||
            (breakpoint === "mobile" && type === "icon-01") ||
            (breakpoint === "mobile" && type === "icon-03")) && (
            <>
              <>
                {hasBadgeWrap && (
                  <div className="number-and-badge-6">
                    <div className="number-28">{text1}</div>

                    <div className="badge-wrap-4">
                      {type === "icon-01" && (
                        <Badge
                          className="instance-node-16"
                          color="success"
                          icon="icon-leading"
                          override={
                            <ArrowUp12 className="arrow-up" color="#17B26A" />
                          }
                          size="md"
                          text="100%"
                          type="pill-color"
                        />
                      )}

                      {["chart-03", "icon-03"].includes(type) && (
                        <>
                          <Change
                            className="instance-node-16"
                            text="100%"
                            trend="positive"
                            type="two"
                          />
                          <div className="text-23">{text2}</div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </>
            </>
          )}

          {((breakpoint === "desktop" && type === "icon-01") ||
            (breakpoint === "desktop" && type === "icon-03") ||
            (breakpoint === "mobile" && type === "chart-03")) && (
            <div className="number-and-badge-7">
              <div className="number-29">{text1}</div>

              <div className="change-and-text-3">
                {["chart-03", "icon-03"].includes(type) && (
                  <>
                    <Change
                      className="instance-node-16"
                      text="100%"
                      trend="positive"
                      type="two"
                    />
                    <div className="text-23">{text2}</div>
                  </>
                )}

                {type === "icon-01" && (
                  <Badge
                    className="instance-node-16"
                    color="success"
                    icon="icon-leading"
                    override={
                      <ArrowUp12 className="arrow-up" color="#17B26A" />
                    }
                    size="md"
                    text="100%"
                    type="pill-color"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {!actions && type === "chart-03" && breakpoint === "desktop" && (
        <ChartMini7 className="chart-mini-4" />
      )}

      {!actions &&
        breakpoint === "mobile" &&
        ["icon-01", "icon-03"].includes(type) && (
          <>
            <>
              {dropdownIcon && (
                <Dropdown className="dropdown-2" open={false} type="icon" />
              )}
            </>
          </>
        )}

      {!actions && breakpoint === "mobile" && type === "chart-03" && (
        <>
          <ChartMini6 className="chart-mini-4" />

          <>
            {dropdownIcon && (
              <Dropdown className="dropdown-2" open={false} type="icon" />
            )}
          </>
        </>
      )}
    </div>
  );
};

MetricItem.propTypes = {
  dropdownIcon: PropTypes.bool,
  actions: PropTypes.bool,
  type: PropTypes.oneOf([
    "icon-01",
    "chart-01",
    "icon-03",
    "chart-03",
    "chart-02",
    "icon-02",
    "simple",
  ]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  changeText: PropTypes.string,
  text2: PropTypes.string,
  hasBadgeWrap: PropTypes.bool,
  changeTrend: PropTypes.string,
};
