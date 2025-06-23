import React from "react";
import { PlatformFacebookColorNegative } from "../../../../icons/PlatformFacebookColorNegative";
import { SocialIcons1 } from "../../../../icons/SocialIcons1";
import "./style.css";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <header className="header">
        <div className="group">
          <button className="btn">
            <div className="call">
              <div className="frame">
                <img
                  className="img"
                  alt="Group"
                  src="https://c.animaapp.com/oQq6x1yU/img/group@2x.png"
                />
              </div>

              <div className="text-wrapper">+987 654 3210</div>
            </div>
          </button>

          <img
            className="romecode"
            alt="Romecode"
            src="https://c.animaapp.com/oQq6x1yU/img/romecode-1-1@2x.png"
          />

          <div className="menu">
            <div className="frame-2">
              <div className="text-wrapper-2">Home</div>

              <div className="text-wrapper-2">Why Choose Us</div>

              <div className="text-wrapper-2">Our Services</div>

              <div className="text-wrapper-2">Contact Us</div>
            </div>
          </div>
        </div>
      </header>

      <div className="top-bar">
        <div className="social-icons">
          <PlatformFacebookColorNegative className="icon-instance-node" />
          <SocialIcons1 className="icon-instance-node" />
        </div>

        <div className="mail-wrapper">
          <div className="mail">
            <div className="frame">
              <img
                className="group-2"
                alt="Group"
                src="https://c.animaapp.com/oQq6x1yU/img/group-1@2x.png"
              />
            </div>

            <div className="text-wrapper-3">info@romecode.com</div>
          </div>
        </div>

        <button className="button">
          <div className="text-wrapper-4">Free Quote</div>
        </button>
      </div>
    </div>
  );
};
