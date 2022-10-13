import React, { useEffect, useRef, useState } from "react";
import { useGLTF, Html, Plane } from "@react-three/drei";
import image from "../imgs/tablo.jpg";
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { transformBetween } from "../../functions/values";
import { useSpring, animated, config } from "@react-spring/three";
import gsap from "gsap";

export function Model({ isVisible, topOffset, scroll, mousePosition }) {
  const frame = scroll - topOffset;
  const { nodes, materials } = useGLTF("./iphone13_1.gltf");
  const [texture] = useLoader(TextureLoader, [image]);
  const [fitScale, setFitScale] = useState(1);
  useEffect(() => {
    setFitScale(() => window.innerWidth / 650 + 100 / window.innerWidth);
  }, [window.innerWidth]);
  const scale = transformBetween(
    [window.innerHeight / 4, window.innerHeight / 2],
    [fitScale, window.innerHeight / 2000],
    frame
  );
  const positionX = transformBetween(
    [window.innerHeight / 4, window.innerHeight / 2],
    [0, -15],
    frame
  );
  const rotationY = transformBetween(
    [window.innerHeight / 2, window.innerHeight / 2],
    [0, -0.3],
    frame
  );
  const rotationZ = transformBetween(
    [window.innerHeight / 2, window.innerHeight / 2],
    [0, 0.1],
    frame
  );
  const shadowOpacity = transformBetween(
    [window.innerHeight - window.innerHeight / 4, 20],
    [0, 0.2],
    frame
  );

  const imgRatio = texture.image.width / texture.image.height;
  const planeRatio = 9 / 19.5;
  texture.wrapS = THREE.RepeatWrapping; // THREE.ClampToEdgeWrapping;
  texture.repeat.x = planeRatio / imgRatio;
  texture.offset.x = -0.5 * (planeRatio / imgRatio - 1);
  const model = useRef(null);
  const { positionEased, rotationEased, scaleEased, colorEased } = useSpring({
    positionEased: [positionX, 0, 0],
    rotationEased: [
      -(mousePosition[1] - window.innerHeight / 2) / 10000,
      rotationY + (mousePosition[0] - window.innerWidth / 2) / 10000,
      rotationZ - (mousePosition[1] - window.innerHeight / 2) / 10000,
    ],
    scaleEased: scale,
    colorEased:
      frame > window.innerHeight - window.innerHeight / 3 ? "white" : "#0d1b2a",
    config: config.default,
  });
  //console.log(mousePosition);
  if (!(isVisible && scroll >= window.innerHeight)) return null;
  return (
    <group dispose={null}>
      <group name="Scene">
        <animated.mesh
          position={positionEased}
          rotation={rotationEased}
          scale={scaleEased}
        >
          <group
            name="Sketchfab_model"
            /*  rotation={[
              -(mousePosition[1] - window.innerHeight / 2) / 10000,
              rotationY + (mousePosition[0] - window.innerWidth / 2) / 10000,
              rotationZ - (mousePosition[1] - window.innerHeight / 2) / 10000,
            ]} */
            /* position={[positionX, 0, 0]} */
            //position={smoothAnimation.position}
            ref={model}
          >
            <group name="iPhone13ProMaxfbx" /* scale={scale} */>
              <group name="RootNode">
                <group name="Frame" scale={100}>
                  <group name="Body">
                    <mesh
                      name="Body_Bezel_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Bezel_0.geometry}
                      material={materials.Bezel}
                    />
                    <mesh
                      name="Body_Camera_Glass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Camera_Glass_0.geometry}
                      material={materials.Camera_Glass}
                    />
                    <mesh
                      name="Body_Material_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Material_0.geometry}
                      material={materials["Material.001"]}
                    >
                      <meshBasicMaterial reflectivity={0.1} />
                    </mesh>
                    <mesh
                      name="Body_Wallpaper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Wallpaper_0.geometry}
                      material={materials.Wallpaper}
                    >
                      <animated.meshStandardMaterial
                        color={colorEased}
                        map={texture}
                        side={THREE.DoubleSide}
                      />
                      {/* <Html className="screen" transform>
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            background: "red",
                          }}
                        >
                          Vojtík{" "}
                        </div>
                      </Html> */}
                    </mesh>
                    <mesh
                      name="Body_Lens_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Lens_0.geometry}
                      material={materials.Lens}
                    />
                    <mesh
                      name="Body_Mic_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Mic_0.geometry}
                      material={materials.material}
                    />
                  </group>
                  <group name="Body001">
                    <mesh
                      name="Body001_Screen_Glass_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body001_Screen_Glass_0.geometry}
                      material={materials.Screen_Glass}
                    />
                  </group>
                  <group name="Button">
                    <mesh
                      name="Button_Frame_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Button_Frame_0.geometry}
                      material={materials.Frame}
                    />
                  </group>
                  <group name="Circle003">
                    <mesh
                      name="Circle003_Frame_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Circle003_Frame_0.geometry}
                      material={materials.Frame}
                    />
                  </group>
                  <mesh
                    name="Frame_Antenna_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Frame_Antenna_0.geometry}
                    material={materials.Antenna}
                  />
                  <mesh
                    name="Frame_Frame2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Frame_Frame2_0.geometry}
                    material={materials.Frame2}
                  />
                  <mesh
                    name="Frame_Frame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Frame_Frame_0.geometry}
                    material={materials.Frame}
                  />
                  <mesh
                    name="Frame_Port_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Frame_Port_0.geometry}
                    material={materials.Port}
                  />
                  <mesh
                    name="Frame_Mic_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Frame_Mic_0.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
            </group>
          </group>
        </animated.mesh>
        <Plane
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -20, 0]}
          visible={shadowOpacity ? true : false}
          args={[100, 100]}
        >
          <shadowMaterial transparent opacity={shadowOpacity} />
          {/* <meshStandardMaterial
            attach="material"
            color="#fff"
            opacity={1}
            transparent={true}
          /> */}
        </Plane>
      </group>
    </group>
  );
}

useGLTF.preload("./iphone13_1.gltf");
