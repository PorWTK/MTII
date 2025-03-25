import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Calendar29 } from "../../icons/Calendar29";
import { LogOut } from "../../icons/LogOut";
import { Trash2 } from "../../icons/Trash2";
import { Link } from "react-router-dom";
import "./style.css";

export const Edit = () => {
  return (
    <div className="edit-screen">
      <HeaderNavigationWrapper
        className="header-navigation-7"
        headerNavigationNavItemBaseCurrent
        headerNavigationNavItemBaseCurrent1={false}
        headerNavigationNavItemButtonIcon={
          <LogOut className="icon-instance-node-8" />
        }
      />
      <div className="main-6">
        <div className="section-7">
          <div className="content-40">
            <div className="text-and-supporting-18">
              <div className="text-52">Edit a new order</div>
            </div>

            <div className="actions-17">
              <div className="actions-17">
                <ButtonsButton
                  className="design-component-instance-node-4"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconTrailing={false}
                  override={<Trash2 className="icon-instance-node-8" />}
                  size="md"
                  stateProp="default"
                  text="Delete"
                />
                <Link to="/view">
                  <img
                    className="button-13"
                    alt="Button"
                    src="/img/button-33.svg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <Form
            button="/img/button-34.svg"
            className="design-component-instance-node-4"
            mode = "edit"
          />
        </div>
      </div>
    </div>
  );
};
