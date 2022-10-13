import React from "react";
import Mobile from "./Mobile";
import "./projects.css";
import { transformBetween } from "../../functions/values";
import ProjectSection from "./ProjectSection";

export default function Projects({ isVisible, topOffset, scroll }) {
  const frame = scroll - topOffset;
  const opacity = transformBetween([0, window.innerHeight / 2], [1, 0], frame);
  return (
    <div className="projects">
      {opacity ? (
        <div className="projects__transition" style={{ opacity: opacity }}>
          <h2>Projects</h2>
        </div>
      ) : null}
      <div className="projects__container">
        <div /* ref={ref2} */ className="mobile">
          <Mobile isVisible={isVisible} topOffset={topOffset} scroll={scroll} />
        </div>
        <ul>
          <ProjectSection />
          <ProjectSection />
          <ProjectSection />
          <ProjectSection />
          <ProjectSection />
        </ul>
      </div>
    </div>
  );
}
