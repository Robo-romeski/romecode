import React from "react";
import "./style.css";

export const Div = () => {
  return (
    <div className="div w-full px-4 py-8 md:py-16 flex flex-col items-center">
      <div className="icon-4 mb-4 md:mb-8">
        <img
          className="img-4"
          alt="Img"
          src="https://c.animaapp.com/oQq6x1yU/img/65de12548dcbda2881cd8ff5-group-1-1-2.svg"
        />
      </div>

      <div className="overlap-28 relative mb-4 md:mb-8">
        <div className="ellipse-2 absolute" />

        <img
          className="vector-54 absolute"
          alt="Vector"
          src="https://c.animaapp.com/oQq6x1yU/img/vector-91.svg"
        />

        <img
          className="vector-55 absolute"
          alt="Vector"
          src="https://c.animaapp.com/oQq6x1yU/img/vector-92.svg"
        />
      </div>

      <div className="text-wrapper-16 text-center text-xl md:text-2xl font-bold mb-2">Our Track Record_</div>

      <p className="some-of-the-apps-and text-center text-base md:text-lg mb-8 max-w-2xl">
        Some of the apps and websites we&#39;ve successfully delivered.
      </p>

      <div className="element-7 w-full md:w-1/2 mb-6">
        <div className="overlap-group-8 flex flex-col items-center">
          <div className="text-wrapper-17 text-center font-semibold mb-2">FitLife Mobile App</div>

          <img
            className="img-5 rounded-lg shadow-md"
            alt="Img"
            src="https://c.animaapp.com/oQq6x1yU/img/img@2x.png"
          />
        </div>
      </div>

      <div className="element-8 w-full md:w-1/2 mb-6">
        <div className="overlap-group-8 flex flex-col items-center">
          <div className="text-wrapper-18 text-center font-semibold mb-2">ShopEase E-Commerce Website</div>

          <img
            className="img-5 rounded-lg shadow-md"
            alt="Img"
            src="https://c.animaapp.com/oQq6x1yU/img/img-1@2x.png"
          />
        </div>
      </div>

      <div className="element-9 w-full md:w-1/2 mb-6">
        <div className="overlap-group-8 flex flex-col items-center">
          <p className="glowup-skincare text-center font-semibold mb-2"> GlowUp – Skincare Routine App</p>

          <img
            className="img-5 rounded-lg shadow-md"
            alt="Img"
            src="https://c.animaapp.com/oQq6x1yU/img/img-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
