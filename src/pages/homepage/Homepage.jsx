import React, { useEffect, useRef, useState } from "react";
import Logo from "../../components/logo/Logo";
import { ReactComponent as ScrollIcon } from "../../assets/svgs/scroll.svg";
import "./homepage.css";
import AboutSection from "./AboutSection";
import Info from "./Info";
import Nav from "../../components/nav/Nav";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxSprites from "./ParallaxSprites";
import Line from "./Line";
import { useIsInViewport } from "../../functions/Viewport";
import Projects from "./Projects";

export default function Homepage({ scroll }) {
  //console.log(scroll);

  const [topOffset, setTopOffset] = useState(0);
  const [mobileTopOffset, setMobileTopOffset] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    //console.log(ref1);
    setHeight(ref1.current.clientHeight);
    setTopOffset(ref1.current.offsetTop);
    //setMobileTopOffset(ref2.current.offsetTop);
    //console.log(ref2.current);
  }, [window.screen.width]);
  //console.log(scroll, topOffset);
  return (
    <ParallaxProvider>
      <div style={{ height: "500vh" }}>
        <Nav />
        {scroll <= topOffset ? <Line /> : null}
        <div>
          <div className="top_section">
            <Logo />
            <div className="scroll_icon--fadeIn">
              <ScrollIcon className="scroll_icon" />
            </div>
          </div>
          <AboutSection />
          <Info />
        </div>
        <div ref={ref1}>
          <Projects
            isVisible={useIsInViewport(ref1)}
            topOffset={mobileTopOffset}
            scroll={scroll}
          />
        </div>
      </div>
    </ParallaxProvider>
  );
}
