'use client';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { Mesh } from "three";

export function Planeta3d({textura}:{textura:string}){
    return (
                
                    <Canvas>
                        <ambientLight intensity={2}/>
                        <directionalLight position={[3, 2, 2]}/>
                        <Planeta textura={textura} />   
                    </Canvas>     
                     
    );
}

function Planeta({textura}:{textura:string}){
    
    const mesh = useRef<Mesh | null>(null);
    useFrame((state, delta)=>{
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.2;
        }
    });

    const texture = useLoader(TextureLoader, textura)
    return(
        <mesh ref={mesh}>
            <sphereGeometry args={[2.5]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}