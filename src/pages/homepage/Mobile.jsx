import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  softShadows,
  Stage,
} from "@react-three/drei";
import { Model } from "../../assets/models/Model";
import * as THREE from "three";
import "./mobile.css";
import { transformBetween } from "../../functions/values";
/* softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11, // Rings (default: 11) must be a int
}); */
export default function Mobile({ isVisible, topOffset, scroll, sections }) {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState([
    window.innerWidth / 2,
    window.innerHeight / 2,
  ]);
  //const { height, width } = useThree((state) => state.viewport)
  const updateMousePosition = (e) => {
    setMousePosition([e.clientX, e.clientY]);
  };

  return (
    <Canvas
      controls={ref}
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50, position: [0, -10, 0] }}
      onMouseMove={updateMousePosition}
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
          <Model
            isVisible={isVisible}
            topOffset={topOffset}
            scroll={scroll}
            mousePosition={mousePosition}
            sections={sections}
          />
        </group>
        <Environment preset="city" />
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}
        {/* <ambientLight castShadow position={[10, 10, 10]} rotation={[1, 1, 1]} /> */}
        <directionalLight
          rotation={[1, 1, 1]}
          position={[0, 2, 20]}
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <pointLight position={[20, -10, 20]} intensity={1} />

        {/* </Stage> */}
      </Suspense>
      {/* <OrbitControls ref={ref} /> */}
    </Canvas>
  );
}
