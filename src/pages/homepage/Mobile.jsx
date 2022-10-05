import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Model } from "../../assets/models/Model";
import "./mobile.css";
import { transformBetween } from "../../functions/values";

export default function Mobile({ isVisible, topOffset, scroll }) {
  const ref = useRef(null);
  //const { height, width } = useThree((state) => state.viewport)
  if (!(isVisible && scroll >= window.innerHeight)) return null;

  return (
    <Canvas
      controls={ref}
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50, position: [0, -10, 0] }}
    >
      <Suspense fallback={null}>
        {/* <Stage
          preset="rembrandt"
          intensity={1}
          environment="city"
        > */}
        <group
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={0.2}
        >
          <Model isVisible={isVisible} topOffset={topOffset} scroll={scroll} />
        </group>
        <Environment preset="city"/>
        <ambientLight position={[-10, -10, 0]} />
{/*         <pointLight position={[20, -10, 10]} intensity={10} />
 */}        {/* </Stage> */}
      </Suspense>
      {<OrbitControls ref={ref} />}
    </Canvas>
  );
}
