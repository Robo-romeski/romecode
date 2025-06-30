import React, { useState } from "react";
import { PlatformFacebookColorNegative } from "../../../../icons/PlatformFacebookColorNegative";
import { SocialIcons1 } from "../../../../icons/SocialIcons1";
import "./style.css";

export const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navigation-bar w-full">
      <header className="header flex flex-col md:flex-row md:items-center md:justify-between px-4 py-2">
        <div className="group flex items-center w-full md:w-auto justify-between">
          <button className="btn flex items-center mr-4">
            <div className="call flex items-center">
              <div className="frame">
                <img
                  className="img"
                  alt="Group"
                  src="https://c.animaapp.com/oQq6x1yU/img/group@2x.png"
                />
              </div>
              <div className="text-wrapper ml-2">+987 654 3210</div>
            </div>
          </button>

          <img
            className="romecode h-10 w-auto object-contain"
            alt="Romecode"
            src="https://c.animaapp.com/oQq6x1yU/img/romecode-1-1@2x.png"
          />

          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="menu hidden md:block ml-8">
            <div className="frame-2 flex space-x-8">
              <div className="text-wrapper-2 cursor-pointer">Home</div>
              <div className="text-wrapper-2 cursor-pointer">Why Choose Us</div>
              <div className="text-wrapper-2 cursor-pointer">Our Services</div>
              <div className="text-wrapper-2 cursor-pointer">Contact Us</div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <div className="text-wrapper-2 cursor-pointer">Home</div>
          <div className="text-wrapper-2 cursor-pointer">Why Choose Us</div>
          <div className="text-wrapper-2 cursor-pointer">Our Services</div>
          <div className="text-wrapper-2 cursor-pointer">Contact Us</div>
          <button className="button w-full mt-2"> <div className="text-wrapper-4">Free Quote</div> </button>
        </div>
      )}

      <div className="top-bar flex items-center justify-between px-4 py-2 bg-blue-800 text-white">
        <div className="social-icons flex items-center space-x-2">
          <PlatformFacebookColorNegative className="icon-instance-node" />
          <SocialIcons1 className="icon-instance-node" />
        </div>

        <div className="mail-wrapper flex items-center space-x-2">
          <div className="mail flex items-center">
            <div className="frame">
              <img
                className="group-2"
                alt="Group"
                src="https://c.animaapp.com/oQq6x1yU/img/group-1@2x.png"
              />
            </div>
            <div className="text-wrapper-3 ml-2">info@romecode.com</div>
          </div>
        </div>

        <button className="button hidden md:block ml-4">
          <div className="text-wrapper-4">Free Quote</div>
        </button>
      </div>
    </div>
  );
};
