import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export default function ProjectSection({ id, setSections, sections, frame }) {
  const section = useRef(null);
  const [isActive, setActiveState] = useState(0);
  useEffect(() => {
    //console.log(section.current.offsetTop > frame + window.innerHeight / 2);
    setActiveState(section.current.offsetTop < frame + window.innerHeight / 2);
  }, [window.innerWidth, frame]);
  return (
    <li className="project__description__container">
      <section
        ref={section}
        className={
          "project__description " + (isActive
            ? "project__description--active"
            : "")
        }
      >
        <h3>Tablo L4</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          deserunt eaque delectus commodi harum enim dolorum obcaecati, quae
          quod tempore illum accusantium voluptatibus. Quo accusamus provident
          quibusdam rerum magnam sed?
        </p>
        <button className="button">Více</button>
        {/* <div className="project__sprite">
          <Parallax rotate={["0deg", "180deg"]}>
            <span>+</span>
          </Parallax>
        </div> */}
      </section>
    </li>
  );
}
