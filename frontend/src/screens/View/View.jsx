import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { LogOut } from "../../icons/LogOut";
import { Link } from "react-router-dom";
import "./style.css";

export const View = () => {
  return (
    <div className="view">
      <HeaderNavigationWrapper
        className="header-navigation-8"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-9" />
        }
      />
      <div className="main-7">
        <div className="section-8">
          <div className="content-41">
            <div className="text-and-supporting-19">
              <div className="text-53">View an order</div>
            </div>

            <div className="actions-18">
              <div className="actions-18">
                <ButtonsButton
                  className="design-component-instance-node-5"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<ChevronLeft className="icon-instance-node-9" />}
                  size="md"
                  stateProp="default"
                  text="Back"
                  to="/data"
                />
                <Link to="/edit">
                  <img
                    className="button-14"
                    alt="Button"
                    src="/img/button-35.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Form
            mode="view"
            buttonsButtonStateProp="disabled"
            className="design-component-instance-node-5"
          />

          <div className="preview-buttons-set">
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the Quotation"
              to="/quotation"
            />
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the invoice"
              to="/invoice"
            />
            <ButtonsButton
              className="design-component-instance-node-5"
              hierarchy="secondary-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="xl"
              stateProp="default"
              text="Preview the receipt"
              to="/receipt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
