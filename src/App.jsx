import { Suspense } from "react"
import { act, Canvas } from '@react-three/fiber'
import Experience from "./components/Experience"
import Hero from "./html/Hero"
import LoadingComponent from "./html/LoadingComponent"
import { useProgress } from "@react-three/drei"

const App = () => {

  const {active, progress} = useProgress()

  return (
    <>
      <LoadingComponent active={active} progress={progress} />
        <Hero />
        <Canvas shadows={false} >
          <Experience active={active} />
        </Canvas>
    </>
  )
}

export default App
