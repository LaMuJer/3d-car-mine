import { OrbitControls } from '@react-three/drei'

const Experience = () => {
    return (
        <>  
            <color args={[0,0,0]} attach="background" />
            <OrbitControls />
            <ambientLight />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color={'red'} />
            </mesh>
        </>

    )
}

export default Experience
