/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import image from "../imgs/vojtik.webp"
import { useLoader } from "@react-three/fiber/dist/react-three-fiber.cjs";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Model(props) {
  
  //const [texture] = useTexture([image])
  const [texture] = useLoader(TextureLoader, [image])
  const { nodes, materials } = useGLTF("/iphone.gltf");
  return (
    <group {...props} dispose={null}>
      <group userData={{ name: "body" }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.antenna}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials.body_metall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials.back_glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials.screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials.black_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials.chrom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials.camera_body}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt.geometry}
        material={materials.chrom}
        position={[-0.01, -0.07, 0]}
        rotation={[0, 0, Math.PI]}
        userData={{ name: "Bolt" }}
      />
      <group
        position={[-0.01, 0.05, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "cameras" }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2.geometry}
          material={materials.chrom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_1.geometry}
          material={materials.chrome_frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_2.geometry}
          material={materials.glass_cam}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_3.geometry}
          material={materials.camera_body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_4.geometry}
          material={materials.lenses}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_5.geometry}
          material={materials.flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_6.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2_7.geometry}
          material={materials.black_frame}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill_bottom.geometry}
        material={materials.chrom}
        position={[-0.02, -0.07, 0]}
        userData={{ name: "grill bottom" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[0, 0, 0.01]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        userData={{ name: "logo" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill.geometry}
        material={materials.black_frame}
        position={[0, 0.07, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "grill" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grill_body.geometry}
        material={materials.black_frame}
        userData={{ name: "grill_body" }}
      />
      <mesh
        castShadow
        map={texture}
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials.front_glass}
        userData={{ name: "screen" }}
      />
    </group>
  );
}

useGLTF.preload("/iphone.gltf");
