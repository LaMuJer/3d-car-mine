import { useGLTF } from "@react-three/drei"
import { useLayoutEffect } from "react"

const CarModel = (props) => {

    const { scene, materials, nodes } = useGLTF('/model/scene.gltf')

    // useLayoutEffect(() => {
    //     // code
    //     Object.values(nodes).forEach((node) => node.isMesh && ())
    // }, [nodes, materials])


    console.log(nodes)

    return (
        <>            
            <primitive object={scene} {...props} />
        </>
    )
}

export default CarModel
