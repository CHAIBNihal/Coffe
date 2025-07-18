import React from 'react'
import { MenuSection } from '../../constants/menu'

// Les options du menu


const Form = () => {
  return (
    <div className=" border border-neutral-700/80 backdrop-blur-lg rounded-4xl shadow-lg shadow-neutral-800 max-w-md mx-auto">
      <p className="text-center text-2xl p-4 font-extrabold bg-gradient-to-r from-neutral-500 to-[#C08267] bg-clip-text text-transparent">
        Feel Free to Buy Your Coffee
      </p>

      <section className="p-6 md:p-10 space-y-4">
        <div className="p-2 border border-neutral-600 rounded-3xl">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent w-full outline-none px-2"
          />
        </div>

        <div className="p-2 border border-neutral-600 rounded-3xl">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent w-full outline-none px-2"
          />
        </div>

        <div className="p-2 border border-neutral-600 rounded-3xl">
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-transparent w-full outline-none px-2"
          />
        </div>

        <div className="p-2 border border-neutral-600 rounded-3xl">
          <select className="bg-transparent w-full outline-none px-2 text-white">
            <option disabled selected value="">
              Choose Your Drink
            </option>
            {MenuSection.map((item, index) => (
              <option key={index} value={item.title} className="text-black bg-neutral-600">
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 rounded-3xl text-white font-bold bg-gradient-to-r from-neutral-600 to-[#C08267] hover:opacity-90 transition"
          >
            Order Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Form
