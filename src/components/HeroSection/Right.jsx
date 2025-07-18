import React, { useEffect, useRef } from 'react'
import HeroSection from "../../assets/HerSection/HeroSection.png"
import {animate} from "motion"
const Right = () => {
  const imageRef = useRef(null);
  useEffect(()=>{
   animate(
    imageRef.current, 
     { opacity: [0, 1], transform: ["translateX(50px)", "translateX(0)"] },
      { duration: 1.0, easing: "ease-out" }
   )
  }, [])
  return (
    <div  className='ml-2 '>
        <img ref={imageRef} className= 'w-full ' src={HeroSection} alt="" />
        
    </div>
  )
}

export default Right