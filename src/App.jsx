import React, { useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Pipe from "./pages/homepage/Pipe";
import Projects from "./pages/homepage/Projects";
function App() {
  //Parallax provider
  const [scroll, setScrollOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage scroll={scroll} />} />
      <Route path="/portfolio" element={<Homepage scroll={scroll} />} />
      <Route path="/test" element={<Pipe />} />
      <Route path="*" element={"Error"} />
    </Routes>
  );
}

export default App;
