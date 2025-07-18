import React from 'react'
import { MenuSection } from '../../constants/menu'
import Card from '../../Ui/Card'

const Menu = () => {
  return (
    <div className="px-4 md:px-8   mt-10">
      <h1 className="text-3xl md:text-4xl text-center bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-neutral-500 to-[#C08267]">
        Our Menu
      </h1>

      <div className="mt-10 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
        {MenuSection.map((item, index) => (
          <Card
            key={index}
            image={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
