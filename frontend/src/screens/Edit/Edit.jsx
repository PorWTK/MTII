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
            datePickerDropdownButtonsButtonIcon={
              <Calendar29 className="icon-instance-node-8" />
            }
            datePickerDropdownButtonsButtonIcon1={
              <Calendar29 className="icon-instance-node-8" />
            }
            datePickerDropdownButtonsButtonIcon2={
              <Calendar29 className="icon-instance-node-8" />
            }
            datePickerDropdownButtonsButtonIcon3={
              <Calendar29 className="icon-instance-node-8" />
            }
            datePickerDropdownButtonsButtonIcon4={
              <Calendar29 className="icon-instance-node-8" />
            }
            datePickerDropdownButtonsButtonText="1 January 2024"
            datePickerDropdownButtonsButtonText1="8 January 2024"
            datePickerDropdownButtonsButtonText2="7 January 2024"
            datePickerDropdownButtonsButtonText3="7 February 2024"
            datePickerDropdownButtonsButtonText4="9 February 2024"
            datePickerDropdownButtonsButtonText5="30 January 2024"
            inputClassName="form-instance"
            inputClassNameOverride="form-instance"
            inputDropdownStateProp="default"
            inputDropdownStateProp1="default"
            inputDropdownStateProp2="default"
            inputDropdownSupportingText={false}
            inputDropdownSupportingText1={false}
            inputDropdownSupportingText2={false}
            inputDropdownText="@Pinnnnn"
            inputDropdownText1="@Pinnnnn"
            inputDropdownText2="Tiktok"
            inputDropdownText3="Pending"
            inputDropdownText4="Credit Term"
            inputDropdownText5="ฟาใส"
            override={<Calendar29 className="icon-instance-node-8" />}
            textClassName="form-instance"
            textClassName1="form-instance"
            textClassName2="form-instance"
            textClassName3="form-instance"
            textClassName4="form-instance"
            textClassName5="form-instance"
            textClassName6="form-instance"
            textClassName7="form-instance"
            textClassName8="form-instance"
            textClassName9="form-instance"
            textClassNameOverride="form-instance"
          />
        </div>
      </div>
    </div>
  );
};
