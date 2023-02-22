import { Environment, Lightformer } from "@react-three/drei"

const Lights = () => {
    return (
        // Ceiling
        <Environment background >
            <Lights />

            <Lightformer intensity={1} position={[0, 0, 2]} scale={10} color="yellow" />

            {/* <color args={[0, 0, 0]} attach='background' /> */}
            {/* general lights */}
            {/* <ambientLight intensity={.5} />
            <spotLight position={[pos.x, -pos.y, 0]} {...sp} /> */}

        </Environment>
    )
}

export default Lights
