import { Center, ContactShadows, Environment, PerformanceMonitor } from '@react-three/drei'
import { act, useFrame } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import Lights from './Lights'
import { Model } from './Scene'
import * as THREE from 'three'

const Experience = ({ active }) => {

    const [degraded, degrade] = useState(false)

    // Camera Movement
    let v = new THREE.Vector3() 
    useFrame((state, delta) => {
        const t = state.clock.elapsedTime
        state.camera.position.lerp(v.set(
            3 + Math.sin(t / 5),
            1,
            4.1 + Math.cos(t / 5) / 2
        ), .5)
        state.camera.lookAt(0, 0, 0)
    })

    // Animations


    return (
        <>
            <Suspense>
                {/* Model */}
                <Center>
                    <Model active={active} />
                </Center>
                {/* Lighting */}
                <Environment background resolution={256} blur={1} frames={degraded ? 1 : Infinity} >
                    <Lights />
                </Environment>
            </Suspense>

            <PerformanceMonitor onDecline={() => degrade(true)} />
            <ContactShadows position={[0, -1.0, 0]} scale={30} resolution={256} />

        </>
    )
}

export default Experience
