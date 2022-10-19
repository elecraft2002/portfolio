import React, { useEffect, useRef, useState } from "react";
import Mobile from "./Mobile";
import "./projects.css";
import { transformBetween } from "../../functions/values";
import ProjectSection from "./ProjectSection";
import Wipe from "./Wipe";
import ParallaxSprites from "./ParallaxSprites";
import Pipe from "./Pipe";

export default function Projects({ isVisible, topOffset, scroll }) {
  const frame = scroll - topOffset;
  const opacity = transformBetween([0, window.innerHeight / 2], [1, 0], frame);
  const projects = ["", "", "", "", "", ""];
  const [sections, setSections] = useState([]);
  const [height, setHeight] = useState([]);
  const list = useRef(null);
  useEffect(() => {
    setSections(() => {
      return [...list.current.children].map((el) => {
        return el.offsetTop;
      });
    });
    setHeight(list.current.clientHeight);
  }, [window.innerWidth]);
  return (
    <div className="projects">
      {opacity ? (
        <div className="projects__transition" style={{ opacity: opacity }}>
          <h2>Projects</h2>
        </div>
      ) : null}
      <div className="projects__container">
        {/* <ParallaxSprites height={height} topOffset={topOffset} /> */}
        <div /* ref={ref2} */ className="mobile">
          {/* <Wipe topOffset={topOffset} scroll={scroll} height={height} /> */}
          <Mobile
            isVisible={isVisible}
            topOffset={topOffset}
            scroll={scroll}
            sections={sections}
          />
        </div>
        <Pipe />
        <ul className="projects__list" ref={list}>
          {projects.map((projects, i) => {
            return (
              <ProjectSection
                key={i}
                id={i}
                setSections={setSections}
                sections={sections}
                frame={frame}
              />
            );
          })}
        </ul>
        <button className="button button--projects">Více projektů</button>
      </div>
    </div>
  );
}
