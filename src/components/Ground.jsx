import { MeshReflectorMaterial } from "@react-three/drei"
import { useControls } from "leva"

const Ground = () => {
    const controls = useControls("ground", {
        mixBlur: { value: 0, min: 0, max: 1, step: 0.001 },
        mixStrength: { value: 3, min: 0, max: 100, step: 0.1 },
        mixContrast: { value: .56, min: 0, max: 10, step: 0.001 },
        mirror: { value: 0, min: 0, max: 1, step: 0.001 },
        depthScale: { value: 0, min: 0, max: 10, step: 0.001 },
        minDepthThreshold: { value: 1, min: 0, max: 10, step: 0.001 },
        maxDepthThreshold: { value: 1, min: 0, max: 10, step: 0.001 },
        depthToBlurRatioBias: { value: 1, min: 0, max: 10, step: 0.001 },
        distortion: { value: 1, min: 0, max: 10, step: 0.001 },
        reflectorOffset: { value: 0, min: 0, max: 10, step: 0.001 },
        roughness: { value: .2, min: 0, max: 10, step: 0.01 },
        metalness: { value: .3, min: 0, max: 10, step: 0.01 },
        envMapIntensity: { value: .1, min: 0, max: 10, step: 0.01 },
    })
    return (
        <mesh castShadow receiveShadow rotation-x={-Math.PI * .5}
            position={[0, -1.1, 0]}
        >
            <planeGeometry args={[30, 30]} />
            {/* dithering=true */}
            <MeshReflectorMaterial
                {...controls}
                blur={[300, 100]}
                resolution={256}
                // normalMap={normal}
                // roughnessMap={roughness}
                // normalScale={[.15, .15]}
            />
        </mesh>
    )
}

export default Ground
