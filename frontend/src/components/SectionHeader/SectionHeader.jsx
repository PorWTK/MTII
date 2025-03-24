import PropTypes from "prop-types";
import React from "react";
import { Badge } from "../Badge";
import { ButtonsButton } from "../ButtonsButton";
import { Dropdown } from "../Dropdown";
import { InputDropdown } from "../InputDropdown";
import "./style.css";

export const SectionHeader = ({
  actions = true,
  divider = true,
  supportingText = true,
  dropdownIcon = true,
  tabs,
  type,
  breakpoint,
  className,
  text = "Team members",
  img = "/img/divider.svg",
}) => {
  return (
    <div className={`section-header breakpoint-21-${breakpoint} ${className}`}>
      <div
        className={`content-16 breakpoint-22-${breakpoint} ${type} tabs-${tabs}`}
      >
        {breakpoint === "desktop" &&
          ["button-group", "buttons"].includes(type) && (
            <div className="text-and-supporting-6">
              <div className="text-24">{text}</div>

              {supportingText && (
                <p className="p">
                  Manage your team members and their account permissions here.
                </p>
              )}
            </div>
          )}

        {type === "search" && (
          <>
            <div className="text-and-supporting-7">
              <div className="text-24">{text}</div>

              {supportingText && (
                <p className="supporting-text-4">
                  Manage your team members and their account permissions here.
                </p>
              )}
            </div>

            <InputDropdown
              className={`${breakpoint === "mobile" ? "class-43" : "class-44"}`}
              hintText={false}
              label={false}
              stateProp="placeholder"
              type="search"
            />
          </>
        )}

        {breakpoint === "mobile" &&
          ["button-group", "buttons"].includes(type) && (
            <div className="text-and-supporting-8">
              <div className="text-24">{text}</div>

              {supportingText && (
                <p className="supporting-text-5">
                  Manage your team members and their account permissions here.
                </p>
              )}
            </div>
          )}

        {type === "buttons" && (
          <>
            <>
              {actions && (
                <div className="actions-7">
                  <ButtonsButton
                    className="instance-node-17"
                    hierarchy={
                      breakpoint === "mobile"
                        ? "secondary-gray"
                        : "tertiary-gray"
                    }
                    icon="default"
                    iconLeading={false}
                    iconTrailing={false}
                    size="md"
                    stateProp="default"
                    text={breakpoint === "mobile" ? "Secondary" : "Tertiary"}
                  />

                  {breakpoint === "mobile" && (
                    <img
                      className="button-2"
                      alt="Button"
                      src={tabs ? "/img/button-30.svg" : "/img/button-31.svg"}
                    />
                  )}

                  {breakpoint === "desktop" && (
                    <>
                      <ButtonsButton
                        className="instance-node-17"
                        hierarchy="secondary-color"
                        icon="default"
                        iconLeading={false}
                        iconTrailing={false}
                        size="md"
                        stateProp="default"
                        text="Secondary"
                      />
                      <ButtonsButton
                        className="instance-node-17"
                        hierarchy="secondary-gray"
                        icon="default"
                        iconLeading={false}
                        iconTrailing={false}
                        size="md"
                        stateProp="default"
                        text="Secondary"
                      />
                      <img
                        className="button-3"
                        alt="Button"
                        src={
                          !tabs ? "/img/button-28.svg" : "/img/button-29.svg"
                        }
                      />
                    </>
                  )}
                </div>
              )}
            </>
          </>
        )}

        {type === "button-group" && (
          <div className="button-group-2">
            <div className="button-group-base">
              <div className="text-wrapper-6">Text</div>
            </div>

            <div className="button-group-base-2">
              <div className="text-wrapper-6">Text</div>
            </div>

            <div className="button-group-base-3">
              <div className="text-wrapper-6">Text</div>
            </div>
          </div>
        )}

        {breakpoint === "desktop" &&
          ["button-group", "buttons"].includes(type) && (
            <>
              <>
                {dropdownIcon && (
                  <Dropdown
                    className="instance-node-17"
                    open={false}
                    type="icon"
                  />
                )}
              </>
            </>
          )}
      </div>

      {tabs &&
        ["desktop", "mobile"].includes(breakpoint) &&
        (breakpoint === "desktop" || type === "search") && (
          <div className="horizontal-tabs">
            {breakpoint === "desktop" && (
              <>
                <div className="tab-button-base">
                  <div className="text-25">My details</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Profile</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Password</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Team</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Plan</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Billing</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Email</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Notifications</div>

                  <Badge
                    className="badge-2"
                    color="gray"
                    icon="false"
                    size="sm"
                    text="2"
                    type="pill-color"
                  />
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">Integrations</div>
                </div>

                <div className="tab-button-base-2">
                  <div className="text-26">API</div>
                </div>
              </>
            )}

            {breakpoint === "mobile" && (
              <InputDropdown
                className="input-dropdown-instance"
                hintText={false}
                label={false}
                stateProp="default"
                supportingText={false}
                text1="My details"
                type="default"
              />
            )}
          </div>
        )}

      {(breakpoint === "desktop" ||
        (breakpoint === "mobile" && type === "search")) && (
        <>
          <>
            {divider && (
              <img
                className="divider"
                alt="Divider"
                src={
                  breakpoint === "mobile"
                    ? "/img/divider-173.svg"
                    : breakpoint === "desktop" && tabs
                      ? "/img/divider.svg"
                      : img
                }
              />
            )}
          </>
        </>
      )}

      {!tabs &&
        breakpoint === "mobile" &&
        ["button-group", "buttons"].includes(type) && (
          <>
            <>
              {dropdownIcon && (
                <Dropdown className="dropdown-3" open={false} type="icon" />
              )}
            </>

            <>
              {divider && (
                <img
                  className="divider"
                  alt="Divider"
                  src="/img/divider-173.svg"
                />
              )}
            </>
          </>
        )}

      {tabs &&
        breakpoint === "mobile" &&
        ["button-group", "buttons"].includes(type) && (
          <>
            <div className="input-dropdown-wrapper">
              <InputDropdown
                className="input-dropdown-instance"
                hintText={false}
                label={false}
                stateProp="default"
                supportingText={false}
                text1="My details"
                type="default"
              />
            </div>

            <>
              {dropdownIcon && (
                <Dropdown className="dropdown-3" open={false} type="icon" />
              )}
            </>

            <>
              {divider && (
                <img
                  className="divider"
                  alt="Divider"
                  src="/img/divider-173.svg"
                />
              )}
            </>
          </>
        )}
    </div>
  );
};

SectionHeader.propTypes = {
  actions: PropTypes.bool,
  divider: PropTypes.bool,
  supportingText: PropTypes.bool,
  dropdownIcon: PropTypes.bool,
  tabs: PropTypes.bool,
  type: PropTypes.oneOf(["search", "button-group", "buttons"]),
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  img: PropTypes.string,
};
