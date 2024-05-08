'use client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { Mesh } from "three";

export default function prueba(){
    return (
        <main className="flex min-h-screen flex-col items-center md:p-12 p-8 pt-24">
            <div className="h-80 mt-20 w-80">  
                <Canvas>
                    <ambientLight intensity={2}/>
                    <directionalLight position={[3, 2, 2]}/>
                    <Cubo />   
                </Canvas>            
            </div>
        </main>
    );
}

function Cubo(){
    
    const mesh = useRef<Mesh | null>(null);
    useFrame((state, delta)=>{
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.2;
        }
    });

    const texture = useLoader(TextureLoader, "/marte-textura.jpg")
    return(
        <mesh ref={mesh}>
            <sphereGeometry args={[2.5]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}