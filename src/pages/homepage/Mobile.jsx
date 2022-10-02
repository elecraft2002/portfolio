import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "../../assets/models/Model";
import "./mobile.css";

export default function Mobile({ isVisible, topOffset, scroll }) {
  //const { height, width } = useThree((state) => state.viewport)

  const ref = useRef();
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          <group position={[0, 0, 0]} rotation={[0, 3.14, 0]}>
            <Model isVisible={isVisible} />
          </group>
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  );
}
