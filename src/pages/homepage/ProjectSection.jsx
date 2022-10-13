import React, { useEffect, useRef, useState } from "react";

export default function ProjectSection() {
  const section = useRef(null);
  const [topOffset, setTopOffset] = useState(0);
  useEffect(() => {
    setTopOffset(section.current.offsetTop);
  }, [window.innerWidth]);
  return (
    <li ref={section} style={{ minHeight: "50vh" }}>
      <section>
        <h3>Tablo L4</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          deserunt eaque delectus commodi harum enim dolorum obcaecati, quae
          quod tempore illum accusantium voluptatibus. Quo accusamus provident
          quibusdam rerum magnam sed?
        </p>
      </section>
    </li>
  );
}
