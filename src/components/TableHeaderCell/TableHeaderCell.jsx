/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox } from "../Checkbox";
import { TableHeader } from "../TableHeader";
import "./style.css";

export const TableHeaderCell = ({
  text,
  checkbox,
  color,
  className,
  visible = true,
  tableHeaderVisible,
  tableHeaderText = "Company",
  tableHeaderText1 = "Company",
}) => {
  return (
    <div
      className={`table-header-cell ${color} text-${text} checkbox-${checkbox} ${className}`}
    >
      {checkbox && text && (
        <>
          <>
            {visible && (
              <Checkbox
                checked={false}
                className="instance-node-9"
                indeterminate={false}
                size="md"
                state="default"
                text={false}
                type="checkbox"
              />
            )}
          </>

          <TableHeader
            arrow="down"
            className="instance-node-9"
            helpIcon={false}
            stateProp="default"
            text={tableHeaderText}
            visible={tableHeaderVisible}
          />
        </>
      )}

      {!checkbox && text && (
        <TableHeader
          arrow="false"
          className="instance-node-9"
          helpIcon={false}
          stateProp="default"
          text={tableHeaderText1}
        />
      )}

      {checkbox && !text && (
        <Checkbox
          checked={false}
          className="instance-node-9"
          indeterminate={false}
          size="md"
          state="default"
          text={false}
          type="checkbox"
        />
      )}
    </div>
  );
};

TableHeaderCell.propTypes = {
  text: PropTypes.bool,
  checkbox: PropTypes.bool,
  color: PropTypes.oneOf(["gray", "white"]),
  visible: PropTypes.bool,
  tableHeaderVisible: PropTypes.bool,
  tableHeaderText: PropTypes.string,
  tableHeaderText1: PropTypes.string,
};
