/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { MetricItem } from "../MetricItem";
import "./style.css";

export const MetricItemWrapper = ({
  className,
  metricItemActionsFalseTypeClassName,
  metricItemText = "220.8k",
  metricItemText1 = "Total Income",
  metricItemChangeTrend = "positive",
}) => {
  return (
    <div className={`metric-item-wrapper ${className}`}>
      <MetricItem
        actions={false}
        breakpoint="desktop"
        changeText="12%"
        changeTrend={metricItemChangeTrend}
        className={metricItemActionsFalseTypeClassName}
        dropdownIcon={false}
        hasBadgeWrap={false}
        text={metricItemText1}
        text1={metricItemText}
        text2="vs last year"
        type="chart-01"
      />
    </div>
  );
};

MetricItemWrapper.propTypes = {
  metricItemText: PropTypes.string,
  metricItemText1: PropTypes.string,
  metricItemChangeTrend: PropTypes.string,
};
