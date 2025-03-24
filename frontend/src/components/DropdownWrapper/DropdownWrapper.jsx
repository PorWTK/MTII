import PropTypes from "prop-types";
import React from "react";
import { Delete } from "../../icons/Delete";
import { DotsVertical9 } from "../../icons/DotsVertical9";
import { Edit1 } from "../../icons/Edit1";
import { Eye } from "../../icons/Eye";
import { Dropdown } from "../Dropdown";
import "./style.css";

export const DropdownWrapper = ({ className, dropdownOpen = false }) => {
  return (
    <div className={`dropdown-wrapper ${className}`}>
      <Dropdown
        className="dropdown-8"
        concreteComponentNodeCheckboxAndTextClassName="dropdown-5"
        concreteComponentNodeContentClassName="dropdown-5"
        concreteComponentNodeDivClassName="dropdown-6"
        concreteComponentNodeIcon={<Eye className="icon-instance-node" />}
        concreteComponentNodeIcon1={<Delete className="icon-instance-node" />}
        concreteComponentNodeIconAndTextClassName="dropdown-5"
        concreteComponentNodeIconAndTextClassNameOverride="dropdown-5"
        concreteComponentNodeIconTrueCheckboxClassName="dropdown-7"
        concreteComponentNodeShortcut={false}
        concreteComponentNodeShortcut1={false}
        concreteComponentNodeShortcut2={false}
        concreteComponentNodeText="View"
        concreteComponentNodeText1="Edit"
        concreteComponentNodeText2="Delete"
        concreteComponentNodeTextClassName="dropdown-6"
        concreteComponentNodeTextClassNameOverride="dropdown-6"
        icon={<DotsVertical9 className="dots-vertical-9" />}
        menuClassName="dropdown-3"
        menuItemsClassName="dropdown-4"
        open={dropdownOpen}
        override={<Edit1 className="icon-instance-node" color="#667085" />}
        to="/view"
        to1="/edit"
        type="icon"
        visible={false}
        visible1={false}
        visible10={false}
        visible11={false}
        visible2={false}
        visible3={false}
        visible4={false}
        visible5={false}
        visible6={false}
        visible7={false}
        visible8={false}
        visible9={false}
      />
    </div>
  );
};

DropdownWrapper.propTypes = {
  dropdownOpen: PropTypes.bool,
};
