import { Environment, Float, Lightformer, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef } from 'react'
import { Model } from './Scene'

const Experience = () => {

    function LightFun({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
        const groupRef = useRef()

        console.log(groupRef.current)

        useFrame((state, delta) => (
            groupRef.current.position.z += delta * 10
        ))

        return (
            <>
                <Lightformer
                    intensity={.75}
                    rotation-x={Math.PI / 2}
                    position={[0, 5, -9]}
                    scale={[10, 10, 1]}
                // color="yellow"
                />
                <group rotation={[0, .5, 0]} >
                    <group ref={groupRef}>
                        {positions.map((x, i) => (
                            <Lightformer
                                key={i}
                                intensity={2}
                                rotation={[Math.PI / 2, 0, 0]}
                                position={[x, 4, i * 4.5]}
                                scale={[3, 3, 1]}
                                form='circle'
                                color="yellow"
                            />
                        ))}
                    </group>
                </group>                
            </>
        )
    }

    return (
        <>
            <OrbitControls />
            <Model />
            <Environment background resolution={256} blur={0}  >
                <LightFun />
            </Environment>
        </>
    )
}

export default Experience
