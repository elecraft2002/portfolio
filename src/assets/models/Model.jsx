import React from "react";
import { useGLTF, Merged } from "@react-three/drei";
import image from "../imgs/klarka.jpg";
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/iphone13_1.gltf");
  const [texture] = useLoader(TextureLoader, [image]);
  const imgRatio = texture.image.width / texture.image.height;
  const planeRatio = 9 / 19.5;
  texture.wrapS = THREE.RepeatWrapping; // THREE.ClampToEdgeWrapping;
  texture.repeat.x = planeRatio / imgRatio;
  texture.offset.x = -0.5 * (planeRatio / imgRatio - 1);
  if (props.isVisible)
    return (
      <group {...props} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="iPhone13ProMaxfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
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
                    />
                    <mesh
                      name="Body_Wallpaper_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body_Wallpaper_0.geometry}
                      material={materials.Wallpaper}
                    >
                      <meshBasicMaterial
                        map={texture}
                        side={THREE.DoubleSide}
                      />
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
        </group>
      </group>
    );
  return null;
}

useGLTF.preload("/iphone13_1.gltf");
