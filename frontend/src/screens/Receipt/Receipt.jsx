import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { PDF } from "../../components/PDF";
import "./style.css";

export const Receipt = () => {
  return (
    <div className="receipt">
      <HeaderNavigationWrapper
        className="header-navigation-2"
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node" />
        }
      />
      <div className="main">
        <div className="section">
          <div className="content-26">
            <div className="text-and-supporting-11">
              <div className="text-42">Preview the receipt</div>
            </div>

            <div className="actions-10">
              <div className="actions-10">
                <ButtonsButton
                  className="button-6"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to="/view"
                />
                <img
                  className="button-7"
                  alt="Button"
                  src="/img/button-24.svg"
                />
              </div>
            </div>
          </div>

          <div className="form-2">
            <div className="divider-4" />

            <div className="PDF-format-wrapper">
              <PDF />
            </div>

            <div className="divider-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
