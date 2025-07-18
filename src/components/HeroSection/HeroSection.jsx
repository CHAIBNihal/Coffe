import React from 'react'
import Left from './Left'
import Right from './Right'

const HeroSection = () => {
  return (
    <section className="relative mx-3 w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-4 md:px-20 rounded-b-3xl shadow-lg shadow-neutral-900">
      <Left />
      <Right />
    </section>
  )
}

export default HeroSection
