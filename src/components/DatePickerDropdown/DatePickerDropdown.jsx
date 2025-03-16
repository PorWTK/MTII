/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Calendar29 } from "../../icons/Calendar29";
import { ChevronRight44 } from "../../icons/ChevronRight44";
import { ButtonsButton } from "../ButtonsButton";
import { ChevronRightWrapper } from "../ChevronRightWrapper";
import { InputField } from "../InputField";
import "./style.css";

export const DatePickerDropdown = ({
  opened,
  type,
  stateProp,
  breakpoint,
  className,
  buttonsButtonIcon = <Calendar29 className="instance-node-4" />,
  buttonsButtonSizeMdHierarchyClassName,
  buttonsButtonTextClassName,
  buttonsButtonTextPaddingClassName,
  buttonsButtonText = "Jan 12, 2024 – Jan 18, 2024",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    opened: opened || true,

    type: type || "dual-dates",

    state: stateProp || "placeholder",

    breakpoint: breakpoint || "desktop",
  });

  return (
    <div
      className={`date-picker-dropdown opened-${state.opened} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.opened && (
        <>
          <ButtonsButton
            className="buttons-button-instance"
            hierarchy="secondary-gray"
            icon="default"
            iconTrailing={false}
            override={<Calendar29 className="instance-node-4" />}
            size="md"
            stateProp="focused"
            text={
              state.state === "placeholder" && state.type === "single-date"
                ? "Select date"
                : state.state === "active" && state.type === "dual-dates"
                  ? "Jan 12, 2024 – Jan 18, 2024"
                  : state.state === "active" && state.type === "single-date"
                    ? "Jan 12, 2024"
                    : "Select dates"
            }
            textClassName={`${state.state === "placeholder" && "class-35"}`}
          />
          <div
            className={`date-picker-menu ${state.breakpoint} ${state.type} ${state.state}`}
          >
            {state.type === "dual-dates" && state.breakpoint === "desktop" && (
              <>
                <div className="leading-content">
                  <div className="date-picker-list">
                    <div className="text-9">Today</div>
                  </div>

                  <div className="div-wrapper">
                    <div className="text-9">Yesterday</div>
                  </div>

                  <div className="date-picker-list-2">
                    <div className="text-9">This week</div>
                  </div>

                  <div className="date-picker-list-3">
                    <div className="text-10">Last week</div>
                  </div>

                  <div className="date-picker-list-4">
                    <div className="text-9">This month</div>
                  </div>

                  <div className="date-picker-list-5">
                    <div className="text-9">Last month</div>
                  </div>

                  <div className="date-picker-list-6">
                    <div className="text-9">This year</div>
                  </div>

                  <div className="date-picker-list-7">
                    <div className="text-9">Last year</div>
                  </div>

                  <div className="date-picker-list-8">
                    <div className="text-9">All time</div>
                  </div>
                </div>

                <div className="trailing-content">
                  <div className="date-pickers">
                    <div className="left-picker">
                      <div className="calendar-wrapper">
                        <div className="calendar">
                          <div className="month">
                            <ButtonsButton
                              className="buttons-button-instance"
                              hierarchy="tertiary-gray"
                              icon="only"
                              size="sm"
                              stateProp="default"
                            />
                            <div className="text-11">January 2024</div>

                            <ButtonsButton
                              className="buttons-button-instance"
                              hierarchy="tertiary-gray"
                              icon="only"
                              icon1={<ChevronRightWrapper />}
                              size="sm"
                              stateProp="default"
                            />
                          </div>

                          <div className="dates">
                            <div className="calendar-cell">
                              <div className="number">Mo</div>
                            </div>

                            <div className="number-wrapper">
                              <div className="number">Tu</div>
                            </div>

                            <div className="calendar-cell-2">
                              <div className="number">We</div>
                            </div>

                            <div className="calendar-cell-3">
                              <div className="number">Th</div>
                            </div>

                            <div className="calendar-cell-4">
                              <div className="number">Fr</div>
                            </div>

                            <div className="calendar-cell-5">
                              <div className="number">Sa</div>
                            </div>

                            <div className="calendar-cell-6">
                              <div className="number">Su</div>
                            </div>

                            <div className="calendar-cell-7">
                              <div className="number-2">1</div>

                              <div className="dot-2" />
                            </div>

                            <div className="calendar-cell-8">
                              <div className="number-2">2</div>
                            </div>

                            <div className="calendar-cell-9">
                              <div className="number-2">3</div>
                            </div>

                            <div className="calendar-cell-10">
                              <div className="number-2">4</div>
                            </div>

                            <div className="calendar-cell-11">
                              <div className="number-2">5</div>
                            </div>

                            <div className="calendar-cell-12">
                              <div className="number-2">6</div>
                            </div>

                            <div className="calendar-cell-13">
                              <div className="number-2">7</div>
                            </div>

                            <div className="calendar-cell-14">
                              <div className="number-2">8</div>
                            </div>

                            <div className="calendar-cell-15">
                              <div className="number-2">9</div>
                            </div>

                            <div className="calendar-cell-16">
                              <div className="number-2">10</div>
                            </div>

                            <div className="calendar-cell-17">
                              <div className="number-2">11</div>
                            </div>

                            <div className="calendar-cell-18">
                              {state.state === "active" && (
                                <img
                                  className="connector-right"
                                  alt="Connector right"
                                  src="/img/connector-right.svg"
                                />
                              )}

                              <div className="number-3">12</div>
                            </div>

                            <div className="calendar-cell-19">
                              {state.state === "active" && (
                                <>
                                  <img
                                    className="img"
                                    alt="Connector right"
                                    src="/img/connector-right.svg"
                                  />

                                  <img
                                    className="connector-left"
                                    alt="Connector left"
                                    src="/img/connector-left.svg"
                                  />
                                </>
                              )}

                              <div className="number-4">13</div>
                            </div>

                            <div className="calendar-cell-20">
                              {state.state === "active" && (
                                <img
                                  className="connector-left-2"
                                  alt="Connector left"
                                  src="/img/connector-left.svg"
                                />
                              )}

                              <div className="number-5">14</div>
                            </div>

                            <div className="calendar-cell-21">
                              {state.state === "active" && (
                                <img
                                  className="connector-right-2"
                                  alt="Connector right"
                                  src="/img/connector-right.svg"
                                />
                              )}

                              <div className="number-6">15</div>
                            </div>

                            <div className="calendar-cell-22">
                              {state.state === "active" && (
                                <>
                                  <img
                                    className="connector-right-3"
                                    alt="Connector right"
                                    src="/img/connector-right.svg"
                                  />

                                  <img
                                    className="img-2"
                                    alt="Connector left"
                                    src="/img/connector-left.svg"
                                  />
                                </>
                              )}

                              <div className="number-7">16</div>
                            </div>

                            <div className="calendar-cell-23">
                              {state.state === "active" && (
                                <>
                                  <img
                                    className="img-2"
                                    alt="Connector right"
                                    src="/img/connector-right.svg"
                                  />

                                  <img
                                    className="connector-left-3"
                                    alt="Connector left"
                                    src="/img/connector-left.svg"
                                  />
                                </>
                              )}

                              <div className="number-8">17</div>
                            </div>

                            <div className="calendar-cell-24">
                              {state.state === "active" && (
                                <img
                                  className="connector-left-4"
                                  alt="Connector left"
                                  src="/img/connector-left.svg"
                                />
                              )}

                              <div className="number-9">18</div>
                            </div>

                            <div className="calendar-cell-25">
                              <div className="number-2">19</div>
                            </div>

                            <div className="calendar-cell-26">
                              <div className="number-2">20</div>
                            </div>

                            <div className="calendar-cell-27">
                              <div className="number-2">21</div>
                            </div>

                            <div className="calendar-cell-28">
                              <div className="number-2">22</div>
                            </div>

                            <div className="calendar-cell-29">
                              <div className="number-2">23</div>
                            </div>

                            <div className="calendar-cell-30">
                              <div className="number-2">24</div>
                            </div>

                            <div className="calendar-cell-31">
                              <div className="number-2">25</div>
                            </div>

                            <div className="calendar-cell-32">
                              <div className="number-2">26</div>
                            </div>

                            <div className="calendar-cell-33">
                              <div className="number-2">27</div>
                            </div>

                            <div className="overlap-wrapper">
                              <div className="overlap">
                                <div className="number-10">28</div>

                                <div className="cursor">
                                  <div className="overlap-group">
                                    <img
                                      className="lines"
                                      alt="Lines"
                                      src="/img/lines-14.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="calendar-cell-34">
                              <div className="number-2">29</div>
                            </div>

                            <div className="calendar-cell-35">
                              <div className="number">30</div>

                              <div className="dot-2" />
                            </div>

                            <div className="calendar-cell-36">
                              <div className="number-2">31</div>
                            </div>

                            <div className="calendar-cell-37">
                              <div className="text-wrapper-2">1</div>
                            </div>

                            <div className="calendar-cell-38">
                              <div className="text-wrapper-2">2</div>
                            </div>

                            <div className="calendar-cell-39">
                              <div className="text-wrapper-2">3</div>
                            </div>

                            <div className="calendar-cell-40">
                              <div className="text-wrapper-2">4</div>

                              <div className="dot-3" />
                            </div>

                            <div className="calendar-cell-41">
                              <div className="text-wrapper-2">5</div>
                            </div>

                            <div className="calendar-cell-42">
                              <div className="text-wrapper-2">6</div>
                            </div>

                            <div className="calendar-cell-43">
                              <div className="text-wrapper-2">7</div>
                            </div>

                            <div className="calendar-cell-44">
                              <div className="text-wrapper-2">8</div>
                            </div>

                            <div className="calendar-cell-45">
                              <div className="text-wrapper-2">9</div>
                            </div>

                            <div className="calendar-cell-46">
                              <div className="text-wrapper-2">10</div>
                            </div>

                            <div className="calendar-cell-47">
                              <div className="text-wrapper-2">11</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="right-picker">
                      <div className="calendar-wrapper">
                        <div className="calendar">
                          <div className="month">
                            <ButtonsButton
                              className="buttons-button-instance"
                              hierarchy="tertiary-gray"
                              icon="only"
                              size="sm"
                              stateProp="default"
                            />
                            <div className="text-11">February 2024</div>

                            <ButtonsButton
                              className="buttons-button-instance"
                              hierarchy="tertiary-gray"
                              icon="only"
                              icon1={
                                <ChevronRight44 className="instance-node-4" />
                              }
                              size="sm"
                              stateProp="default"
                            />
                          </div>

                          <div className="dates">
                            <div className="calendar-cell-48">
                              <div className="number">Mo</div>
                            </div>

                            <div className="calendar-cell-49">
                              <div className="number">Tu</div>
                            </div>

                            <div className="calendar-cell-50">
                              <div className="number">We</div>
                            </div>

                            <div className="calendar-cell-51">
                              <div className="number">Th</div>
                            </div>

                            <div className="calendar-cell-52">
                              <div className="number">Fr</div>
                            </div>

                            <div className="calendar-cell-53">
                              <div className="number">Sa</div>
                            </div>

                            <div className="calendar-cell-54">
                              <div className="number">Su</div>
                            </div>

                            <div className="calendar-cell-55">
                              <div className="text-wrapper-2">29</div>
                            </div>

                            <div className="calendar-cell-56">
                              <div className="text-wrapper-2">30</div>
                            </div>

                            <div className="calendar-cell-57">
                              <div className="text-wrapper-2">31</div>
                            </div>

                            <div className="calendar-cell-58">
                              <div className="number-2">1</div>
                            </div>

                            <div className="calendar-cell-59">
                              <div className="number-2">2</div>
                            </div>

                            <div className="calendar-cell-60">
                              <div className="number-2">3</div>
                            </div>

                            <div className="calendar-cell-61">
                              <div className="number-2">4</div>

                              <div className="dot-2" />
                            </div>

                            <div className="calendar-cell-62">
                              <div className="number-2">5</div>
                            </div>

                            <div className="calendar-cell-63">
                              <div className="number-2">6</div>
                            </div>

                            <div className="calendar-cell-64">
                              <div className="number-2">7</div>
                            </div>

                            <div className="calendar-cell-65">
                              <div className="number-2">8</div>
                            </div>

                            <div className="calendar-cell-66">
                              <div className="number-2">9</div>
                            </div>

                            <div className="calendar-cell-67">
                              <div className="number-2">10</div>
                            </div>

                            <div className="calendar-cell-68">
                              <div className="number-2">11</div>
                            </div>

                            <div className="calendar-cell-69">
                              <div className="number-2">12</div>
                            </div>

                            <div className="calendar-cell-70">
                              <div className="number-2">13</div>
                            </div>

                            <div className="calendar-cell-71">
                              <div className="number-2">14</div>

                              <div className="dot-2" />
                            </div>

                            <div className="calendar-cell-72">
                              <div className="number-2">15</div>
                            </div>

                            <div className="calendar-cell-73">
                              <div className="number-2">16</div>
                            </div>

                            <div className="calendar-cell-74">
                              <div className="number-2">17</div>
                            </div>

                            <div className="calendar-cell-75">
                              <div className="number-2">18</div>
                            </div>

                            <div className="calendar-cell-76">
                              <div className="number-2">19</div>
                            </div>

                            <div className="calendar-cell-77">
                              <div className="number-2">20</div>
                            </div>

                            <div className="calendar-cell-78">
                              <div className="number-2">21</div>
                            </div>

                            <div className="calendar-cell-79">
                              <div className="number-2">22</div>
                            </div>

                            <div className="calendar-cell-80">
                              <div className="number-2">23</div>
                            </div>

                            <div className="calendar-cell-81">
                              <div className="number-2">24</div>
                            </div>

                            <div className="calendar-cell-82">
                              <div className="number-2">25</div>
                            </div>

                            <div className="calendar-cell-83">
                              <div className="number-2">26</div>
                            </div>

                            <div className="calendar-cell-84">
                              <div className="number-2">27</div>
                            </div>

                            <div className="calendar-cell-85">
                              <div className="number-2">28</div>
                            </div>

                            <div className="calendar-cell-86">
                              <div className="number-2">29</div>
                            </div>

                            <div className="calendar-cell-87">
                              <div className="text-wrapper-2">1</div>
                            </div>

                            <div className="calendar-cell-88">
                              <div className="text-wrapper-2">2</div>
                            </div>

                            <div className="calendar-cell-89">
                              <div className="text-wrapper-2">3</div>
                            </div>

                            <div className="calendar-cell-90">
                              <div className="text-wrapper-2">4</div>
                            </div>

                            <div className="calendar-cell-91">
                              <div className="text-wrapper-2">5</div>
                            </div>

                            <div className="calendar-cell-92">
                              <div className="text-wrapper-2">6</div>
                            </div>

                            <div className="calendar-cell-93">
                              <div className="text-wrapper-2">7</div>
                            </div>

                            <div className="calendar-cell-94">
                              <div className="text-wrapper-2">8</div>

                              <div className="dot-3" />
                            </div>

                            <div className="calendar-cell-95">
                              <div className="text-wrapper-2">9</div>
                            </div>

                            <div className="calendar-cell-96">
                              <div className="text-wrapper-2">10</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-panel">
                    <div className="input-fields">
                      <InputField
                        className="input-field-instance"
                        destructive={false}
                        helpIcon={false}
                        hintText={false}
                        label={false}
                        size="sm"
                        stateProp={
                          state.state === "active" ? "filled" : "placeholder"
                        }
                        text={
                          state.state === "active"
                            ? "Jan 12, 2024"
                            : "Select date"
                        }
                        type="default"
                      />
                      <div className="text-12">–</div>

                      <InputField
                        className="input-field-instance"
                        destructive={false}
                        helpIcon={false}
                        hintText={false}
                        label={false}
                        size="sm"
                        stateProp={
                          state.state === "active" ? "filled" : "placeholder"
                        }
                        text={
                          state.state === "active"
                            ? "Jan 18, 2024"
                            : "Select date"
                        }
                        type="default"
                      />
                    </div>

                    <div className="actions-2">
                      <ButtonsButton
                        className="buttons-button-instance"
                        hierarchy="secondary-gray"
                        icon="default"
                        iconLeading={false}
                        iconTrailing={false}
                        size="md"
                        stateProp="default"
                        text="Cancel"
                      />
                      <img
                        className="buttons-button-2"
                        alt="Buttons button"
                        src={
                          state.state === "active"
                            ? "/img/buttons-button-5.svg"
                            : "/img/buttons-button-1.svg"
                        }
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {(state.breakpoint === "mobile" ||
              (state.breakpoint === "desktop" &&
                state.type === "single-date")) && (
              <div className="date-picker">
                <div className="calendar-wrapper">
                  <div className="calendar">
                    <div className="month">
                      <ButtonsButton
                        className="buttons-button-instance"
                        hierarchy="tertiary-gray"
                        icon="only"
                        size="sm"
                        stateProp="default"
                      />
                      <div className="text-11">January 2024</div>

                      <ButtonsButton
                        className="buttons-button-instance"
                        hierarchy="tertiary-gray"
                        icon="only"
                        icon1={<ChevronRight44 className="instance-node-4" />}
                        size="sm"
                        stateProp="default"
                      />
                    </div>

                    {state.type === "dual-dates" && (
                      <>
                        <div className="input-fields-2">
                          <InputField
                            className="input-field-2"
                            destructive={false}
                            helpIcon={false}
                            hintText={false}
                            label={false}
                            size="sm"
                            stateProp={
                              state.state === "active"
                                ? "filled"
                                : "placeholder"
                            }
                            text={
                              state.state === "active"
                                ? "Jan 12, 2024"
                                : "Select date"
                            }
                            type="default"
                          />
                          <div className="text-12">–</div>

                          <InputField
                            className="input-field-2"
                            destructive={false}
                            helpIcon={false}
                            hintText={false}
                            label={false}
                            size="sm"
                            stateProp={
                              state.state === "active"
                                ? "filled"
                                : "placeholder"
                            }
                            text={
                              state.state === "active"
                                ? "Jan 18, 2024"
                                : "Select date"
                            }
                            type="default"
                          />
                        </div>

                        <div className="actions-3">
                          <ButtonsButton
                            className="buttons-button-instance"
                            hierarchy="link-color"
                            icon="default"
                            iconLeading={false}
                            iconTrailing={false}
                            size="sm"
                            stateProp="default"
                            text="Last week"
                          />
                          <ButtonsButton
                            className="buttons-button-instance"
                            hierarchy="link-color"
                            icon="default"
                            iconLeading={false}
                            iconTrailing={false}
                            size="sm"
                            stateProp="default"
                            text="Last month"
                          />
                          <ButtonsButton
                            className="buttons-button-instance"
                            hierarchy="link-color"
                            icon="default"
                            iconLeading={false}
                            iconTrailing={false}
                            size="sm"
                            stateProp="default"
                            text="Last year"
                          />
                        </div>
                      </>
                    )}

                    {state.type === "single-date" && (
                      <div className="actions-4">
                        <InputField
                          className="input-field-2"
                          destructive={false}
                          helpIcon={false}
                          hintText={false}
                          label={false}
                          size="sm"
                          stateProp={
                            state.state === "active" ? "filled" : "placeholder"
                          }
                          text={
                            state.state === "active"
                              ? "Jan 12, 2024"
                              : "Select date"
                          }
                          type="default"
                        />
                        <ButtonsButton
                          className="buttons-button-instance"
                          hierarchy="secondary-gray"
                          icon="default"
                          iconLeading={false}
                          iconTrailing={false}
                          size="md"
                          stateProp="default"
                          text="Today"
                        />
                      </div>
                    )}

                    <div className="dates">
                      <div className="calendar-cell-97">
                        <div className="number">Mo</div>
                      </div>

                      <div className="calendar-cell-98">
                        <div className="number">Tu</div>
                      </div>

                      <div className="calendar-cell-99">
                        <div className="number">We</div>
                      </div>

                      <div className="calendar-cell-100">
                        <div className="number">Th</div>
                      </div>

                      <div className="calendar-cell-101">
                        <div className="number">Fr</div>
                      </div>

                      <div className="calendar-cell-102">
                        <div className="number">Sa</div>
                      </div>

                      <div className="calendar-cell-103">
                        <div className="number">Su</div>
                      </div>

                      <div className="calendar-cell-104">
                        <div className="number-2">1</div>

                        <div className="dot-2" />
                      </div>

                      <div className="calendar-cell-105">
                        <div className="number-2">2</div>
                      </div>

                      <div className="calendar-cell-106">
                        <div className="number-2">3</div>
                      </div>

                      <div className="calendar-cell-107">
                        <div className="number-2">4</div>
                      </div>

                      <div className="calendar-cell-108">
                        <div className="number-2">5</div>
                      </div>

                      <div className="calendar-cell-109">
                        <div className="number-2">6</div>
                      </div>

                      <div className="calendar-cell-110">
                        <div className="number-2">7</div>
                      </div>

                      <div className="calendar-cell-111">
                        <div className="number-2">8</div>
                      </div>

                      <div className="calendar-cell-112">
                        <div className="number-2">9</div>
                      </div>

                      <div className="calendar-cell-113">
                        <div className="number-2">10</div>
                      </div>

                      <div className="calendar-cell-114">
                        <div className="number-2">11</div>
                      </div>

                      <div className="calendar-cell-115">
                        <div className="number-11">
                          {(state.type === "single-date" ||
                            (state.state === "placeholder" &&
                              state.type === "dual-dates")) && <>12</>}

                          {state.state === "active" &&
                            state.type === "dual-dates" && (
                              <>
                                <img
                                  className="connector-right-4"
                                  alt="Connector right"
                                  src="/img/connector-right-5.svg"
                                />

                                <div className="number-12">12</div>
                              </>
                            )}
                        </div>
                      </div>

                      <div className="calendar-cell-116">
                        <div className="number-30">
                          {(state.type === "single-date" ||
                            (state.state === "placeholder" &&
                              state.type === "dual-dates")) && <>13</>}

                          {state.state === "active" &&
                            state.type === "dual-dates" && (
                              <>
                                <img
                                  className="connector-right-5"
                                  alt="Connector right"
                                  src="/img/connector-right-5.svg"
                                />

                                <img
                                  className="connector-left-5"
                                  alt="Connector left"
                                  src="/img/connector-left-5.svg"
                                />

                                <div className="number-13">13</div>
                              </>
                            )}
                        </div>
                      </div>

                      <div className="calendar-cell-117">
                        <div className="number-30">
                          {(state.type === "single-date" ||
                            (state.state === "placeholder" &&
                              state.type === "dual-dates")) && <>14</>}

                          {state.state === "active" &&
                            state.type === "dual-dates" && (
                              <>
                                <img
                                  className="connector-left-5"
                                  alt="Connector left"
                                  src="/img/connector-left-5.svg"
                                />

                                <div className="number-13">14</div>
                              </>
                            )}
                        </div>
                      </div>

                      <div className="calendar-cell-118">
                        {state.state === "active" &&
                          state.type === "dual-dates" && (
                            <img
                              className="connector-right-6"
                              alt="Connector right"
                              src="/img/connector-right.svg"
                            />
                          )}

                        <div className="number-14">15</div>
                      </div>

                      <div className="calendar-cell-119">
                        {(state.type === "single-date" ||
                          (state.state === "placeholder" &&
                            state.type === "dual-dates")) && (
                          <div className="number-2">16</div>
                        )}

                        {state.state === "active" &&
                          state.type === "dual-dates" && (
                            <>
                              <div className="overlap-2">
                                <img
                                  className="connector-right-7"
                                  alt="Connector right"
                                  src="/img/connector-right-8.svg"
                                />

                                <div className="number-15">16</div>
                              </div>

                              <img
                                className="connector-left-6"
                                alt="Connector left"
                                src="/img/connector-left.svg"
                              />
                            </>
                          )}
                      </div>

                      <div className="calendar-cell-120">
                        <div className="number-30">
                          {(state.type === "single-date" ||
                            (state.state === "placeholder" &&
                              state.type === "dual-dates")) && <>17</>}

                          {state.state === "active" &&
                            state.type === "dual-dates" && (
                              <>
                                <img
                                  className="connector-right-8"
                                  alt="Connector right"
                                  src="/img/connector-right-5.svg"
                                />

                                <img
                                  className="connector-left-7"
                                  alt="Connector left"
                                  src="/img/connector-left-8.svg"
                                />

                                <div className="number-16">17</div>
                              </>
                            )}
                        </div>
                      </div>

                      <div className="calendar-cell-121">
                        <div className="number-30">
                          {(state.type === "single-date" ||
                            (state.state === "placeholder" &&
                              state.type === "dual-dates")) && <>18</>}

                          {state.state === "active" &&
                            state.type === "dual-dates" && (
                              <>
                                <img
                                  className="connector-left-5"
                                  alt="Connector left"
                                  src="/img/connector-left-5.svg"
                                />

                                <div className="number-17">18</div>
                              </>
                            )}
                        </div>
                      </div>

                      <div className="calendar-cell-122">
                        <div className="number-2">19</div>
                      </div>

                      <div className="calendar-cell-123">
                        <div className="number-2">20</div>
                      </div>

                      <div className="calendar-cell-124">
                        <div className="number-2">21</div>
                      </div>

                      <div className="calendar-cell-125">
                        <div className="number-2">22</div>
                      </div>

                      <div className="calendar-cell-126">
                        <div className="number-2">23</div>
                      </div>

                      <div className="calendar-cell-127">
                        <div className="number-2">24</div>
                      </div>

                      <div className="calendar-cell-128">
                        <div className="number-2">25</div>
                      </div>

                      <div className="calendar-cell-129">
                        <div className="number-2">26</div>
                      </div>

                      <div className="calendar-cell-130">
                        <div className="number-2">27</div>
                      </div>

                      <div className="overlap-group-wrapper">
                        <div className="overlap-3">
                          {state.breakpoint === "desktop" && (
                            <>
                              <div className="number-10">28</div>

                              <div className="cursor">
                                <div className="lines-wrapper">
                                  <img
                                    className="lines-2"
                                    alt="Lines"
                                    src="/img/lines.svg"
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {state.breakpoint === "mobile" && <>28</>}
                        </div>
                      </div>

                      <div className="calendar-cell-131">
                        <div className="number-2">29</div>
                      </div>

                      <div className="calendar-cell-35">
                        <div className="number">30</div>

                        <div className="dot-2" />
                      </div>

                      <div className="calendar-cell-132">
                        <div className="number-2">31</div>
                      </div>

                      <div className="calendar-cell-133">
                        <div className="text-wrapper-2">1</div>
                      </div>

                      <div className="calendar-cell-134">
                        <div className="text-wrapper-2">2</div>
                      </div>

                      <div className="calendar-cell-135">
                        <div className="text-wrapper-2">3</div>
                      </div>

                      <div className="calendar-cell-136">
                        <div className="text-wrapper-2">4</div>

                        <div className="dot-3" />
                      </div>

                      <div className="calendar-cell-137">
                        <div className="text-wrapper-2">5</div>
                      </div>

                      <div className="calendar-cell-138">
                        <div className="text-wrapper-2">6</div>
                      </div>

                      <div className="calendar-cell-139">
                        <div className="text-wrapper-2">7</div>
                      </div>

                      <div className="calendar-cell-140">
                        <div className="text-wrapper-2">8</div>
                      </div>

                      <div className="calendar-cell-141">
                        <div className="text-wrapper-2">9</div>
                      </div>

                      <div className="calendar-cell-142">
                        <div className="text-wrapper-2">10</div>
                      </div>

                      <div className="calendar-cell-143">
                        <div className="text-wrapper-2">11</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="actions-wrapper">
                  <div className="actions-5">
                    <ButtonsButton
                      className="buttons-button-3"
                      hierarchy="secondary-gray"
                      icon="default"
                      iconLeading={false}
                      iconTrailing={false}
                      size="md"
                      stateProp="default"
                      text="Cancel"
                    />
                    <img
                      className="buttons-button-4"
                      alt="Buttons button"
                      src={
                        state.state === "placeholder" &&
                        state.type === "dual-dates"
                          ? "/img/buttons-button-2.svg"
                          : state.state === "placeholder" &&
                              state.breakpoint === "desktop"
                            ? "/img/buttons-button-3.svg"
                            : state.state === "active" &&
                                state.type === "dual-dates"
                              ? "/img/buttons-button-6.svg"
                              : state.state === "active" &&
                                  state.breakpoint === "desktop"
                                ? "/img/buttons-button-7.svg"
                                : state.state === "active" &&
                                    state.type === "single-date" &&
                                    state.breakpoint === "mobile"
                                  ? "/img/buttons-button.svg"
                                  : "/img/buttons-button-4.svg"
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {!state.opened && (
        <ButtonsButton
          className={buttonsButtonSizeMdHierarchyClassName}
          hierarchy="secondary-gray"
          icon="default"
          iconTrailing={false}
          override={buttonsButtonIcon}
          size="md"
          stateProp="default"
          text={buttonsButtonText}
          textClassName={buttonsButtonTextClassName}
          textPaddingClassName={buttonsButtonTextPaddingClassName}
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.breakpoint === "desktop" &&
    state.opened === true &&
    state.state === "placeholder" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: false,

          state: "placeholder",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === false &&
    state.state === "placeholder" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: true,

          state: "placeholder",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === false &&
    state.state === "placeholder" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: true,

          state: "placeholder",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === true &&
    state.state === "placeholder" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: false,

          state: "placeholder",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === false &&
    state.state === "placeholder" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: true,

          state: "placeholder",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === true &&
    state.state === "placeholder" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: false,

          state: "placeholder",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === false &&
    state.state === "placeholder" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: true,

          state: "placeholder",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === true &&
    state.state === "active" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: false,

          state: "active",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === false &&
    state.state === "active" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: true,

          state: "active",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === true &&
    state.state === "active" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: false,

          state: "active",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === false &&
    state.state === "active" &&
    state.type === "dual-dates"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: true,

          state: "active",

          type: "dual-dates",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === true &&
    state.state === "active" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: false,

          state: "active",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "desktop" &&
    state.opened === false &&
    state.state === "active" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "desktop",

          opened: true,

          state: "active",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === true &&
    state.state === "active" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: false,

          state: "active",

          type: "single-date",
        };
    }
  }

  if (
    state.breakpoint === "mobile" &&
    state.opened === false &&
    state.state === "active" &&
    state.type === "single-date"
  ) {
    switch (action) {
      case "click":
        return {
          breakpoint: "mobile",

          opened: true,

          state: "active",

          type: "single-date",
        };
    }
  }

  return state;
}

DatePickerDropdown.propTypes = {
  opened: PropTypes.bool,
  type: PropTypes.oneOf(["dual-dates", "single-date"]),
  stateProp: PropTypes.oneOf(["placeholder", "active"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  buttonsButtonText: PropTypes.string,
};
