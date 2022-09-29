import React, { useRef, useState } from "react";
import { ReactComponent as Text } from "./Text.svg";
import "./logo.css";
import { useIsInViewport } from "../../functions/Viewport";
import { Parallax } from "react-scroll-parallax";

export default function Logo() {
  return (
    <Parallax speed={-10} scale={[1,.5]} startScroll={true}>
      <div className="logo__container">
        <Text />
        <div className="heading__container">
          <h1>Vojtík Design</h1>
        </div>
      </div>
    </Parallax>
  );
}
