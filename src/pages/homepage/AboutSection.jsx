import React, { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { ReactComponent as Triangle } from "../../assets/svgs/triangle.svg";
import { useIsInViewport } from "../../functions/Viewport";
import "./aboutSection.css";

export default function AboutSection() {
  const ref1 = useRef(null);

  return (
    <div ref={ref1} className="about">
      <div className="about__container">
        <Parallax translateY={[-100, 50]}>
          <h2 className="section__heading">O mně</h2>
        </Parallax>
        <div className="about__grid">
          <div className="about__cell">
            <p className="about__creator">Vojtík Suchánek</p>
          </div>
          <div className="about__cell">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
        <button className="button">Více</button>
        <Triangle className="about__triangle" />
      </div>
    </div>
  );
}
