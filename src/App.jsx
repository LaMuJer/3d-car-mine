import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import Experience from "./components/Experience"
import Hero from "./html/Hero"
import LoadingComponent from "./html/LoadingComponent"

const App = () => {
  return (
    <>
      <LoadingComponent />
        <Hero />
        <Canvas shadows={false} >
          <Experience active={''} />
        </Canvas>
    </>
  )
}

export default App
