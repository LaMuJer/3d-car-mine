import '../App.css'
import { animated, useSpring } from 'react-spring'

const Hero = () => {

    const springs = useSpring({
        from: {
            y : -100
        },
        to: {
            y: 0
        }
    })

    return (
        <animated.div className='hero-container' style={{...springs}}>

            <div className="text-container">
                <div className="text-box">
                    <h1>Hongqi </h1>
                    <h3>Make sure to keep the brightness at maximum to experience the full gloss </h3>
                </div>
            </div>
            <div className="icon-container">
                <div className="icon-box">
                    <a href="https://github.com/laMuJer" target={'_blank'}>
                        <img src="/github.svg" alt="github" />
                    </a>
                    <a href="https://www.facebook.com/staphy.staphy.9/" target={'_blank'}>
                        <img src="/facebook.svg" alt="facebook" />
                    </a>
                    <a href="https://twitter.com/racheldarcy365" target={'_blank'}>
                        <img src="/twitter.svg" alt="twitter" />
                    </a>
                </div>
            </div>
            <div className="credit-container">
                <div className="credit-box">
                    This work is based on
                    <a href="https://sketchfab.com/3d-models/hongqi-h9-bbcbdc697a614c25a5b02ce2a4b2c6ca" target={'_blank'}> hongqi h9</a> by
                    <a href="https://sketchfab.com/a0930582398" target={'_blank'}> Davidson</a>
                </div>
            </div>
        </animated.div>
    )
}

// licensed under
//     < a href = "http://creativecommons.org/licenses/by/4.0/" target = { '_blank'} > CC - BY - 4.0</ >

export default Hero
