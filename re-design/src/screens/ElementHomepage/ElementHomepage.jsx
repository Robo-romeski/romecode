import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { ElementSection } from "./sections/ElementSection";
import { ElementSectionWrapper } from "./sections/ElementSectionWrapper";
import { Footer } from "./sections/Footer";
import { NavigationBar } from "./sections/NavigationBar";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import "./style.css";

export const ElementHomepage = () => {
  return (
    <div className="element-homepage" data-model-id="98:1021">
      <div className="div-2">
        <div className="overlap-34">
          <NavigationBar />
          <img
            className="element-section-2"
            alt="Element section"
            src="https://c.animaapp.com/oQq6x1yU/img/01-section.png"
          />

          <img
            className="layer-6"
            alt="Layer"
            src="https://c.animaapp.com/oQq6x1yU/img/layer-1-2.svg"
          />
        </div>

        <ElementSection />
        <ElementSectionWrapper />
        <div className="overlap-35">
          <img
            className="element-section-3"
            alt="Element section"
            src="https://c.animaapp.com/oQq6x1yU/img/03-section.png"
          />

          <DivWrapper />
          <div className="layer-wrapper">
            <div className="layer-7">
              <div className="overlap-36">
                <div className="group-86">
                  <div className="overlap-group-12">
                    <img
                      className="group-87"
                      alt="Group"
                      src="https://c.animaapp.com/oQq6x1yU/img/group-75@2x.png"
                    />

                    <img
                      className="group-88"
                      alt="Group"
                      src="https://c.animaapp.com/oQq6x1yU/img/group-76@2x.png"
                    />

                    <img
                      className="vector-66"
                      alt="Vector"
                      src="https://c.animaapp.com/oQq6x1yU/img/vector-86.svg"
                    />

                    <img
                      className="group-89"
                      alt="Group"
                      src="https://c.animaapp.com/oQq6x1yU/img/group-77@2x.png"
                    />

                    <img
                      className="vector-67"
                      alt="Vector"
                      src="https://c.animaapp.com/oQq6x1yU/img/vector-87.svg"
                    />
                  </div>
                </div>

                <img
                  className="vector-68"
                  alt="Vector"
                  src="https://c.animaapp.com/oQq6x1yU/img/vector-88.svg"
                />

                <img
                  className="vector-69"
                  alt="Vector"
                  src="https://c.animaapp.com/oQq6x1yU/img/vector-89.svg"
                />

                <img
                  className="vector-70"
                  alt="Vector"
                  src="https://c.animaapp.com/oQq6x1yU/img/vector-90.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overlap-37">
          <div className="icon-wrapper">
            <div className="icon-6" />
          </div>

          <Div />
        </div>

        <Footer />
        <div className="overlap-38">
          <SectionComponentNode />
          <div className="group-90">
            <div className="overlap-39">
              <div className="group-91">
                <img
                  className="group-92"
                  alt="Group"
                  src="https://c.animaapp.com/oQq6x1yU/img/group-74@2x.png"
                />
              </div>

              <img
                className="vector-71"
                alt="Vector"
                src="https://c.animaapp.com/oQq6x1yU/img/vector-4-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
