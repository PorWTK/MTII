import PropTypes from "prop-types";
import React from "react";
import { Calendar29 } from "../../icons/Calendar29";
import { ButtonsButton } from "../ButtonsButton";
import { DatePickerDropdown } from "../DatePickerDropdown";
import { InputDropdown } from "../InputDropdown";
import { SectionLabel } from "../SectionLabel";
import "./style.css";

export const Form = ({
  className,
  textClassName,
  datePickerDropdownButtonsButtonText = "Select dates",
  datePickerDropdownButtonsButtonIcon = <Calendar29 className="calendar-29" />,
  datePickerDropdownButtonsButtonText1 = "Select dates",
  override = <Calendar29 className="calendar-29" />,
  textClassNameOverride,
  datePickerDropdownButtonsButtonText2 = "Select dates",
  datePickerDropdownButtonsButtonIcon1 = <Calendar29 className="calendar-29" />,
  datePickerDropdownButtonsButtonText3 = "Select dates",
  datePickerDropdownButtonsButtonIcon2 = <Calendar29 className="calendar-29" />,
  inputClassName,
  datePickerDropdownButtonsButtonText4 = "Select dates",
  datePickerDropdownButtonsButtonIcon3 = <Calendar29 className="calendar-29" />,
  inputDropdownText = "All",
  inputDropdownText1 = "All",
  inputDropdownText2 = "All",
  datePickerDropdownButtonsButtonText5 = "Select dates",
  datePickerDropdownButtonsButtonIcon4 = <Calendar29 className="calendar-29" />,
  inputClassNameOverride,
  textClassName1,
  textClassName2,
  textClassName3,
  button = "/img/button-32.svg",
  textClassName4,
  textClassName5,
  inputDropdownStateProp = "placeholder",
  inputDropdownSupportingText,
  inputDropdownText3,
  inputDropdownStateProp1 = "placeholder",
  inputDropdownSupportingText1,
  inputDropdownText4,
  textClassName6,
  textClassName7,
  textClassName8,
  textClassName9,
  inputDropdownStateProp2 = "placeholder",
  inputDropdownSupportingText2,
  inputDropdownText5,
  divClassName,
  textInputClassName,
  datePickerDropdownStateProp = "active",
  datePickerDropdownButtonsButtonTextClassName,
  datePickerDropdownStateProp1 = "active",
  datePickerDropdownButtonsButtonTextClassNameOverride,
  divClassNameOverride,
  textInputClassNameOverride,
  datePickerDropdownStateProp2 = "active",
  datePickerDropdownButtonsButtonDivClassName,
  datePickerDropdownStateProp3 = "active",
  datePickerDropdownButtonsButtonDivClassNameOverride,
  inputClassName1,
  textInputClassName1,
  datePickerDropdownStateProp4 = "active",
  datePickerDropdownButtonsButtonTextClassName1,
  inputDropdownStateProp3 = "default",
  inputDropdownText6,
  inputDropdownStateProp4 = "default",
  inputDropdownText7,
  inputDropdownStateProp5 = "default",
  inputDropdownText8,
  datePickerDropdownStateProp5 = "active",
  datePickerDropdownButtonsButtonTextClassName2,
  inputClassName2,
  inputClassName3,
  textClassName10,
  inputClassName4,
  textClassName11,
  inputClassName5,
  textClassName12,
  inputClassName6,
  textClassName13,
  inputClassName7,
  textClassName14,
  inputClassName8,
  textClassName15,
  inputClassName9,
  textClassName16,
  inputClassName10,
  textClassName17,
  inputClassName11,
  inputClassName12,
  inputClassName13,
  textClassName18,
  inputClassName14,
  textClassName19,
  inputClassName15,
  textClassName20,
  inputClassName16,
  inputClassName17,
  textClassName21,
  inputClassName18,
  textClassName22,
  inputClassName19,
  textClassName23,
  buttonsButtonStateProp = "default",
  inputClassName20,
  inputClassName21,
  inputDropdownText9 = "Select payment status",
  inputDropdownText10 = "Select payment method",
  inputClassName22,
  textClassName24,
  inputClassName23,
  textClassName25,
  inputClassName24,
  inputClassName25,
  textClassName26,
  inputClassName26,
  inputClassName27,
  textClassName27,
  inputClassName28,
  inputClassName29,
  textClassName28,
  inputClassName30,
  inputDropdownText11 = "Select Sale Person",
  buttonClassName,
  inputType = "tel",
  inputType1 = "tel",
  inputType2 = "email",
}) => {
  return (
    <div className={`form ${className}`}>
      <div className="divider-2" />

      <div className="content-19">
        <div className="QIR-tab">
          <div className="frame">
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Quotation ID number</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-3 ${divClassName}`}>
                  <div className="add-on">
                    <div className="text-36">QT</div>
                  </div>

                  <div className={`text-input-4 ${textInputClassName}`}>
                    <input className={`text-37 ${textClassName}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Quotation issue date</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={datePickerDropdownButtonsButtonIcon}
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
                buttonsButtonText={datePickerDropdownButtonsButtonText}
                buttonsButtonTextClassName={
                  datePickerDropdownButtonsButtonTextClassName
                }
                buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp={datePickerDropdownStateProp}
                type="single-date"
              />
            </div>

            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Quotation due date</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={override}
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
                buttonsButtonText={datePickerDropdownButtonsButtonText1}
                buttonsButtonTextClassName={
                  datePickerDropdownButtonsButtonTextClassNameOverride
                }
                buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp={datePickerDropdownStateProp1}
                type="single-date"
              />
            </div>
          </div>

          <div className="frame">
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Invoice ID number</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-3 ${divClassNameOverride}`}>
                  <div className="add-on">
                    <div className="text-36">IV</div>
                  </div>

                  <div className={`text-input-4 ${textInputClassNameOverride}`}>
                    <input className={`text-37 ${textClassNameOverride}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Invoice issue date</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={datePickerDropdownButtonsButtonIcon1}
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
                buttonsButtonText={datePickerDropdownButtonsButtonText2}
                buttonsButtonTextClassName={
                  datePickerDropdownButtonsButtonDivClassName
                }
                buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp={datePickerDropdownStateProp2}
                type="single-date"
              />
            </div>

            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Invoice due date</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={datePickerDropdownButtonsButtonIcon2}
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
                buttonsButtonText={datePickerDropdownButtonsButtonText3}
                buttonsButtonTextClassName={
                  datePickerDropdownButtonsButtonDivClassNameOverride
                }
                buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp={datePickerDropdownStateProp3}
                type="single-date"
              />
            </div>
          </div>

          <div className="frame">
            <div className="input-field-3">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Receipt ID number</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-3 ${inputClassName1}`}>
                  <div className="add-on">
                    <div className="text-36">RC</div>
                  </div>

                  <div className={`text-input-4 ${textInputClassName1}`}>
                    <input className={`text-37 ${inputClassName}`} />
                  </div>
                </div>
              </div>
            </div>

            <div className="frame-2">
              <div className="input-with-label-4">
                <div className="label-wrapper-4">
                  <div className="label-3">Receipt issue date</div>
                </div>
              </div>

              <DatePickerDropdown
                breakpoint="mobile"
                buttonsButtonIcon={datePickerDropdownButtonsButtonIcon3}
                buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
                buttonsButtonText={datePickerDropdownButtonsButtonText4}
                buttonsButtonTextClassName={
                  datePickerDropdownButtonsButtonTextClassName1
                }
                buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
                className="date-picker-dropdown-instance"
                opened={false}
                stateProp={datePickerDropdownStateProp4}
                type="single-date"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Receiver"
        />
        <div className="input-fields-3">
          <InputDropdown
            className="input-dropdown-2"
            helpIcon={false}
            hintText={false}
            stateProp={inputDropdownStateProp3}
            supportingText={false}
            text="Receiver"
            text1={inputDropdownText}
            text2={inputDropdownText6}
            type="default"
          />
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Influencer"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <InputDropdown
              className="input-dropdown-3"
              helpIcon={false}
              hintText={false}
              stateProp={inputDropdownStateProp4}
              supportingText={false}
              text="Channel"
              text1={inputDropdownText1}
              text2={inputDropdownText7}
              type="default"
            />
            <InputDropdown
              className="input-dropdown-4"
              helpIcon={false}
              hintText={false}
              stateProp={inputDropdownStateProp5}
              supportingText={false}
              text="Platform"
              text1={inputDropdownText2}
              text2={inputDropdownText8}
              type="default"
            />
          </div>

          <div className="frame-4">
            <div className="input-with-label-4">
              <div className="label-wrapper-4">
                <div className="label-3">Posting Date</div>
              </div>
            </div>

            <DatePickerDropdown
              breakpoint="mobile"
              buttonsButtonIcon={datePickerDropdownButtonsButtonIcon4}
              buttonsButtonSizeMdHierarchyClassName="date-picker-dropdown-2"
              buttonsButtonText={datePickerDropdownButtonsButtonText5}
              buttonsButtonTextClassName={
                datePickerDropdownButtonsButtonTextClassName2
              }
              buttonsButtonTextPaddingClassName="date-picker-dropdown-3"
              className="date-picker-dropdown-instance"
              opened={false}
              stateProp={datePickerDropdownStateProp5}
              type="dual-dates"
            />
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Client (Agency)"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Agency Name</div>

                  <div className="asterisk-6">{""}</div>
                </div>

                <div className={`input-4 ${inputClassName2}`}>
                  <input className={`content-20 ${inputClassNameOverride}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <label className="label-3" htmlFor="input-2">
                    Tax Payer ID number
                  </label>
                </div>

                <div className={`input-4 ${inputClassName3}`}>
                  <input
                    className={`content-21 ${textClassName10}`}
                    id="input-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <label className="label-3" htmlFor="input-4">
                    Address
                  </label>
                </div>

                <div className={`input-4 ${inputClassName4}`}>
                  <input
                    className={`content-21 ${textClassName11}`}
                    id="input-4"
                  />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <input
                    className="label-4"
                    htmlFor="input-5"
                    placeholder="Phone number"
                    type={inputType}
                  />
                </div>

                <div className={`input-4 ${inputClassName5}`}>
                  <input
                    className={`content-21 ${textClassName12}`}
                    id="input-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Client (Contactor)"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Contacter Name</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-4 ${inputClassName6}`}>
                  <input className={`content-21 ${textClassName13}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <input
                    className="label-4"
                    htmlFor="input-6"
                    placeholder="Phone number"
                    type={inputType1}
                  />
                </div>

                <div className={`input-4 ${inputClassName7}`}>
                  <input
                    className={`content-21 ${textClassName14}`}
                    id="input-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Line</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-4 ${inputClassName8}`}>
                  <input className={`content-21 ${textClassName15}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <input
                    className="label-4"
                    htmlFor="input-7"
                    placeholder="Email"
                    type={inputType2}
                  />
                </div>

                <div className={`input-4 ${inputClassName9}`}>
                  <input
                    className={`content-21 ${textClassName16}`}
                    id="input-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Brand"
        />
        <div className="input-fields-3">
          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Brand name</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-4 ${inputClassName10}`}>
                  <input className={`content-21 ${textClassName17}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Product</div>

                  <div className="asterisk-5">*</div>
                </div>

                <div className={`input-4 ${inputClassName11}`}>
                  <input className={`content-20 ${textClassName1}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="frame-5">
        <div className="content-19">
          <SectionLabel
            actions={false}
            className="section-label-instance"
            helpIcon={false}
            size="sm"
            supportingText={false}
            text="Details"
          />
          <div className="frame-6">
            <div className="div-3">
              <div className="frame-3">
                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Decription</div>
                    </div>

                    <div className={`input-4 ${inputClassName12}`}>
                      <input className={`content-20 ${textClassName2}`} />
                    </div>
                  </div>
                </div>

                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Notes</div>
                    </div>

                    <div className={`input-4 ${inputClassName13}`}>
                      <input className={`content-21 ${textClassName18}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-3">
                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Quantity</div>
                    </div>

                    <div className={`input-4 ${inputClassName14}`}>
                      <input className={`content-21 ${textClassName19}`} />
                    </div>
                  </div>
                </div>

                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Unit price</div>
                    </div>

                    <div className={`input-4 ${inputClassName15}`}>
                      <input className={`content-21 ${textClassName20}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider-3" />
            </div>

            <div className="div-3">
              <div className="frame-3">
                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Decription</div>
                    </div>

                    <div className={`input-4 ${inputClassName16}`}>
                      <input className={`content-20 ${textClassName3}`} />
                    </div>
                  </div>
                </div>

                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Notes</div>
                    </div>

                    <div className={`input-4 ${inputClassName17}`}>
                      <input className={`content-21 ${textClassName21}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="frame-3">
                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Quantity</div>
                    </div>

                    <div className={`input-4 ${inputClassName18}`}>
                      <input className={`content-21 ${textClassName22}`} />
                    </div>
                  </div>
                </div>

                <div className="input-field-4">
                  <div className="input-with-label-3">
                    <div className="label-wrapper-3">
                      <div className="label-3">Unit price</div>
                    </div>

                    <div className={`input-4 ${inputClassName19}`}>
                      <input className={`content-21 ${textClassName23}`} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider-3" />
            </div>

            <div className="div-3">
              <div className="actions-9">
                <ButtonsButton
                  className="button-4"
                  hierarchy="secondary-gray"
                  icon="default"
                  iconLeading={false}
                  iconTrailing={false}
                  size="md"
                  stateProp={buttonsButtonStateProp}
                  text="Delete"
                />
                <img
                  className={`button-5 ${buttonClassName}`}
                  alt="Button"
                  src={button}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Payment"
        />
        <div className="frame-7">
          <div className="frame-8">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Bank</div>
                </div>

                <div className={`input-4 ${inputClassName20}`}>
                  <input className={`content-20 ${textClassName4}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <label className="label-3" htmlFor="input-9">
                    Transaction Reference number
                  </label>
                </div>

                <div className={`input-4 ${inputClassName21}`}>
                  <input
                    className={`content-20 ${textClassName5}`}
                    id="input-9"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-9">
            <InputDropdown
              className="input-dropdown-5"
              helpIcon={false}
              hintText={false}
              stateProp={inputDropdownStateProp}
              supportingText={inputDropdownSupportingText}
              text="Status"
              text1={inputDropdownText3}
              text2={inputDropdownText9}
              type="default"
            />
            <InputDropdown
              className="input-dropdown-5"
              helpIcon={false}
              hintText={false}
              required={false}
              stateProp={inputDropdownStateProp1}
              supportingText={inputDropdownSupportingText1}
              text="Payment method"
              text1={inputDropdownText4}
              text2={inputDropdownText10}
              type="default"
            />
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Terms and conditions</div>
                </div>

                <div className={`input-4 ${inputClassName22}`}>
                  <input className={`content-21 ${textClassName24}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Total Payment Amount</div>
                </div>

                <div className={`input-4 ${inputClassName23}`}>
                  <input className={`content-21 ${textClassName25}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <p className="label-3">Notes for the total payment</p>
                </div>

                <div className={`input-4 ${inputClassName24}`}>
                  <input className={`content-20 ${textClassName6}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">First Payment</div>
                </div>

                <div className={`input-4 ${inputClassName25}`}>
                  <input className={`content-21 ${textClassName26}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <p className="label-3">Notes for the first payment</p>
                </div>

                <div className={`input-4 ${inputClassName26}`}>
                  <input className={`content-20 ${textClassName7}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Second Payment</div>
                </div>

                <div className={`input-4 ${inputClassName27}`}>
                  <input className={`content-21 ${textClassName27}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <p className="label-3">Notes for the second payment</p>
                </div>

                <div className={`input-4 ${inputClassName28}`}>
                  <input className={`content-20 ${textClassName8}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="frame-3">
            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <div className="label-3">Unpaid payment amount</div>
                </div>

                <div className={`input-4 ${inputClassName29}`}>
                  <input className={`content-21 ${textClassName28}`} />
                </div>
              </div>
            </div>

            <div className="input-field-4">
              <div className="input-with-label-3">
                <div className="label-wrapper-3">
                  <p className="label-3">Notes for the unpaid payment</p>
                </div>

                <div className={`input-4 ${inputClassName30}`}>
                  <input className={`content-20 ${textClassName9}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-2" />

      <div className="content-19">
        <SectionLabel
          actions={false}
          className="section-label-instance"
          helpIcon={false}
          size="sm"
          supportingText={false}
          text="Sale Person"
        />
        <div className="frame-wrapper">
          <div className="frame-10">
            <InputDropdown
              className="input-dropdown-6"
              helpIcon={false}
              hintText={false}
              stateProp={inputDropdownStateProp2}
              supportingText={inputDropdownSupportingText2}
              text="Sale Person"
              text1={inputDropdownText5}
              text2={inputDropdownText11}
              type="default"
            />
          </div>
        </div>
      </div>

      <div className="divider-2" />
    </div>
  );
};

Form.propTypes = {
  datePickerDropdownButtonsButtonText: PropTypes.string,
  datePickerDropdownButtonsButtonText1: PropTypes.string,
  datePickerDropdownButtonsButtonText2: PropTypes.string,
  datePickerDropdownButtonsButtonText3: PropTypes.string,
  datePickerDropdownButtonsButtonText4: PropTypes.string,
  inputDropdownText: PropTypes.string,
  inputDropdownText1: PropTypes.string,
  inputDropdownText2: PropTypes.string,
  datePickerDropdownButtonsButtonText5: PropTypes.string,
  button: PropTypes.string,
  inputDropdownStateProp: PropTypes.string,
  inputDropdownSupportingText: PropTypes.bool,
  inputDropdownText3: PropTypes.string,
  inputDropdownStateProp1: PropTypes.string,
  inputDropdownSupportingText1: PropTypes.bool,
  inputDropdownText4: PropTypes.string,
  inputDropdownStateProp2: PropTypes.string,
  inputDropdownSupportingText2: PropTypes.bool,
  inputDropdownText5: PropTypes.string,
  datePickerDropdownStateProp: PropTypes.string,
  datePickerDropdownStateProp1: PropTypes.string,
  datePickerDropdownStateProp2: PropTypes.string,
  datePickerDropdownStateProp3: PropTypes.string,
  datePickerDropdownStateProp4: PropTypes.string,
  inputDropdownStateProp3: PropTypes.string,
  inputDropdownText6: PropTypes.string,
  inputDropdownStateProp4: PropTypes.string,
  inputDropdownText7: PropTypes.string,
  inputDropdownStateProp5: PropTypes.string,
  inputDropdownText8: PropTypes.string,
  datePickerDropdownStateProp5: PropTypes.string,
  buttonsButtonStateProp: PropTypes.string,
  inputDropdownText9: PropTypes.string,
  inputDropdownText10: PropTypes.string,
  inputDropdownText11: PropTypes.string,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
};








<div className="divider-2" />

// {/* Receiver Section */}
// <div className="content-19">

//   <SectionLabel
//     actions={false}
//     className="section-label-instance"
//     helpIcon={false}
//     size="sm"
//     supportingText={false}
//     text="Receiver"
//   />
//   <div className="input-fields-3">
//    <div className="input-with-label-4">
//       <div className="label-wrapper-4">
//         <div className="label-3">Receiver</div>
//       </div>
//     </div>
//     <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
//       <InputLabel id="receiver-label" sx={{ display: "none" }}>
//         Receiver
//       </InputLabel>
//       <Select labelId="receiver-label" defaultValue="">
//         <MenuItem value="All">All</MenuItem>
//         <MenuItem value="@PinnPW">@PinnPW</MenuItem>
//         <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
//         <MenuItem value="บริษัท โชคชัย 9672 จำกัด">บริษัท โชคชัย 9672 จำกัด</MenuItem>
//       </Select>
//     </FormControl>
//   </div>
// </div>

// <div className="divider-2" />

// {/* Influencer Section */}
// <div className="content-19">
//   <SectionLabel
//     actions={false}
//     className="section-label-instance"
//     helpIcon={false}
//     size="sm"
//     supportingText={false}
//     text="Influencer"
//   />
//   <div className="input-fields-3">
//     <div className="frame-3">
//       <div className="input-fields-3">
//       <div className="input-with-label-4">
//           <div className="label-wrapper-4">
//             <div className="label-3">Receiver</div>
//           </div>
//         </div>
//         <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
//           <InputLabel id="receiver-label" sx={{ display: "none" }}>
//             Receiver
//           </InputLabel>
//           <Select labelId="receiver-label" defaultValue="">
//             <MenuItem value="All">All</MenuItem>
//             <MenuItem value="@PinnPW">@PinnPW</MenuItem>
//             <MenuItem value="@Porpyyy_">@Porpyyy_</MenuItem>
//             <MenuItem value="บริษัท โชคชัย 9672 จำกัด">บริษัท โชคชัย 9672 จำกัด</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//       <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
//         <InputLabel id="channel-label">Channel</InputLabel>
//         <Select labelId="channel-label" label="Channel" defaultValue="">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="Option1">Option1</MenuItem>
//           {/* Add other options */}
//         </Select>
//       </FormControl>

//       <FormControl fullWidth sx={{ width: "479px" }} disabled={isDisabled}>
//         <InputLabel id="platform-label">Platform</InputLabel>
//         <Select labelId="platform-label" label="Platform" defaultValue="">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="Option1">Option1</MenuItem>
//           {/* Add other options */}
//         </Select>
//       </FormControl>
//     </div>

//     <div className="frame-4">
//       <div className="input-with-label-4">
//         <div className="label-wrapper-4">
//           <div className="label-3">Posting Date</div>
//         </div>
//       </div>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DatePicker
//           value={postingDate}
//           onChange={(newValue) => setPostingDate(newValue)}
//           disabled={isDisabled}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               fullWidth
//               sx={{ height: "44px", width: "476px" }}
//             />
//           )}
//         />
//       </LocalizationProvider>
//     </div>
//   </div>
// </div>

// <div className="divider-2" />

// {/* Client (Agency) Section */}
// <div className="content-19">
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="agency-name">
//       Agency Name
//     </InputLabel>
//     <TextField
//       id="agency-name"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="taxpayer-id">
//       Tax Payer ID number
//     </InputLabel>
//     <TextField
//       id="taxpayer-id"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
// </div>
// <div className="frame-3">
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="address">
//       Address
//     </InputLabel>
//     <TextField
//       id="address"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="phone-agency">
//       Phone number
//     </InputLabel>
//     <TextField
//       id="phone-agency"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       type="tel"
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
// </div>

// <div className="divider-2" />

// {/* Client (Contactor) Section */}
// <div className="content-19">
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="contacter-name">
//       Contacter Name
//     </InputLabel>
//     <TextField
//       id="contacter-name"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="phone-contacter">
//       Phone number
//     </InputLabel>
//     <TextField
//       id="phone-contacter"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       type="tel"
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
// </div>
// <div className="frame-3">
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="line">
//       Line
//     </InputLabel>
//     <TextField
//       id="line"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
//   <FormControl fullWidth>
//     <InputLabel shrink htmlFor="email">
//       Email
//     </InputLabel>
//     <TextField
//       id="email"
//       variant="outlined"
//       fullWidth
//       disabled={isDisabled}
//       type="email"
//       sx={{ height: "44px" }}
//     />
//   </FormControl>
// </div>

// <div className="divider-2" />

// {/* Brand Section */}
// <div className="content-19">
//   <div className="frame-3">
//     <FormControl fullWidth>
//       <InputLabel shrink htmlFor="brand-name">
//         Brand name
//       </InputLabel>
//       <TextField
//         id="brand-name"
//         variant="outlined"
//         fullWidth
//         disabled={isDisabled}
//         sx={{ height: "44px" }}
//       />
//     </FormControl>
//     <FormControl fullWidth>
//       <InputLabel shrink htmlFor="product">
//         Product
//       </InputLabel>
//       <TextField
//         id="product"
//         variant="outlined"
//         fullWidth
//         disabled={isDisabled}
//         sx={{ height: "44px" }}
//       />
//     </FormControl>
//   </div>
// </div>

// <div className="divider-2" />

// {/* Details Section */}
// <div className="frame-5">
//   <div className="content-19">
//     <div className="section-label-instance">Details</div>
//     <div className="frame-6">
//       <div className="div-3">
//         <div className="frame-3">
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="description-1">
//               Description
//             </InputLabel>
//             <TextField
//               id="description-1"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="notes-1">Notes</InputLabel>
//             <TextField
//               id="notes-1"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//         </div>
//         <div className="frame-3">
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="quantity-1">
//               Quantity
//             </InputLabel>
//             <TextField
//               id="quantity-1"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="unit-price-1">
//               Unit price
//             </InputLabel>
//             <TextField
//               id="unit-price-1"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//         </div>
//         <div className="divider-3" />
//       </div>
//       <div className="div-3">
//         <div className="frame-3">
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="description-2">
//               Description
//             </InputLabel>
//             <TextField
//               id="description-2"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="notes-2">Notes</InputLabel>
//             <TextField
//               id="notes-2"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//         </div>
//         <div className="frame-3">
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="quantity-2">
//               Quantity
//             </InputLabel>
//             <TextField
//               id="quantity-2"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <InputLabel shrink htmlFor="unit-price-2">
//               Unit price
//             </InputLabel>
//             <TextField
//               id="unit-price-2"
//               variant="outlined"
//               fullWidth
//               disabled={isDisabled}
//               sx={{ height: "44px" }}
//             />
//           </FormControl>
//         </div>
//         <div className="divider-3" />
//       </div>
//       <div className="div-3">
//         <div className="actions-9">
//           <Button variant="contained" color="secondary" disabled={isDisabled}>
//             Delete
//           </Button>
//           <Button variant="contained" disabled={isDisabled}>
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="divider-2" />

// {/* Payment Section */}
// <div className="content-19">
//   <div className="section-label-instance">Payment</div>
//   <div className="frame-7">
//     <div className="frame-8">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="bank">
//           Bank
//         </InputLabel>
//         <TextField
//           id="bank"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="transaction-ref">
//           Transaction Reference number
//         </InputLabel>
//         <TextField
//           id="transaction-ref"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//     <div className="frame-9">
//       <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
//         <InputLabel id="status-label">Status</InputLabel>
//         <Select labelId="status-label" label="Status" defaultValue="">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="Paid">Paid</MenuItem>
//           <MenuItem value="Unpaid">Unpaid</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
//         <InputLabel id="payment-method-label">Payment method</InputLabel>
//         <Select labelId="payment-method-label" label="Payment method" defaultValue="">
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value="Credit Card">Credit Card</MenuItem>
//           <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//     <div className="frame-3">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="terms-conditions">
//           Terms and conditions
//         </InputLabel>
//         <TextField
//           id="terms-conditions"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//     <div className="frame-3">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="total-payment">
//           Total Payment Amount
//         </InputLabel>
//         <TextField
//           id="total-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="notes-total-payment">
//           Notes for the total payment
//         </InputLabel>
//         <TextField
//           id="notes-total-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//     <div className="frame-3">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="first-payment">
//           First Payment
//         </InputLabel>
//         <TextField
//           id="first-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="notes-first-payment">
//           Notes for the first payment
//         </InputLabel>
//         <TextField
//           id="notes-first-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//     <div className="frame-3">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="second-payment">
//           Second Payment
//         </InputLabel>
//         <TextField
//           id="second-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="notes-second-payment">
//           Notes for the second payment
//         </InputLabel>
//         <TextField
//           id="notes-second-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//     <div className="frame-3">
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="unpaid-payment">
//           Unpaid payment amount
//         </InputLabel>
//         <TextField
//           id="unpaid-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//       <FormControl fullWidth>
//         <InputLabel shrink htmlFor="notes-unpaid-payment">
//           Notes for the unpaid payment
//         </InputLabel>
//         <TextField
//           id="notes-unpaid-payment"
//           variant="outlined"
//           fullWidth
//           disabled={isDisabled}
//           sx={{ height: "44px" }}
//         />
//       </FormControl>
//     </div>
//   </div>
// </div>

// <div className="divider-2" />

// {/* Sale Person Section */}
// <div className="content-19">
//   <FormControl fullWidth sx={{ width: "468px" }} disabled={isDisabled}>
//     <InputLabel id="sale-person-label">Sale Person</InputLabel>
//     <Select labelId="sale-person-label" label="Sale Person" defaultValue="">
//       <MenuItem value="">
//         <em>None</em>
//       </MenuItem>
//       <MenuItem value="Person1">Person1</MenuItem>
//       {/* Additional options can be added here */}
//     </Select>
//   </FormControl>
// </div>

// <div className="divider-2" />
// </div>
// );
// };

// Form.propTypes = {
// mode: PropTypes.oneOf(["create", "edit", "view"]),
// className: PropTypes.string,
// };

// export default Form;
