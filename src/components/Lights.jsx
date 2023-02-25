import { Environment, Lightformer, Float } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Color, Depth, LayerMaterial } from "lamina"
import { useRef } from "react"
import * as THREE from 'three'

const Lights = ({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) => {

    const groupRef = useRef()

    useFrame((state, delta) =>
        (groupRef.current.position.z += delta * 5) > 20 && (groupRef.current.position.z = -60)
    )

    return (
        <>
            {/* Ceiling */}
            <Lightformer
                intensity={.75}
                rotation-x={Math.PI / 2}
                position={[0, 5, -9]}
                scale={[10, 10, 1]}
                castShadow
                color="#0d00a4"
            />
            <group rotation={[0, .5, 0]} >
                <group ref={groupRef}>
                    {positions.map((x, i) => (
                        <Lightformer
                            key={i}
                            intensity={2}
                            rotation={[Math.PI / 2, 0, 0]}
                            position={[x, 6, i * 4.5]}
                            scale={[5, 2, 1]}
                            form='circle'
                            color="#e7d8f7"
                            castShadow
                        />
                    ))}
                </group>
            </group>

            {/* Sides */}
            <Lightformer
                intensity={5}
                rotation-y={Math.PI / 2}
                position={[-2, 1, 1]}
                scale={[20, .5, 1]}
                color='#140152'
            />

            <Lightformer
                intensity={1}
                rotation-y={Math.PI / 2}
                position={[1, 1, 1]}
                scale={[5, .5, 1]}
                color='#ffd400'
            />

            <Lightformer
                intensity={10}
                rotation-y={Math.PI / 2}
                position={[1, 4, -5]}
                scale={[20, .5, 1]}
                color='#f20089'
            />

            <Lightformer
                intensity={1}
                rotation-y={Math.PI / 2}
                position={[2, -1, 2]}
                scale={[3, 5, 0]}
                color='#fff'
            />

            <Lightformer
                intensity={1}
                rotation-y={Math.PI / 2}
                position={[-5, .1, 0]}
                scale={[10, 1, 0]}
                color='#ff0a54'
            />

            <Float speed={5} floatIntensity={2}>
                <Lightformer
                    form='ring'
                    intensity={.5}
                    rotation-y={Math.PI / 2}
                    position={[-5, 2, -5]}
                    scale={1}
                    target={[0, 0, 0]}
                    color='#f0fff1'
                />
            </Float>

            {/* Background */}
            <mesh scale={10}>
                <sphereGeometry args={[1, 64, 64]} />
                <LayerMaterial
                    side={THREE.BackSide}
                >
                    <Depth
                        colorA='#07f49e'
                        colorB='#42047e' mode='normal'
                        near={0}
                        far={100}
                        origin={[100, 100, 100]}
                    />
                </LayerMaterial>
            </mesh>
        </>
    )

}

export default Lights
