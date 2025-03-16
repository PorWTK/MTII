/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowUp12 } from "../../icons/ArrowUp12";
import { Copy01_13 } from "../../icons/Copy01_13";
import { DownloadCloud02_1 } from "../../icons/DownloadCloud02_1";
import { Edit01 } from "../../icons/Edit01";
import { Trash01_4 } from "../../icons/Trash01_4";
import { Avatar } from "../Avatar";
import { AvatarGroup } from "../AvatarGroup";
import { Badge } from "../Badge";
import { ButtonsButton } from "../ButtonsButton";
import { Checkbox } from "../Checkbox";
import { Dropdown } from "../Dropdown";
import { ProgressBar } from "../ProgressBar";
import { StarIcon } from "../StarIcon";
import "./style.css";

export const TableCell = ({
  style,
  supportingText,
  stateProp,
  className,
  text = "Olivia Rhye",
  hasText = true,
  textAndSupportingClassName,
  badgeColor = "success",
  badgeIcon = "false",
  override,
  badgeText = "Active",
  badgeSizeSmTypePillClassName,
  textClassName,
  supportingTextClassName,
  text1 = "olivia@untitledui.com",
  textAndSupportingClassNameOverride,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "lead-text",

    supportingText: supportingText ?? false,

    state: stateProp || "default",
  });

  return (
    <div
      className={`table-cell style-${state.style} state-5-${state.state} supporting-text-${state.supportingText} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["badges-multiple", "lead-text", "text", "toggle-only"].includes(
        state.style,
      ) && (
        <div
          className={`text-and-supporting-2 ${textAndSupportingClassNameOverride}`}
        >
          {state.supportingText && (
            <>
              <div className="text-13">{text}</div>

              <div className="supporting-text-2">{text1}</div>
            </>
          )}

          {state.style === "badges-multiple" && (
            <>
              <Badge
                className="instance-node-5"
                color="brand"
                icon="false"
                size="sm"
                text="Label"
                type="pill-color"
              />
              <Badge
                className="instance-node-5"
                color="blue"
                icon="false"
                size="sm"
                text="Label"
                type="pill-color"
              />
              <Badge
                className="instance-node-5"
                color="indigo"
                icon="false"
                size="sm"
                text="Label"
                type="pill-color"
              />
              <Badge
                className="instance-node-5"
                color="gray"
                icon="false"
                size="sm"
                text="+4"
                type="pill-color"
              />
            </>
          )}

          {!state.supportingText &&
            ["lead-text", "text"].includes(state.style) && <>{text}</>}

          {state.style === "toggle-only" && (
            <div className="toggle-base">
              <div className="button" />
            </div>
          )}
        </div>
      )}

      {(state.style === "badge" ||
        (!state.supportingText && state.style === "trend-negative") ||
        (!state.supportingText && state.style === "trend-positive")) && (
        <Badge
          className={badgeSizeSmTypePillClassName}
          color={badgeColor}
          icon={badgeIcon}
          override={override}
          size="sm"
          text={badgeText}
          type="pill-color"
        />
      )}

      {(state.style === "action-buttons" ||
        (state.style === "avatar-group" && state.supportingText) ||
        state.style === "avatar" ||
        state.style === "lead-avatar" ||
        state.style === "lead-checkbox" ||
        state.style === "lead-icon" ||
        state.style === "lead-payment-method" ||
        state.style === "lead-radio-button" ||
        state.style === "lead-toggle" ||
        state.style === "payment-method" ||
        (state.style === "trend-negative" && state.supportingText) ||
        (state.style === "trend-positive" && state.supportingText)) && (
        <>
          <>
            {hasText && (
              <>
                <>
                  {state.style === "action-buttons" && (
                    <ButtonsButton
                      className="instance-node-5"
                      hierarchy="link-gray"
                      icon="default"
                      iconLeading={false}
                      iconTrailing={false}
                      size="sm"
                      stateProp="default"
                      text="Delete"
                    />
                  )}

                  {["lead-checkbox", "lead-radio-button"].includes(
                    state.style,
                  ) && (
                    <Checkbox
                      checked={false}
                      className="instance-node-5"
                      indeterminate={false}
                      size="md"
                      state="default"
                      text={false}
                      type={
                        state.style === "lead-radio-button"
                          ? "radio"
                          : "checkbox"
                      }
                    />
                  )}

                  {["avatar", "lead-avatar"].includes(state.style) && (
                    <Avatar
                      className="avatar-3"
                      placeholder={false}
                      size={state.style === "avatar" ? "sm" : "md"}
                      statusIcon="false"
                      text={false}
                    />
                  )}

                  {(state.style === "avatar-group" ||
                    state.style === "lead-icon" ||
                    state.style === "lead-payment-method" ||
                    state.style === "lead-toggle" ||
                    state.style === "payment-method" ||
                    state.style === "trend-negative" ||
                    state.style === "trend-positive") && (
                    <div className="payment-method-icon">
                      {["lead-payment-method", "payment-method"].includes(
                        state.style,
                      ) && (
                        <img
                          className="visa-logo"
                          alt="Visa logo"
                          src="/img/visa-logo.svg"
                        />
                      )}

                      {["lead-icon", "lead-toggle"].includes(state.style) && (
                        <div className="overlap-group-2">
                          {state.style === "lead-icon" && (
                            <>
                              <img
                                className="page"
                                alt="Page"
                                src="/img/page.svg"
                              />

                              <div className="file-type-wrap">
                                <div className="file-type">PDF</div>
                              </div>
                            </>
                          )}

                          {state.style === "lead-toggle" && (
                            <div className="button" />
                          )}
                        </div>
                      )}

                      {state.style === "avatar-group" && <>10 users</>}

                      {["trend-negative", "trend-positive"].includes(
                        state.style,
                      ) && <>$1,800</>}
                    </div>
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {state.style === "avatar-group" && (
        <AvatarGroup
          addMoreButton={false}
          className="instance-node-5"
          size="xs"
          visible={false}
          visible1={false}
          visible2={false}
          visible3={false}
          visible4={false}
        />
      )}

      {(state.style === "avatar" ||
        state.style === "lead-avatar" ||
        state.style === "lead-checkbox" ||
        state.style === "lead-icon" ||
        state.style === "lead-payment-method" ||
        state.style === "lead-radio-button" ||
        state.style === "lead-toggle" ||
        state.style === "payment-method") && (
        <div className={`text-and-supporting-3 ${textAndSupportingClassName}`}>
          {state.supportingText && (
            <>
              <div className={`text-14 ${textClassName}`}>
                {[
                  "avatar",
                  "lead-avatar",
                  "lead-checkbox",
                  "lead-radio-button",
                  "lead-toggle",
                ].includes(state.style) && <>{text}</>}

                {["lead-payment-method", "payment-method"].includes(
                  state.style,
                ) && <>Visa ending in 1234</>}

                {state.style === "lead-icon" && <>Tech requirements.pdf</>}
              </div>

              <div className={`supporting-text-2 ${supportingTextClassName}`}>
                {[
                  "avatar",
                  "lead-avatar",
                  "lead-checkbox",
                  "lead-radio-button",
                  "lead-toggle",
                ].includes(state.style) && <>{text1}</>}

                {["lead-payment-method", "payment-method"].includes(
                  state.style,
                ) && <>Expiry 06/2024</>}

                {state.style === "lead-icon" && <>200 KB</>}
              </div>
            </>
          )}

          {!state.supportingText && state.style === "lead-icon" && (
            <>Tech requirements.pdf</>
          )}

          {!state.supportingText &&
            ["lead-payment-method", "payment-method"].includes(state.style) && (
              <>Visa ending in 1234</>
            )}

          {((state.style === "avatar" && !state.supportingText) ||
            (state.style === "lead-avatar" && !state.supportingText) ||
            (state.style === "lead-checkbox" && !state.supportingText) ||
            (state.style === "lead-radio-button" && !state.supportingText) ||
            (state.style === "lead-toggle" && !state.supportingText)) && (
            <>{text}</>
          )}
        </div>
      )}

      {(state.style === "checkbox-only" ||
        state.style === "lead-avatar-checkbox" ||
        state.style === "lead-avatar-radio-button" ||
        state.style === "lead-icon-checkbox" ||
        state.style === "lead-icon-radio-button" ||
        state.style === "lead-payment-method-checkbox" ||
        state.style === "lead-payment-method-radio-button" ||
        state.style === "radio-button-only") && (
        <Checkbox
          checked={false}
          className="instance-node-5"
          indeterminate={false}
          size="md"
          state="default"
          text={false}
          type={
            [
              "lead-avatar-radio-button",
              "lead-icon-radio-button",
              "lead-payment-method-radio-button",
              "radio-button-only",
            ].includes(state.style)
              ? "radio"
              : "checkbox"
          }
        />
      )}

      {[
        "lead-avatar-toggle",
        "lead-icon-toggle",
        "lead-payment-method-toggle",
      ].includes(state.style) && (
        <div className="toggle">
          <div className="toggle-base">
            <div className="button" />
          </div>
        </div>
      )}

      {[
        "lead-avatar-checkbox",
        "lead-avatar-radio-button",
        "lead-avatar-toggle",
      ].includes(state.style) && (
        <Avatar
          className="avatar-4"
          placeholder={false}
          size="md"
          statusIcon="false"
          text={false}
        />
      )}

      {[
        "lead-icon-checkbox",
        "lead-icon-radio-button",
        "lead-icon-toggle",
        "lead-payment-method-checkbox",
        "lead-payment-method-radio-button",
        "lead-payment-method-toggle",
      ].includes(state.style) && (
        <div className="file-type-icon">
          {[
            "lead-icon-checkbox",
            "lead-icon-radio-button",
            "lead-icon-toggle",
          ].includes(state.style) && (
            <div className="overlap-group-3">
              <img className="page" alt="Page" src="/img/page.svg" />

              <div className="file-type-wrap">
                <div className="file-type">PDF</div>
              </div>
            </div>
          )}

          {[
            "lead-payment-method-checkbox",
            "lead-payment-method-radio-button",
            "lead-payment-method-toggle",
          ].includes(state.style) && (
            <img
              className="visa-logo"
              alt="Visa logo"
              src="/img/visa-logo-1.svg"
            />
          )}
        </div>
      )}

      {(state.style === "lead-avatar-checkbox" ||
        state.style === "lead-avatar-radio-button" ||
        state.style === "lead-avatar-toggle" ||
        state.style === "lead-icon-checkbox" ||
        state.style === "lead-icon-radio-button" ||
        state.style === "lead-icon-toggle" ||
        state.style === "lead-payment-method-checkbox" ||
        state.style === "lead-payment-method-radio-button" ||
        state.style === "lead-payment-method-toggle") && (
        <div className="text-and-supporting-4">
          {state.supportingText && (
            <>
              <div className="text-15">
                {[
                  "lead-icon-checkbox",
                  "lead-icon-radio-button",
                  "lead-icon-toggle",
                ].includes(state.style) && <>Tech requirements.pdf</>}

                {[
                  "lead-payment-method-checkbox",
                  "lead-payment-method-radio-button",
                  "lead-payment-method-toggle",
                ].includes(state.style) && <>Visa ending in 1234</>}

                {[
                  "lead-avatar-checkbox",
                  "lead-avatar-radio-button",
                  "lead-avatar-toggle",
                ].includes(state.style) && <>{text}</>}
              </div>

              <div className="supporting-text-2">
                {[
                  "lead-icon-checkbox",
                  "lead-icon-radio-button",
                  "lead-icon-toggle",
                ].includes(state.style) && <>200 KB</>}

                {[
                  "lead-payment-method-checkbox",
                  "lead-payment-method-radio-button",
                  "lead-payment-method-toggle",
                ].includes(state.style) && <>Expiry 06/2024</>}

                {[
                  "lead-avatar-checkbox",
                  "lead-avatar-radio-button",
                  "lead-avatar-toggle",
                ].includes(state.style) && <>{text1}</>}
              </div>
            </>
          )}

          {!state.supportingText &&
            [
              "lead-icon-checkbox",
              "lead-icon-radio-button",
              "lead-icon-toggle",
            ].includes(state.style) && <>Tech requirements.pdf</>}

          {!state.supportingText &&
            [
              "lead-payment-method-checkbox",
              "lead-payment-method-radio-button",
              "lead-payment-method-toggle",
            ].includes(state.style) && <>Visa ending in 1234</>}

          {!state.supportingText &&
            [
              "lead-avatar-checkbox",
              "lead-avatar-radio-button",
              "lead-avatar-toggle",
            ].includes(state.style) && <>{text}</>}
        </div>
      )}

      {state.supportingText &&
        ["trend-negative", "trend-positive"].includes(state.style) && (
          <Badge
            className="instance-node-5"
            color={state.style === "trend-negative" ? "error" : "success"}
            icon="icon-leading"
            override={
              state.style === "trend-negative" ? (
                <ArrowDown className="instance-node-6" />
              ) : (
                <ArrowUp12 className="instance-node-6" color="#17B26A" />
              )
            }
            size="sm"
            text="20%"
            type="pill-color"
          />
        )}

      {state.style === "progress-bar" && (
        <ProgressBar
          className="progress-bar-3"
          label="right"
          percentageClassName="progress-bar-instance"
          progress="sixty"
          progressClassName="progress-bar-2"
        />
      )}

      {state.style === "action-buttons" && (
        <ButtonsButton
          className="instance-node-5"
          hierarchy="link-color"
          icon="default"
          iconLeading={false}
          iconTrailing={false}
          size="sm"
          stateProp="default"
          text="Edit"
        />
      )}

      {state.style === "action-dropdown-icon" && (
        <Dropdown className="instance-node-5" open={false} type="icon" />
      )}

      {state.style === "action-icons" && (
        <>
          <ButtonsButton
            className="instance-node-5"
            hierarchy="tertiary-gray"
            icon="only"
            icon1={<Copy01_13 className="instance-node-7" color="#475467" />}
            size="sm"
            stateProp="default"
          />
          <ButtonsButton
            className="instance-node-5"
            hierarchy="tertiary-gray"
            icon="only"
            icon1={<DownloadCloud02_1 className="instance-node-7" />}
            size="sm"
            stateProp="default"
          />
          <ButtonsButton
            className="instance-node-5"
            hierarchy="tertiary-gray"
            icon="only"
            icon1={<Trash01_4 className="instance-node-7" />}
            size="sm"
            stateProp="default"
          />
          <ButtonsButton
            className="instance-node-5"
            hierarchy="tertiary-gray"
            icon="only"
            icon1={<Edit01 className="instance-node-7" />}
            size="sm"
            stateProp="default"
          />
        </>
      )}

      {state.style === "star-ratings" && (
        <>
          <StarIcon
            className="star-icon-instance"
            color="yellow"
            fill="one-hundred"
          />
          <StarIcon className="star-icon-2" color="yellow" fill="one-hundred" />
          <StarIcon className="star-icon-3" color="yellow" fill="one-hundred" />
          <StarIcon className="star-icon-4" color="yellow" fill="one-hundred" />
          <StarIcon color="yellow" fill="zero" starClassName="star-icon-5" />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

TableCell.propTypes = {
  style: PropTypes.oneOf([
    "lead-icon-toggle",
    "lead-text",
    "lead-payment-method-checkbox",
    "text",
    "lead-avatar",
    "lead-payment-method-radio-button",
    "lead-payment-method",
    "lead-icon-checkbox",
    "progress-bar",
    "lead-toggle",
    "lead-avatar-checkbox",
    "lead-payment-method-toggle",
    "action-icons",
    "badge",
    "lead-checkbox",
    "lead-avatar-radio-button",
    "lead-icon",
    "lead-radio-button",
    "trend-negative",
    "star-ratings",
    "avatar",
    "action-buttons",
    "avatar-group",
    "toggle-only",
    "badges-multiple",
    "trend-positive",
    "payment-method",
    "lead-icon-radio-button",
    "lead-avatar-toggle",
    "action-dropdown-icon",
    "checkbox-only",
    "radio-button-only",
  ]),
  supportingText: PropTypes.bool,
  stateProp: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  hasText: PropTypes.bool,
  badgeColor: PropTypes.string,
  badgeIcon: PropTypes.string,
  badgeText: PropTypes.string,
  text1: PropTypes.string,
};
