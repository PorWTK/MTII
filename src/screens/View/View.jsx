import React from "react";
import { ButtonsButton } from "../../components/ButtonsButton";
import { Form } from "../../components/Form";
import { HeaderNavigationWrapper } from "../../components/HeaderNavigationWrapper";
import { Calendar29 } from "../../icons/Calendar29";
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
            buttonsButtonStateProp="disabled"
            className="design-component-instance-node-5"
            datePickerDropdownButtonsButtonDivClassName="form-8"
            datePickerDropdownButtonsButtonDivClassNameOverride="form-8"
            datePickerDropdownButtonsButtonIcon={
              <Calendar29 className="icon-instance-node-9" />
            }
            datePickerDropdownButtonsButtonIcon1={
              <Calendar29 className="icon-instance-node-9" />
            }
            datePickerDropdownButtonsButtonIcon2={
              <Calendar29 className="icon-instance-node-9" />
            }
            datePickerDropdownButtonsButtonIcon3={
              <Calendar29 className="icon-instance-node-9" />
            }
            datePickerDropdownButtonsButtonIcon4={
              <Calendar29 className="icon-instance-node-9" />
            }
            datePickerDropdownButtonsButtonText="1 January 2024"
            datePickerDropdownButtonsButtonText1="8 January 2024"
            datePickerDropdownButtonsButtonText2="7 January 2024"
            datePickerDropdownButtonsButtonText3="7 February 2024"
            datePickerDropdownButtonsButtonText4="9 February 2024"
            datePickerDropdownButtonsButtonText5="30 January 2024"
            datePickerDropdownButtonsButtonTextClassName="form-8"
            datePickerDropdownButtonsButtonTextClassName1="form-8"
            datePickerDropdownButtonsButtonTextClassName2="form-8"
            datePickerDropdownButtonsButtonTextClassNameOverride="form-8"
            datePickerDropdownStateProp="placeholder"
            datePickerDropdownStateProp1="placeholder"
            datePickerDropdownStateProp2="placeholder"
            datePickerDropdownStateProp3="placeholder"
            datePickerDropdownStateProp4="placeholder"
            datePickerDropdownStateProp5="placeholder"
            divClassName="form-6"
            divClassNameOverride="form-6"
            inputClassName="form-9"
            inputClassName1="form-6"
            inputClassName10="form-6"
            inputClassName11="form-6"
            inputClassName12="form-6"
            inputClassName13="form-6"
            inputClassName14="form-6"
            inputClassName15="form-6"
            inputClassName16="form-6"
            inputClassName17="form-6"
            inputClassName18="form-6"
            inputClassName19="form-6"
            inputClassName2="form-6"
            inputClassName20="form-6"
            inputClassName21="form-6"
            inputClassName22="form-6"
            inputClassName23="form-6"
            inputClassName24="form-6"
            inputClassName25="form-6"
            inputClassName26="form-6"
            inputClassName27="form-6"
            inputClassName28="form-6"
            inputClassName29="form-6"
            inputClassName3="form-6"
            inputClassName30="form-6"
            inputClassName4="form-6"
            inputClassName5="form-6"
            inputClassName6="form-6"
            inputClassName7="form-6"
            inputClassName8="form-6"
            inputClassName9="form-6"
            inputClassNameOverride="form-9"
            inputDropdownStateProp="disabled"
            inputDropdownStateProp1="disabled"
            inputDropdownStateProp2="disabled"
            inputDropdownStateProp3="disabled"
            inputDropdownStateProp4="disabled"
            inputDropdownStateProp5="disabled"
            inputDropdownText10="Credit Term"
            inputDropdownText11="ฟาใส"
            inputDropdownText6="@Pinnnnn"
            inputDropdownText7="@Pinnnnn"
            inputDropdownText8="Tiktok"
            inputDropdownText9="Pending"
            override={<Calendar29 className="icon-instance-node-9" />}
            textClassName="form-9"
            textClassName1="form-9"
            textClassName10="form-9"
            textClassName11="form-9"
            textClassName12="form-9"
            textClassName13="form-9"
            textClassName14="form-9"
            textClassName15="form-9"
            textClassName16="form-9"
            textClassName17="form-9"
            textClassName18="form-9"
            textClassName19="form-9"
            textClassName2="form-9"
            textClassName20="form-9"
            textClassName21="form-9"
            textClassName22="form-9"
            textClassName23="form-9"
            textClassName24="form-10"
            textClassName25="form-9"
            textClassName26="form-9"
            textClassName27="form-9"
            textClassName28="form-9"
            textClassName3="form-9"
            textClassName4="form-9"
            textClassName5="form-9"
            textClassName6="form-9"
            textClassName7="form-9"
            textClassName8="form-9"
            textClassName9="form-9"
            textClassNameOverride="form-9"
            textInputClassName="form-7"
            textInputClassName1="form-7"
            textInputClassNameOverride="form-7"
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
