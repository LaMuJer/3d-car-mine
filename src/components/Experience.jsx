import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

const Experience = () => {
    const { sp, pos } = useControls(('spotLight', {
        intensity: { value: .5, min: 0, max: 100, step: 0.1 },
        pos: {
            value: { x: 0, y: 15 },
            step: .01
        }
    }))
    return (
        <>
            <color args={[0, 0, 0]} attach="background" />
            <OrbitControls />
            {/* general lights */}
            <ambientLight intensity={.5} />
            <spotLight position={[pos.x, -pos.y, 0]} {...sp} />

            <mesh >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={'red'} />
            </mesh>
        </>

    )
}

export default Experience
