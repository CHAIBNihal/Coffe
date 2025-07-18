import { animate } from 'motion'
import { useEffect, useRef } from 'react'

const Left = () => {
  const oneRef = useRef(null)
  useEffect(()=>{
    animate(
      oneRef.current, 
       { opacity: [0, 1], transform: ["translateX(50px)", "translateX(0)"] },
      { duration: 1.0, easing: "ease-out" }
    )
  },[])
  return (
    <div  className="grid  py-10 px-4 gap-4 max-w-xl mx-auto">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-500 to-[#A0583C] bg-clip-text text-transparent"
      >
        CoffeOverDose
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-semibold">
        Where caffeine meets euphoria.
      </p>

      <p ref={oneRef}  className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed">
        One sip and your brain lights up.<br />
        Here, we don&#39;t just serve coffee.<br />
        We serve bold awakenings, cozy vibes, and a little rush of joy in every cup.
      </p>
    </div>
  )
}

export default Left
