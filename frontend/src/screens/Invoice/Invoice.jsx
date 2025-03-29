import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { PDF } from "../../components/PDF";
import "./style.css";

export const Invoice = () => {
  return (
    <div className="invoice">
      <HeaderNavigationWrapper
        className="header-navigation-3"
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-2" />
        }
      />
      <div className="main-2">
        <div className="section-2">
          <div className="content-27">
            <div className="text-and-supporting-12">
              <div className="text-43">Preview the invoice</div>
            </div>

            <div className="actions-11">
              <div className="actions-11">
                <ButtonsButton
                  className="button-8"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node-2" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to="/view"
                />
                <img
                  className="button-9"
                  alt="Button"
                  src="/img/button-25.svg"
                />
              </div>
            </div>
          </div>

          <div className="form-3">
            <div className="divider-5" />

            <div className="frame-11">
              <PDF /> 
            </div>

            <div className="divider-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
