import React, { useEffect, useState } from "react";
import { transformBetween } from "../../functions/values";
import { ReactComponent as WipeSVG } from "../../assets/svgs/wipe.svg";

export default function Wipe({ topOffset, scroll, height }) {
  const frame = scroll - topOffset;
  const [position, setPosition] = useState();
  useEffect(() => {
    setPosition(
      transformBetween(
        [window.innerHeight, height - window.innerHeight],
        [0, window.innerWidth * 3],
        frame
      )
    );
  }, [frame, window.innerWidth]);
  return (
    <div style={{ transform: `translate(${position}px)` }} className="wipe">
      <WipeSVG />
    </div>
  );
}
