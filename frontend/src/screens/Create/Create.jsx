import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { LogOut } from "../../icons/LogOut";
import { Link } from "react-router-dom";
import "./style.css";

export const Create = () => {
  return (
    <div className="create">
      <HeaderNavigationWrapper
        className="header-navigation-9"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-10" />
        }
      />
      <div className="main-8">
        <div className="section-9">
          <div className="content-42">
            <div className="text-and-supporting-20">
              <div className="text-54">Create a new order</div>

              <p className="supporting-text-13">
                Fill out the form below to create a new invoice
              </p>
            </div>

            <div className="actions-19">
              <div className="actions-19">
                <ButtonsButton
                  className="design-component-instance-node-6"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconLeading={false}
                  iconTrailing={false}
                  size="md"
                  stateProp="default"
                  text="Cancel"
                  to="/data"
                />
                <Link to="/view">
                  <img
                    className="button-15"
                    alt="Button"
                    src="/img/button-36.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Form
            button="/img/button-37.svg"
            buttonClassName="form-11"
            buttonsButtonStateProp="default"
            className="design-component-instance-node-6"
            mode = "create"
          />
        </div>
      </div>
    </div>
  );
};
