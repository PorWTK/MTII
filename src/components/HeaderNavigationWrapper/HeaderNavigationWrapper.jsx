/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogOut } from "../../icons/LogOut";
import { HeaderNavigation } from "../HeaderNavigation";
import "./style.css";

export const HeaderNavigationWrapper = ({
  className,
  headerNavigationNavItemButtonIcon = <LogOut className="log-out-instance" />,
  headerNavigationNavItemBaseCurrent = true,
  headerNavigationNavItemBaseCurrent1 = false,
}) => {
  return (
    <div className={`header-navigation-wrapper ${className}`}>
      <HeaderNavigation
        className="header-navigation-instance"
        navItemBaseCurrent={headerNavigationNavItemBaseCurrent}
        navItemBaseCurrent1={headerNavigationNavItemBaseCurrent1}
        navItemButtonIcon={headerNavigationNavItemButtonIcon}
        to="/data"
        to1="/analytics"
        to2="/log-in"
      />
    </div>
  );
};

HeaderNavigationWrapper.propTypes = {
  headerNavigationNavItemBaseCurrent: PropTypes.bool,
  headerNavigationNavItemBaseCurrent1: PropTypes.bool,
};
