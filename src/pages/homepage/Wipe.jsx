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
        [-3 * window.innerWidth, window.innerWidth],
        frame
      )
    );
  }, [frame, window.innerWidth]);
  return (
    <div className="wipe">
      <WipeSVG style={{ transform: `translate(${position}px)` }} />
    </div>
  );
}
