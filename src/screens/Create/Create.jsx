import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Calendar29 } from "../../icons/Calendar29";
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
            datePickerDropdownButtonsButtonDivClassName="form-12"
            datePickerDropdownButtonsButtonDivClassNameOverride="form-12"
            datePickerDropdownButtonsButtonIcon={
              <Calendar29 className="icon-instance-node-10" />
            }
            datePickerDropdownButtonsButtonIcon1={
              <Calendar29 className="icon-instance-node-10" />
            }
            datePickerDropdownButtonsButtonIcon2={
              <Calendar29 className="icon-instance-node-10" />
            }
            datePickerDropdownButtonsButtonIcon3={
              <Calendar29 className="icon-instance-node-10" />
            }
            datePickerDropdownButtonsButtonIcon4={
              <Calendar29 className="icon-instance-node-10" />
            }
            datePickerDropdownButtonsButtonText="Select dates"
            datePickerDropdownButtonsButtonText1="Select dates"
            datePickerDropdownButtonsButtonText2="Select dates"
            datePickerDropdownButtonsButtonText3="Select dates"
            datePickerDropdownButtonsButtonText4="Select dates"
            datePickerDropdownButtonsButtonText5="Select dates"
            datePickerDropdownButtonsButtonTextClassName="form-12"
            datePickerDropdownButtonsButtonTextClassName1="form-12"
            datePickerDropdownButtonsButtonTextClassName2="form-12"
            datePickerDropdownButtonsButtonTextClassNameOverride="form-12"
            datePickerDropdownStateProp="active"
            datePickerDropdownStateProp1="active"
            datePickerDropdownStateProp2="active"
            datePickerDropdownStateProp3="active"
            datePickerDropdownStateProp4="active"
            datePickerDropdownStateProp5="active"
            inputDropdownStateProp="placeholder"
            inputDropdownStateProp1="placeholder"
            inputDropdownStateProp2="placeholder"
            inputDropdownStateProp3="default"
            inputDropdownStateProp4="default"
            inputDropdownStateProp5="default"
            inputDropdownText="All"
            inputDropdownText1="All"
            inputDropdownText10="Select payment method"
            inputDropdownText11="Select Sale Person"
            inputDropdownText2="All"
            inputDropdownText9="Select payment status"
            override={<Calendar29 className="icon-instance-node-10" />}
          />
        </div>
      </div>
    </div>
  );
};
