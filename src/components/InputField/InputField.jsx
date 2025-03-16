import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { AlertCircle94 } from "../../icons/AlertCircle94";
import { ChevronDown20 } from "../../icons/ChevronDown20";
import { Copy01_13 } from "../../icons/Copy01_13";
import { Mail01 } from "../../icons/Mail01";
import { XClose30 } from "../../icons/XClose30";
import { Avatar } from "../Avatar";
import { ButtonsButton } from "../ButtonsButton";
import { HelpIcon } from "../HelpIcon";
import "./style.css";

export const InputField = ({
  required = true,
  helpIcon = true,
  hintText = true,
  label = true,
  size,
  type,
  destructive,
  stateProp,
  className,
  text = "olivia@untitledui.com",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",

    type: type || "icon-leading",

    destructive: destructive || false,

    state: stateProp || "placeholder",
  });

  return (
    <div
      className={`input-field type-3-${state.type} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="input-with-label-2">
        {label && (
          <div className="label-wrapper-2">
            <div className="label-2">
              {["default", "icon-leading"].includes(state.type) && <>Email</>}

              {state.type === "payment-input" && <>Card number</>}

              {state.type === "tags" && <>Users</>}

              {state.type === "leading-dropdown" && <>Phone number</>}

              {["leading-text", "trailing-button"].includes(state.type) && (
                <>Website</>
              )}

              {state.type === "trailing-dropdown" && <>Sale amount</>}
            </div>

            {required && <div className="asterisk-2">*</div>}
          </div>
        )}

        <div
          className={`input-2 type-4-${state.type} state-11-${state.state} size-5-${state.size} destructive-${state.destructive}`}
        >
          {["default", "icon-leading", "payment-input", "tags"].includes(
            state.type,
          ) && (
            <div className="content-17">
              {state.type === "icon-leading" && (
                <Mail01 className="instance-node-18" />
              )}

              {((!state.destructive &&
                state.size === "md" &&
                state.state === "focused" &&
                state.type === "tags") ||
                (!state.destructive &&
                  state.state === "filled" &&
                  state.type === "tags") ||
                (state.destructive &&
                  state.size === "md" &&
                  state.type === "tags") ||
                (state.destructive &&
                  state.size === "sm" &&
                  state.state === "filled" &&
                  state.type === "tags") ||
                (state.destructive &&
                  state.size === "sm" &&
                  state.state === "placeholder" &&
                  state.type === "tags") ||
                (state.size === "md" &&
                  state.state === "disabled" &&
                  state.type === "tags") ||
                (state.size === "sm" &&
                  state.state === "focused" &&
                  state.type === "tags") ||
                state.type === "payment-input") && (
                <div className="payment-method-icon-2">
                  {state.type === "payment-input" && (
                    <div className="mastercard">
                      <div className="overlap-group-4">
                        <img
                          className="right-2"
                          alt="Right"
                          src="/img/right.svg"
                        />

                        <img
                          className="middle"
                          alt="Middle"
                          src="/img/middle.svg"
                        />
                      </div>
                    </div>
                  )}

                  {state.type === "tags" && (
                    <>
                      <div className="tag-2">
                        <div className="content-18">
                          <Avatar
                            className="instance-node-19"
                            overlapGroupClassName="avatar-6"
                            placeholder={false}
                            size="xs"
                            statusIcon="false"
                            text={false}
                          />
                          <div className="text-27">Olivia</div>
                        </div>

                        <div className="x-close-wrapper">
                          <XClose30 className="x-close-30" color="#98A2B3" />
                        </div>
                      </div>

                      <div className="tag-2">
                        <div className="content-18">
                          <Avatar
                            className="instance-node-19"
                            overlapGroupClassName="avatar-6"
                            placeholder={false}
                            size="xs"
                            statusIcon="false"
                            text={false}
                          />
                          <div className="text-27">Phoenix</div>
                        </div>

                        <div className="x-close-wrapper">
                          <XClose30 className="x-close-30" color="#98A2B3" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}

              <div className="text-28">
                {["default", "icon-leading"].includes(state.type) && (
                  <>{text}</>
                )}

                {state.type === "payment-input" && <>Card number</>}

                {((state.destructive &&
                  state.state === "placeholder" &&
                  state.type === "tags") ||
                  (state.size === "md" &&
                    state.state === "disabled" &&
                    state.type === "tags") ||
                  (state.state === "filled" && state.type === "tags") ||
                  (state.state === "focused" && state.type === "tags")) && (
                  <>Lana</>
                )}

                {state.type === "tags" &&
                  (!state.destructive || state.state === "disabled") &&
                  (!state.destructive || state.size === "sm") &&
                  ["placeholder", "disabled"].includes(state.state) &&
                  (state.state === "placeholder" || state.size === "sm") && (
                    <>Add users</>
                  )}
              </div>
            </div>
          )}

          {((!state.destructive && state.type === "default") ||
            (!state.destructive && state.type === "icon-leading") ||
            (!state.destructive && state.type === "payment-input") ||
            (!state.destructive && state.type === "tags")) && (
            <>
              <>
                {helpIcon && (
                  <HelpIcon
                    className={`${state.state === "placeholder" && state.type === "icon-leading" && state.size === "sm" ? "class-45" : (state.state === "placeholder" && state.size === "md" && state.type === "payment-input") ? "class-46" : state.state === "placeholder" && state.size === "sm" && state.type === "payment-input" ? "class-47" : state.state === "disabled" && state.type === "icon-leading" && state.size === "md" ? "class-48" : state.state === "disabled" && state.type === "icon-leading" && state.size === "sm" ? "class-49" : state.state === "disabled" && state.size === "md" && state.type === "payment-input" ? "class-50" : state.state === "disabled" && state.size === "sm" && state.type === "payment-input" ? "class-51" : state.type === "icon-leading" && state.size === "md" && state.state === "filled" ? "class-52" : state.type === "icon-leading" && state.size === "sm" && state.state === "filled" ? "class-53" : state.size === "md" && state.state === "filled" && state.type === "payment-input" ? "class-54" : state.state === "filled" && state.type === "payment-input" && state.size === "sm" ? "class-55" : state.type === "icon-leading" && state.size === "md" && state.state === "focused" ? "class-56" : state.type === "icon-leading" && state.size === "sm" && state.state === "focused" ? "class-57" : state.size === "md" && state.type === "payment-input" && state.state === "focused" ? "class-58" : state.size === "sm" && state.type === "payment-input" && state.state === "focused" ? "class-59" : state.state === "placeholder" && state.size === "md" && state.type === "default" ? "class-60" : state.state === "placeholder" && state.size === "sm" && state.type === "default" ? "class-61" : state.state === "placeholder" && state.type === "tags" && state.size === "md" ? "class-62" : state.state === "placeholder" && state.type === "tags" && state.size === "sm" ? "class-63" : state.state === "disabled" && state.size === "md" && state.type === "default" ? "class-64" : state.state === "disabled" && state.size === "sm" && state.type === "default" ? "class-65" : state.state === "disabled" && state.type === "tags" && state.size === "md" ? "class-66" : state.state === "disabled" && state.type === "tags" && state.size === "sm" ? "class-67" : state.size === "md" && state.state === "filled" && state.type === "default" ? "class-68" : state.state === "filled" && state.type === "default" && state.size === "sm" ? "class-69" : state.type === "tags" && state.size === "md" && state.state === "filled" ? "class-70" : state.type === "tags" && state.size === "sm" && state.state === "filled" ? "class-71" : state.size === "md" && state.type === "default" && state.state === "focused" ? "class-72" : state.size === "sm" && state.type === "default" && state.state === "focused" ? "class-73" : state.type === "tags" && state.size === "md" && state.state === "focused" ? "class-74" : state.type === "tags" && state.size === "sm" && state.state === "focused" ? "class-75" : "class-76"}`}
                    open={false}
                    supportingText={false}
                    tooltip="top-arrow"
                  />
                )}
              </>
            </>
          )}

          {((state.destructive && state.type === "default") ||
            (state.destructive && state.type === "icon-leading") ||
            (state.destructive && state.type === "payment-input") ||
            (state.destructive && state.type === "tags")) && (
            <AlertCircle94 className="instance-node-19" color="#F04438" />
          )}

          {["leading-dropdown", "leading-text", "trailing-dropdown"].includes(
            state.type,
          ) && (
            <>
              <div className="dropdown-4">
                {["leading-dropdown", "leading-text"].includes(state.type) && (
                  <div className="text-29">
                    {state.type === "leading-text" && <>http://</>}

                    {state.type === "leading-dropdown" && <>US</>}
                  </div>
                )}

                {state.type === "leading-dropdown" && (
                  <ChevronDown20 className="instance-node-18" color="#98A2B3" />
                )}

                {state.type === "trailing-dropdown" && (
                  <div className="text-input">
                    <div className="text-wrapper-7">$</div>

                    <div className="text-30">1,000.00</div>
                  </div>
                )}

                {state.type === "trailing-dropdown" && !state.destructive && (
                  <>
                    <>
                      {helpIcon && (
                        <HelpIcon
                          className={`${state.state === "placeholder" && state.size === "sm" ? "class-77" : (state.size === "md" && state.state === "disabled") ? "class-78" : state.state === "disabled" && state.size === "sm" ? "class-79" : state.size === "md" && state.state === "filled" ? "class-80" : state.state === "filled" && state.size === "sm" ? "class-81" : state.size === "md" && state.state === "focused" ? "class-82" : state.size === "sm" && state.state === "focused" ? "class-83" : "class-84"}`}
                          open={false}
                          supportingText={false}
                          tooltip="top-arrow"
                        />
                      )}
                    </>
                  </>
                )}

                {state.type === "trailing-dropdown" && state.destructive && (
                  <AlertCircle94 className="instance-node-19" color="#F04438" />
                )}
              </div>

              <div className="text-input-2">
                {!state.destructive &&
                  ["leading-dropdown", "leading-text"].includes(state.type) && (
                    <>
                      <div className="text-31">
                        {state.type === "leading-dropdown" && (
                          <>+1 (555) 000-0000</>
                        )}

                        {state.type === "leading-text" && (
                          <>www.untitledui.com</>
                        )}
                      </div>

                      <>
                        {helpIcon && (
                          <HelpIcon
                            className={`${state.state === "placeholder" && state.size === "sm" && state.type === "leading-dropdown" ? "class-85" : (state.size === "md" && state.state === "disabled" && state.type === "leading-dropdown") ? "class-86" : state.state === "disabled" && state.size === "sm" && state.type === "leading-dropdown" ? "class-87" : state.size === "md" && state.state === "filled" && state.type === "leading-dropdown" ? "class-88" : state.size === "sm" && state.state === "filled" && state.type === "leading-dropdown" ? "class-89" : state.size === "md" && state.type === "leading-dropdown" && state.state === "focused" ? "class-90" : state.size === "sm" && state.type === "leading-dropdown" && state.state === "focused" ? "class-91" : state.state === "placeholder" && state.size === "md" && state.type === "leading-text" ? "class-92" : state.state === "placeholder" && state.size === "sm" && state.type === "leading-text" ? "class-93" : state.type === "leading-text" && state.size === "md" && state.state === "disabled" ? "class-94" : state.type === "leading-text" && state.state === "disabled" && state.size === "sm" ? "class-95" : state.type === "leading-text" && state.size === "md" && state.state === "filled" ? "class-96" : state.type === "leading-text" && state.size === "sm" && state.state === "filled" ? "class-97" : state.type === "leading-text" && state.size === "md" && state.state === "focused" ? "class-98" : state.type === "leading-text" && state.size === "sm" && state.state === "focused" ? "class-99" : "class-100"}`}
                            open={false}
                            supportingText={false}
                            tooltip="top-arrow"
                          />
                        )}
                      </>
                    </>
                  )}

                {state.destructive &&
                  ["leading-dropdown", "leading-text"].includes(state.type) && (
                    <>
                      <div className="text-32">
                        {state.type === "leading-dropdown" && (
                          <>+1 (555) 000-0000</>
                        )}

                        {state.type === "leading-text" && (
                          <>www.untitledui.com</>
                        )}
                      </div>

                      <AlertCircle94
                        className="instance-node-19"
                        color="#F04438"
                      />
                    </>
                  )}

                {state.type === "trailing-dropdown" && (
                  <>
                    <div className="text-wrapper-7">USD</div>

                    <ChevronDown20
                      className="instance-node-18"
                      color="#98A2B3"
                    />
                  </>
                )}
              </div>
            </>
          )}

          {state.type === "trailing-button" && (
            <>
              <div className="text-input-3">
                <div className="text-33">www.untitledui.com</div>

                {!state.destructive && (
                  <>
                    <>
                      {helpIcon && (
                        <HelpIcon
                          className={`${state.state === "placeholder" && state.size === "sm" ? "class-101" : (state.size === "md" && state.state === "disabled") ? "class-102" : state.state === "disabled" && state.size === "sm" ? "class-103" : state.size === "md" && state.state === "filled" ? "class-104" : state.state === "filled" && state.size === "sm" ? "class-105" : state.size === "md" && state.state === "focused" ? "class-106" : state.size === "sm" && state.state === "focused" ? "class-107" : "class-108"}`}
                          open={false}
                          supportingText={false}
                          tooltip="top-arrow"
                        />
                      )}
                    </>
                  </>
                )}

                {state.destructive && (
                  <AlertCircle94 className="instance-node-19" color="#F04438" />
                )}
              </div>

              <ButtonsButton
                className={`${state.state === "focused" || (state.destructive && state.state === "filled") || (state.destructive && state.state === "placeholder") ? "class-109" : "class-110"}`}
                hierarchy="secondary-gray"
                icon="default"
                iconTrailing={false}
                override={
                  <Copy01_13 className="instance-node-18" color="#344054" />
                }
                size={state.size === "sm" ? "md" : "lg"}
                stateProp="default"
                text="Copy"
              />
            </>
          )}
        </div>
      </div>

      {hintText && (
        <div className={`hint-text-2 destructive-4-${state.destructive}`}>
          {(!state.destructive || state.type === "trailing-button") && (
            <p className="text-wrapper-10">This is a hint text to help user.</p>
          )}

          {((state.destructive && state.type === "default") ||
            (state.destructive && state.type === "icon-leading") ||
            (state.destructive && state.type === "leading-dropdown") ||
            (state.destructive && state.type === "leading-text") ||
            (state.destructive && state.type === "payment-input") ||
            (state.destructive && state.type === "tags") ||
            (state.destructive && state.type === "trailing-dropdown")) && (
            <p className="text-wrapper-10">This is an error message.</p>
          )}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "icon-leading"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "icon-leading",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "payment-input"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "payment-input",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "default",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "default"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "default",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "tags"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "tags",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "leading-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-button"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "trailing-button",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "leading-text"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "leading-text",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "focused",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "focused",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "focused",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "placeholder" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "focused",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "placeholder",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "placeholder",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "placeholder",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "filled" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "placeholder",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "md",

          state: "filled",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === false &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: false,

          size: "sm",

          state: "filled",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "md" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "md",

          state: "filled",

          type: "trailing-dropdown",
        };
    }
  }

  if (
    state.destructive === true &&
    state.size === "sm" &&
    state.state === "focused" &&
    state.type === "trailing-dropdown"
  ) {
    switch (action) {
      case "click":
        return {
          destructive: true,

          size: "sm",

          state: "filled",

          type: "trailing-dropdown",
        };
    }
  }

  return state;
}

InputField.propTypes = {
  required: PropTypes.bool,
  helpIcon: PropTypes.bool,
  hintText: PropTypes.bool,
  label: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm"]),
  type: PropTypes.oneOf([
    "icon-leading",
    "leading-text",
    "default",
    "leading-dropdown",
    "trailing-dropdown",
    "tags",
    "trailing-button",
    "payment-input",
  ]),
  destructive: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "filled", "placeholder", "disabled"]),
  text: PropTypes.string,
};
