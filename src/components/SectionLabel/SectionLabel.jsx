/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonsButton } from "../ButtonsButton";
import { HelpIcon } from "../HelpIcon";
import "./style.css";

export const SectionLabel = ({
  helpIcon = true,
  supportingText = true,
  required = true,
  size,
  actions,
  className,
  text = "Team members",
}) => {
  return (
    <div className={`section-label actions-${actions} ${className}`}>
      {actions && (
        <div className="text-and-supporting-9">
          <div className={`text-wrapper-8 size-10-${size}`}>
            <div className="text-34">{text}</div>

            {required && <div className="asterisk-3">*</div>}

            {helpIcon && (
              <HelpIcon
                className={`${size === "md" ? "class-111" : "class-112"}`}
                open={false}
                supportingText={false}
                tooltip="top-no-arrow"
              />
            )}
          </div>

          {supportingText && (
            <p className={`supporting-text-6 size-12-${size}`}>
              Manage your team members here.
            </p>
          )}
        </div>
      )}

      <div className={`actions-8 actions-3-${actions} size-13-${size}`}>
        {actions && (
          <>
            <ButtonsButton
              className="buttons-button-7"
              hierarchy="link-gray"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="md"
              stateProp="default"
              text="Secondary"
            />
            <ButtonsButton
              className="buttons-button-7"
              hierarchy="link-color"
              icon="default"
              iconLeading={false}
              iconTrailing={false}
              size="md"
              stateProp="default"
              text="Primary"
            />
          </>
        )}

        {!actions && (
          <>
            <div className="text-35">{text}</div>

            <>{required && <div className="asterisk-4">*</div>}</>

            <>
              {helpIcon && (
                <HelpIcon
                  className={`${size === "md" ? "class-113" : "class-114"}`}
                  open={false}
                  supportingText={false}
                  tooltip="top-no-arrow"
                />
              )}
            </>
          </>
        )}
      </div>

      {!actions && (
        <>
          <>
            {supportingText && (
              <p className={`supporting-text-7 size-16-${size}`}>
                Manage your team members here.
              </p>
            )}
          </>
        </>
      )}
    </div>
  );
};

SectionLabel.propTypes = {
  helpIcon: PropTypes.bool,
  supportingText: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  actions: PropTypes.bool,
  text: PropTypes.string,
};
