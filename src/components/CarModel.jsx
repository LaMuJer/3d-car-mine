import { useGLTF } from "@react-three/drei"

const CarModel = () => {

    const model = useGLTF('/model/scene.gltf')

    console.log(model)

    return (
        // <primitive object={} />
        <mesh>
            <boxGeometry  />
            <meshBasicMaterial color={'red'} />
        </mesh>
    )
}

export default CarModel
