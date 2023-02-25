import { useProgress } from '@react-three/drei'
import { animated, useSpring } from 'react-spring'
import '../Loading.css'

const LoadingComponent = ({active, progress}) => {

    // const { active, progress, errors, item, loaded, total } = useProgress()
    const springs = useSpring({
        from: { opacity: 1 },
        to: {
            opacity: 0
        }
    })

    return active ? (
        <animated.div className='loading-container' style={{...springs}}>
            <h1>{Math.floor(progress)}</h1>
        </animated.div>
    ) : null
}

export default LoadingComponent
