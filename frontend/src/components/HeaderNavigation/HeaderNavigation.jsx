import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "../../icons/LogOut";
import { NavItemBase } from "../NavItemBase";
import { NavItemButton } from "../NavItemButton";
import "./style.css";

export const HeaderNavigation = ({
  className,
  navItemButtonIcon = <LogOut className="log-out" />,
  navItemBaseCurrent = true,
  navItemBaseCurrent1 = false,
  to,
  to1,
  to2,
}) => {
  return (
    <div className={`header-navigation ${className}`}>
      <div className="div">
        <div className="content-2">
          <div className="content-3">
            <img className="star" alt="Star" src="/img/star.svg" />
          </div>

          <div className="text-2">MTII</div>

          <div className="navigation">
            <NavItemBase
              badge={false}
              className="nav-item-base-instance"
              contentClassName="design-component-instance-node"
              current={navItemBaseCurrent}
              dot={false}
              dropdown={false}
              icon={false}
              stateProp="default"
              text="Data"
              to={to}
            />
            <NavItemBase
              badge={false}
              className="nav-item-base-instance"
              contentClassName="design-component-instance-node"
              current={navItemBaseCurrent1}
              dot={false}
              dropdown={false}
              icon={false}
              stateProp="default"
              text="Analytics"
              to={to1}
            />
          </div>
        </div>

        <Link className="content-2" to={to2}>
          <div className="actions">
            <NavItemButton
              className="nav-item-button-instance"
              current={false}
              icon={navItemButtonIcon}
              size="md"
              stateProp="default"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

HeaderNavigation.propTypes = {
  navItemBaseCurrent: PropTypes.bool,
  navItemBaseCurrent1: PropTypes.bool,
  to: PropTypes.string,
  to1: PropTypes.string,
  to2: PropTypes.string,
};
