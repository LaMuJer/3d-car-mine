import { Suspense } from "react"
import {Canvas} from '@react-three/fiber'
import Experience from "./components/Experience"

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Experience />
      </Canvas>
    </Suspense>
  )
}

export default App
