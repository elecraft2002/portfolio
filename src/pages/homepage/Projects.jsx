import React from "react";
import Mobile from "./Mobile";
import "./projects.css";

export default function Projects({ isVisible, topOffset, scroll }) {
  return (
    <div className="projects">
      <div className="projects__transition">
        <h2>Projects</h2>
      </div>
      <div className="projects__container">
        <div /* ref={ref2} */ className="mobile">
          <Mobile isVisible={isVisible} topOffset={topOffset} scroll={scroll} />
        </div>
      </div>
    </div>
  );
}
