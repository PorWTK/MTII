import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import "./style.css";

export const Quotation = () => {
  return (
    <div className="quotation">
      <HeaderNavigationWrapper
        className="header-navigation-4"
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-3" />
        }
      />
      <div className="main-3">
        <div className="section-3">
          <div className="content-28">
            <div className="text-and-supporting-13">
              <div className="text-44">Preview the quotation</div>
            </div>

            <div className="actions-12">
              <div className="actions-12">
                <ButtonsButton
                  className="button-10"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node-3" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to="/view"
                />
                <img
                  className="button-11"
                  alt="Button"
                  src="/img/button-26.svg"
                />
              </div>
            </div>
          </div>

          <div className="form-4">
            <div className="divider-6" />

            <div className="frame-12">
              <img
                className="PDF-format-3"
                alt="Pdf format"
                src="/img/pdfformat-2.svg"
              />
            </div>

            <div className="divider-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
