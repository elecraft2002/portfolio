import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "./ParallaxSprites.css";

export default function ParallaxSprites({ height, topOffset }) {
  const [sprites, setSprites] = useState([]);
  console.log(height);
  useEffect(() => {
    let newSprites = [];
    const width = window.innerWidth;
    const length = (width * height) / 50000;
    const spriteVersions = ["☺", "☻", "♥", "♦", "♣", "•", "○", "▲"];
    for (let i = 0; i < length; i++) {
      const percentage = i / length;
      const posX = Math.random() * 100;
      const posY = percentage * height;
      const sprite =
        spriteVersions[Math.floor(Math.random() * spriteVersions.length)];
      const speed = Math.random() * 15;
      newSprites.push({ posX, posY, sprite, speed });
    }
    setSprites(newSprites);
  }, [height]);

  return (
    <>
      {sprites.map((sprite, i) => {
        return (
          <span
            className="parallax_sprite"
            key={i}
            style={{
              transform: `translate(${sprite.posX}vw , ${
                sprite.posY + topOffset
              }px)`,
            }}
          >
            <Parallax speed={sprite.speed}>{sprite.sprite}</Parallax>
          </span>
        );
      })}
    </>
  );
}
