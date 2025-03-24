import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="quote-image-bottom-wrapper">
        <div className="quote-image-bottom">
          <div className="content-35">
            <img className="stars" alt="Stars" src="/img/stars.svg" />

            <div className="text-and-supporting-16">
              <p className="text-50">
                Web Application for Managing &amp; Tracking Influencer Income
                (MTII)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="container-3">
          <div className="content-36">
            <header className="header">
              <div className="logomark">
                <div className="content-37">
                  <img className="star-5" alt="Star" src="/img/star-39.svg" />
                </div>
              </div>

              <div className="text-and-supporting-17">
                <div className="text-51">Welcome back</div>

                <p className="supporting-text-12">
                  Welcome back! Please enter your details.
                </p>
              </div>
            </header>

            <div className="content-38">
              <div className="form-5">
                <div className="div-6">
                  <div className="div-6">
                    <div className="label-wrapper-7">
                      <input
                        className="label-7"
                        htmlFor="input-1"
                        placeholder="Username"
                        type="text"
                      />
                    </div>

                    <div className="input-6">
                      <input
                        className="content-39"
                        id="input-1"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                </div>

                <div className="div-6">
                  <div className="div-6">
                    <div className="label-wrapper-7">
                      <label className="label-8" htmlFor="input-3">
                        Password
                      </label>
                    </div>

                    <div className="input-6">
                      <input
                        className="content-39"
                        id="input-3"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="actions-16">
              <Link to="/data">
                  <img
                    className="buttons-button-8"
                    alt="Buttons button"
                    src="/img/buttons-button-8.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer" />
      </div>
    </div>
  );
};
