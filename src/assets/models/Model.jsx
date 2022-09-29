import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/iphone.gltf");
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="body" userData={{ name: "body" }}>
          <mesh
            name="mesh_0"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={materials.back}
          />
          <mesh
            name="mesh_0_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_1.geometry}
            material={materials.antenna}
          />
          <mesh
            name="mesh_0_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_2.geometry}
            material={materials.body_metall}
          />
          <mesh
            name="mesh_0_3"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_3.geometry}
            material={materials.back_glass}
          />
          <mesh
            name="mesh_0_4"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_4.geometry}
            material={materials.screen}
          />
          <mesh
            name="mesh_0_5"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_5.geometry}
            material={materials.black_frame}
          />
          <mesh
            name="mesh_0_6"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_6.geometry}
            material={materials.chrom}
          />
          <mesh
            name="mesh_0_7"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0_7.geometry}
            material={materials.camera_body}
          />
        </group>
        <mesh
          name="Bolt"
          castShadow
          receiveShadow
          geometry={nodes.Bolt.geometry}
          material={materials.chrom}
          position={[-0.01, -0.07, 0]}
          rotation={[0, 0, Math.PI]}
          userData={{ name: "Bolt" }}
        />
        <group
          name="cameras"
          position={[-0.01, 0.05, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "cameras" }}
        >
          <mesh
            name="mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2.geometry}
            material={materials.chrom}
          />
          <mesh
            name="mesh_2_1"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_1.geometry}
            material={materials.chrome_frame}
          />
          <mesh
            name="mesh_2_2"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_2.geometry}
            material={materials.glass_cam}
          />
          <mesh
            name="mesh_2_3"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_3.geometry}
            material={materials.camera_body}
          />
          <mesh
            name="mesh_2_4"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_4.geometry}
            material={materials.lenses}
          />
          <mesh
            name="mesh_2_5"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_5.geometry}
            material={materials.flash}
          />
          <mesh
            name="mesh_2_6"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_6.geometry}
            material={materials.back}
          />
          <mesh
            name="mesh_2_7"
            castShadow
            receiveShadow
            geometry={nodes.mesh_2_7.geometry}
            material={materials.black_frame}
          />
        </group>
        <mesh
          name="grill_bottom"
          castShadow
          receiveShadow
          geometry={nodes.grill_bottom.geometry}
          material={materials.chrom}
          position={[-0.02, -0.07, 0]}
          userData={{ name: "grill bottom" }}
        />
        <mesh
          name="logo"
          castShadow
          receiveShadow
          geometry={nodes.logo.geometry}
          material={materials.logo}
          position={[0, 0, 0.01]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          userData={{ name: "logo" }}
        />
        <mesh
          name="grill"
          castShadow
          receiveShadow
          geometry={nodes.grill.geometry}
          material={materials.black_frame}
          position={[0, 0.07, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "grill" }}
        />
        <mesh
          name="grill_body"
          castShadow
          receiveShadow
          geometry={nodes.grill_body.geometry}
          material={materials.black_frame}
          userData={{ name: "grill_body" }}
        />
        <mesh
          name="screen"
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials.front_glass}
          userData={{ name: "screen" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/iphone.gltf");