import PropTypes from "prop-types";
import React from "react";
import { ArrowDown11 } from "../../icons/ArrowDown11";
import { ArrowUp144 } from "../../icons/ArrowUp144";
import { TrendDown01 } from "../../icons/TrendDown01";
import { TrendUp01_13 } from "../../icons/TrendUp01_13";
import "./style.css";

export const Change = ({ type, trend, className, text = "100%" }) => {
  return (
    <div className={`change ${type} ${className}`}>
      {type === "one" && trend === "positive" && (
        <ArrowUp144 className="instance-node-14" color="#17B26A" />
      )}

      {type === "two" && trend === "positive" && (
        <TrendUp01_13 className="instance-node-14" />
      )}

      {trend === "positive" && <div className="text-wrapper-4">{text}</div>}

      {trend === "negative" && type === "one" && (
        <>
          <ArrowDown11 className="instance-node-14" color="#F04438" />
          <div className="text-wrapper-5">{text}</div>
        </>
      )}

      {type === "two" && trend === "negative" && (
        <>
          <TrendDown01 className="instance-node-14" />
          <div className="text-wrapper-5">{text}</div>
        </>
      )}
    </div>
  );
};

Change.propTypes = {
  type: PropTypes.oneOf(["two", "one"]),
  trend: PropTypes.oneOf(["negative", "positive"]),
  text: PropTypes.string,
};
