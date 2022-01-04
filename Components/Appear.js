import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


const Appear = () => {
    const spanRef = useRef(null);
    const tl = gsap.timeline({});
    useEffect(()=>{
        tl.from(spanRef.current, {
            duration: 1.6,
            y: 300,
            ease: "power4.out",
            delay: 1,
            skewY: -24,
            stagger: {
                amount: 1,
            },
        })
    },[tl])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-6/12 h-64 relative overflow-hidden">
                <span className="absolute z-50 left-24" ><h1 className='text-10xl'ref={spanRef}>LAVITA</h1></span>
            </div>
        </div>
    )
}

export default Appear
