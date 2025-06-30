import React from "react";
import "./style.css";

export const ElementSection = () => {
  return (
    <div className="element-section w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="overlap-group w-full max-w-2xl bg-white bg-opacity-80 rounded-lg shadow-md p-6 md:p-12 flex flex-col items-center">
        <div className="group-3 w-full flex flex-col items-center">
          <p className="p text-center text-2xl md:text-3xl font-bold mb-4">Let’s Build Something Exceptional Together</p>

          <p className="text-wrapper-5 text-center text-base md:text-lg mb-2">
            Get in touch today and take the first step toward smarter digital transformation.
          </p>

          <p className="text-wrapper-6 text-center text-base md:text-lg mb-6">
            Whether you need scalable cloud solutions, a high-performing app, or a powerful website—RomeCode is ready to make it happen.
          </p>

          <button className="call-wrapper w-full md:w-auto">
            <div className="call-2">
              <div className="text-wrapper-7">Get Free Consultation</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
