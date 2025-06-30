import React from "react";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer w-full bg-gray-900 text-white py-8 px-4">
      <div className="overlap-29 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 relative">
        <img
          className="romecode-2 h-12 w-auto mb-6 md:mb-0"
          alt="Romecode"
          src="https://c.animaapp.com/oQq6x1yU/img/romecode-1-1@2x.png"
        />

        <div className="contact-us flex flex-col mb-6 md:mb-0">
          <div className="text-wrapper-19 font-bold mb-2">Contact Us</div>

          <div className="whatsapp flex items-center mb-2">
            <div className="text-wrapper-20 mr-2">+987 654 3210</div>
            <div className="frame-wrapper">
              <div className="frame-4">
                <img
                  className="group-46"
                  alt="Group"
                  src="https://c.animaapp.com/oQq6x1yU/img/group-38@2x.png"
                />
              </div>
            </div>
          </div>

          <div className="mail-icon flex items-center">
            <div className="text-wrapper-20 mr-2">info@romecode.com</div>
            <div className="frame-wrapper">
              <div className="frame-5">
                <img
                  className="group-47"
                  alt="Group"
                  src="https://c.animaapp.com/oQq6x1yU/img/group-39@2x.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="social-icon flex flex-col items-start mb-6 md:mb-0">
          <div className="text-wrapper-21 font-bold mb-2">Join Us</div>

          <div className="flex flex-row items-center space-x-4 mb-2">
            <div className="frame-6">
              <div className="group-48">
                <img
                  className="subtract"
                  alt="Subtract"
                  src="https://c.animaapp.com/oQq6x1yU/img/subtract.svg"
                />
              </div>
            </div>
            <div className="frame-7">
              <div className="group-49">
                <div className="frame-8">
                  <img
                    className="group-50"
                    alt="Group"
                    src="https://c.animaapp.com/oQq6x1yU/img/group-40@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="frame-9">
              <div className="group-48">
                <img
                  className="vector-56"
                  alt="Vector"
                  src="https://c.animaapp.com/oQq6x1yU/img/vector-73.svg"
                />
              </div>
            </div>
            <div className="frame-10" />
          </div>
        </div>

        <div className="quick-links flex flex-col mb-6 md:mb-0">
          <div className="text-wrapper-19 font-bold mb-2">Quick Links</div>
          <div className="text-wrapper-22 cursor-pointer mb-1">Book A Call</div>
          <div className="text-wrapper-23 cursor-pointer mb-1">Privacy Policy</div>
          <div className="text-wrapper-24 cursor-pointer">Terms</div>
        </div>

        <div className="rectangle-2 absolute left-0 right-0 bottom-12 h-px bg-gray-700 w-full md:w-auto mx-auto" />

        <p className="text-wrapper-25 text-center w-full mt-8 md:mt-0 text-xs opacity-70">© 2025 Romecode. All rights reserved.</p>
      </div>
    </footer>
  );
};
