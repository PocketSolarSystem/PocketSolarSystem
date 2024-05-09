"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

export function Planeta3d({ textura }: { textura: string }) {
  return (
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />
      <Planeta textura={textura} />
    </Canvas>
  );
}

function Planeta({ textura }: { textura: string }) {
  const mesh1 = useRef<Mesh | null>(null);
  const mesh2 = useRef<Mesh | null>(null);
  useFrame((state, delta) => {
    if (mesh1.current) {
      mesh1.current.rotation.y += delta * 0.2;
    }

    if (mesh2.current) {
      mesh2.current.rotation.z += delta * 0.2;
    }
  });

  const texture1 = useLoader(TextureLoader, textura);
  const texture2 = useLoader(
    TextureLoader,
    "/texturas/anillo-saturno-textura.png"
  );
  texture2.rotation = Math.PI / 2;
  if (textura === "/texturas/Saturno-textura.jpg") {
    return (
      <>
        <mesh ref={mesh1} rotation-x={Math.PI / 20}>
          <sphereGeometry args={[1.3, 64, 32]} />
          <meshStandardMaterial map={texture1} />
        </mesh>
        <mesh rotation-x={Math.PI / 1.8} ref={mesh2}>
          <torusGeometry args={[2.5, 0.5, 2, 200]} />
          <meshStandardMaterial map={texture2} />
        </mesh>
      </>
    );
  } else if (textura === "/texturas/Urano-textura.jpg") {
    return (
      <>
        <mesh ref={mesh1} rotation-x={Math.PI / 20}>
          <sphereGeometry args={[1.7, 64, 32]} />
          <meshStandardMaterial map={texture1} />
        </mesh>
        <mesh rotation-x={Math.PI / 1.8} ref={mesh2}>
          <torusGeometry args={[3, 0.01, 2, 200]} />
          <meshStandardMaterial map={texture2} />
        </mesh>
      </>
    );
  } else {
    return (
      <mesh ref={mesh1}>
        <sphereGeometry args={[2.5, 64, 32]} />
        <meshStandardMaterial map={texture1} />
      </mesh>
    );
  }
}
