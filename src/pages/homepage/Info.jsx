import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./info.css";

export default function Info() {
  return (
    <>
      <div className="info__square__container">
        <Parallax rotate={[-20, 20]} translateY={["-10px", "26px"]}>
          <div className="info__square"></div>
        </Parallax>
      </div>
      <div className="info">
        <div className="info__container">
          <h2>Web design, jak jste ho ještě neviděli</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            recusandae velit, animi quidem aperiam alias odio fuga. Dolorum fuga
            quos, quae aut praesentium reprehenderit pariatur, excepturi
            recusandae provident architecto quas.
          </p>
        </div>
      </div>
    </>
  );
}
