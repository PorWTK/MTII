import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Check } from "../../icons/Check";
import { ChevronDown20 } from "../../icons/ChevronDown20";
import { SearchLg } from "../../icons/SearchLg";
import { User01 } from "../../icons/User01";
import { XClose30 } from "../../icons/XClose30";
import { Avatar } from "../Avatar";
import { Dot } from "../Dot";
import { HelpIcon } from "../HelpIcon";
import "./style.css";

export const InputDropdown = ({
  helpIcon = true,
  required = true,
  hintText = true,
  scrollBar = true,
  supportingText = true,
  label = true,
  type,
  stateProp,
  className,
  text = "Team member",
  text1 = "Olivia Rhye",
  inputWithLabelClassName,
  text2 = "Select team member",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "default",

    state: stateProp || "default",
  });

  return (
    <div
      className={`input-dropdown type-${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`input-with-label ${inputWithLabelClassName}`}>
        {label && (
          <div className="label-wrapper">
            <div className="label">
              {[
                "avatar-leading",
                "default",
                "dot-leading",
                "icon-leading",
              ].includes(state.type) && <>{text}</>}

              {["search", "tags"].includes(state.type) && <>Search</>}
            </div>

            {required && <div className="asterisk">*</div>}

            {helpIcon && (
              <HelpIcon
                className={`${state.type === "icon-leading" && state.state === "open" ? "class-4" : (state.type === "search" && state.state === "open") ? "class-5" : state.type === "tags" && state.state === "open" ? "class-6" : state.type === "avatar-leading" && state.state === "open" ? "class-7" : state.state === "open" && state.type === "dot-leading" ? "class-8" : state.state === "default" && state.type === "default" ? "class-9" : state.state === "placeholder" && state.type === "default" ? "class-10" : state.state === "disabled" && state.type === "default" ? "class-11" : state.type === "default" && state.state === "focused" ? "class-12" : state.state === "default" && state.type === "icon-leading" ? "class-13" : state.state === "placeholder" && state.type === "icon-leading" ? "class-14" : state.type === "icon-leading" && state.state === "disabled" ? "class-15" : state.type === "icon-leading" && state.state === "focused" ? "class-16" : state.state === "default" && state.type === "search" ? "class-17" : state.state === "default" && state.type === "tags" ? "class-18" : state.state === "placeholder" && state.type === "search" ? "class-19" : state.type === "search" && state.state === "disabled" ? "class-20" : state.state === "placeholder" && state.type === "tags" ? "class-21" : state.type === "tags" && state.state === "disabled" ? "class-22" : state.type === "search" && state.state === "focused" ? "class-23" : state.type === "tags" && state.state === "focused" ? "class-24" : state.type === "avatar-leading" && state.state === "default" ? "class-25" : state.type === "avatar-leading" && state.state === "placeholder" ? "class-26" : state.type === "avatar-leading" && state.state === "disabled" ? "class-27" : state.type === "avatar-leading" && state.state === "focused" ? "class-28" : state.state === "default" && state.type === "dot-leading" ? "class-29" : state.state === "placeholder" && state.type === "dot-leading" ? "class-30" : state.state === "disabled" && state.type === "dot-leading" ? "class-31" : state.type === "dot-leading" && state.state === "focused" ? "class-32" : "class-33"}`}
                open={false}
                supportingText={false}
                tooltip="top-no-arrow"
              />
            )}
          </div>
        )}

        <div className={`input state-5-${state.state}`}>
          <div className="div-2">
            {["search", "tags"].includes(state.type) && (
              <SearchLg className="instance-node-2" />
            )}

            {state.type === "tags" &&
              ["default", "focused", "open"].includes(state.state) && (
                <div className="tags-2">
                  <div className="tag">
                    <div className="content-4">
                      <Avatar
                        className="avatar-2"
                        overlapGroupClassName="avatar-instance"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-5">Olivia</div>
                    </div>

                    <div className="tag-close-x">
                      <XClose30 className="x-close" color="#98A2B3" />
                    </div>
                  </div>

                  <div className="tag">
                    <div className="content-4">
                      <Avatar
                        className="avatar-2"
                        overlapGroupClassName="avatar-instance"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-5">Phoenix</div>
                    </div>

                    <div className="tag-close-x">
                      <XClose30 className="x-close" color="#98A2B3" />
                    </div>
                  </div>
                </div>
              )}

            {(state.type === "icon-leading" ||
              (state.state === "disabled" && state.type === "avatar-leading") ||
              (state.state === "placeholder" &&
                state.type === "avatar-leading")) && (
              <User01 className="instance-node-2" />
            )}

            {((state.state === "default" && state.type === "default") ||
              (state.state === "default" && state.type === "icon-leading") ||
              (state.state === "default" && state.type === "search") ||
              (state.state === "focused" && state.type === "default") ||
              (state.state === "focused" && state.type === "icon-leading") ||
              (state.state === "focused" && state.type === "search") ||
              (state.state === "open" && state.type === "default") ||
              (state.state === "open" && state.type === "icon-leading") ||
              (state.state === "open" && state.type === "search")) && (
              <div className="text-6">{text1}</div>
            )}

            {((state.state === "default" && state.type === "default") ||
              (state.state === "default" && state.type === "icon-leading") ||
              (state.state === "default" && state.type === "search") ||
              (state.state === "focused" && state.type === "default") ||
              (state.state === "focused" && state.type === "icon-leading") ||
              (state.state === "focused" && state.type === "search") ||
              (state.state === "open" && state.type === "default") ||
              (state.state === "open" && state.type === "icon-leading") ||
              (state.state === "open" && state.type === "search")) && (
              <>
                <>
                  {supportingText && (
                    <div className="supporting-text">@olivia</div>
                  )}
                </>
              </>
            )}

            {state.type === "avatar-leading" &&
              ["default", "focused", "open"].includes(state.state) && (
                <>
                  <Avatar
                    className="instance-node-3"
                    placeholder={false}
                    size="xs"
                    statusIcon="false"
                    text={false}
                  />
                  <div className="text-6">{text1}</div>

                  <>
                    {supportingText && (
                      <div className="supporting-text">@olivia</div>
                    )}
                  </>
                </>
              )}

            {state.type === "dot-leading" &&
              ["default", "focused", "open"].includes(state.state) && (
                <>
                  <Dot className="instance-node-3" outline={false} size="md" />
                  <div className="text-6">{text1}</div>

                  <>
                    {supportingText && (
                      <div className="supporting-text">@olivia</div>
                    )}
                  </>
                </>
              )}

            {((state.state === "disabled" && state.type === "avatar-leading") ||
              (state.state === "disabled" && state.type === "default") ||
              (state.state === "disabled" && state.type === "icon-leading") ||
              (state.state === "disabled" && state.type === "search") ||
              (state.state === "placeholder" &&
                state.type === "avatar-leading") ||
              (state.state === "placeholder" && state.type === "default") ||
              (state.state === "placeholder" &&
                state.type === "icon-leading") ||
              (state.state === "placeholder" && state.type === "search") ||
              state.type === "tags") && (
              <div className="text-7">
                {["default", "focused", "open"].includes(state.state) && (
                  <>Lana</>
                )}

                {["avatar-leading", "default", "icon-leading"].includes(
                  state.type,
                ) && <>{text2}</>}

                {(state.type === "search" ||
                  (state.state === "disabled" && state.type === "tags") ||
                  (state.state === "placeholder" && state.type === "tags")) && (
                  <>Search</>
                )}
              </div>
            )}

            {state.type === "dot-leading" &&
              ["disabled", "placeholder"].includes(state.state) && (
                <>
                  <Dot
                    className="instance-node-3"
                    dotClassName={`${state.state === "disabled" && "class-34"}`}
                    outline={false}
                    size="md"
                  />
                  <div className="text-8">{text2}</div>
                </>
              )}
          </div>

          {[
            "avatar-leading",
            "default",
            "dot-leading",
            "icon-leading",
          ].includes(state.type) && (
            <ChevronDown20 className="instance-node-2" color="#667085" />
          )}
        </div>
      </div>

      {["default", "disabled", "focused", "placeholder"].includes(
        state.state,
      ) && (
        <>
          <>
            {hintText && (
              <p className="hint-text">This is a hint text to help user.</p>
            )}
          </>
        </>
      )}

      {state.state === "open" && (
        <div className="menu">
          <div className="menu-items">
            <div className="input-dropdown-menu">
              <div className="content-5">
                {[
                  "avatar-leading",
                  "default",
                  "dot-leading",
                  "icon-leading",
                  "search",
                ].includes(state.type) && (
                  <div className="text-and-supporting">
                    {state.type === "icon-leading" && (
                      <User01 className="instance-node-2" />
                    )}

                    {["default", "icon-leading", "search"].includes(
                      state.type,
                    ) && (
                      <>
                        <div className="text-6">Phoenix Baker</div>

                        <div className="supporting-text">@phoenix</div>
                      </>
                    )}

                    {state.type === "avatar-leading" && (
                      <>
                        <Avatar
                          className="instance-node-3"
                          placeholder={false}
                          size="xs"
                          statusIcon="false"
                          text={false}
                        />
                        <div className="text-6">Phoenix Baker</div>

                        <div className="supporting-text">@phoenix</div>
                      </>
                    )}

                    {state.type === "dot-leading" && (
                      <>
                        <Dot
                          className="instance-node-3"
                          outline={false}
                          size="md"
                        />
                        <div className="text-6">Phoenix Baker</div>

                        <div className="supporting-text">@phoenix</div>
                      </>
                    )}
                  </div>
                )}

                {state.type === "tags" && (
                  <>
                    <div className="div-2">
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Phoenix Baker</div>

                      <div className="supporting-text">@phoenix</div>
                    </div>

                    <Check className="instance-node-2" />
                  </>
                )}
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="content-6">
                <div className="div-2">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">{text1}</div>

                      <div className="supporting-text">@olivia</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">{text1}</div>

                      <div className="supporting-text">@olivia</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">{text1}</div>

                      <div className="supporting-text">@olivia</div>
                    </>
                  )}
                </div>

                <Check className="instance-node-2" />
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Lana Steiner</div>

                      <div className="supporting-text">@lana</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Lana Steiner</div>

                      <div className="supporting-text">@lana</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Lana Steiner</div>

                      <div className="supporting-text">@lana</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Demi Wilkinson</div>

                      <div className="supporting-text">@demi</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Demi Wilkinson</div>

                      <div className="supporting-text">@demi</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Demi Wilkinson</div>

                      <div className="supporting-text">@demi</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Candice Wu</div>

                      <div className="supporting-text">@candice</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Candice Wu</div>

                      <div className="supporting-text">@candice</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Candice Wu</div>

                      <div className="supporting-text">@candice</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Natali Craig</div>

                      <div className="supporting-text">@natali</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Natali Craig</div>

                      <div className="supporting-text">@natali</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Natali Craig</div>

                      <div className="supporting-text">@natali</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <User01 className="instance-node-2" />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Drew Cano</div>

                      <div className="supporting-text">@drew</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Drew Cano</div>

                      <div className="supporting-text">@drew</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Drew Cano</div>

                      <div className="supporting-text">@drew</div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="input-dropdown-menu">
              <div className="text-and-supporting-wrapper">
                <div className="text-and-supporting">
                  {state.type === "icon-leading" && (
                    <img
                      className="user"
                      alt="User"
                      src="/img/user-01-12.svg"
                    />
                  )}

                  {["default", "icon-leading", "search"].includes(
                    state.type,
                  ) && (
                    <>
                      <div className="text-6">Orlando Diggs</div>

                      <div className="supporting-text">@orlando</div>
                    </>
                  )}

                  {["avatar-leading", "tags"].includes(state.type) && (
                    <>
                      <Avatar
                        className="instance-node-3"
                        placeholder={false}
                        size="xs"
                        statusIcon="false"
                        text={false}
                      />
                      <div className="text-6">Orlando Diggs</div>

                      <div className="supporting-text">@orlando</div>
                    </>
                  )}

                  {state.type === "dot-leading" && (
                    <>
                      <Dot
                        className="instance-node-3"
                        outline={false}
                        size="md"
                      />
                      <div className="text-6">Orlando Diggs</div>

                      <div className="supporting-text">@orlando</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {scrollBar && (
            <div className="scroll-bar">
              <div className="bar-wrapper">
                <div className="bar" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "default",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "default",
        };
    }
  }

  if (state.state === "disabled" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "default",
        };
    }
  }

  if (state.state === "open" && state.type === "default") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "default",
        };
    }
  }

  if (state.state === "default" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "icon-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "icon-leading",
        };
    }
  }

  if (state.state === "disabled" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "icon-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "icon-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "icon-leading",
        };
    }
  }

  if (state.state === "default" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "search",
        };
    }
  }

  if (state.state === "default" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "tags",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "search",
        };
    }
  }

  if (state.state === "disabled" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "search",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "tags",
        };
    }
  }

  if (state.state === "disabled" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "tags",
        };
    }
  }

  if (state.state === "open" && state.type === "search") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "search",
        };
    }
  }

  if (state.state === "open" && state.type === "tags") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "tags",
        };
    }
  }

  if (state.state === "default" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "avatar-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "avatar-leading",
        };
    }
  }

  if (state.state === "disabled" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "avatar-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "avatar-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "avatar-leading",
        };
    }
  }

  if (state.state === "default" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "dot-leading",
        };
    }
  }

  if (state.state === "placeholder" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "dot-leading",
        };
    }
  }

  if (state.state === "disabled" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "open",

          type: "dot-leading",
        };
    }
  }

  if (state.state === "open" && state.type === "dot-leading") {
    switch (action) {
      case "click":
        return {
          state: "default",

          type: "dot-leading",
        };
    }
  }

  return state;
}

InputDropdown.propTypes = {
  helpIcon: PropTypes.bool,
  required: PropTypes.bool,
  hintText: PropTypes.bool,
  scrollBar: PropTypes.bool,
  supportingText: PropTypes.bool,
  label: PropTypes.bool,
  type: PropTypes.oneOf([
    "icon-leading",
    "avatar-leading",
    "default",
    "tags",
    "dot-leading",
    "search",
  ]),
  stateProp: PropTypes.oneOf([
    "open",
    "default",
    "focused",
    "placeholder",
    "disabled",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
