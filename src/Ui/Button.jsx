import React from 'react'

const Button = ({bg, name, link}) => {
  return (
  <a
  href={link}
  className={`rounded-xl text-white ${bg} px-5 py-2 text-sm hover:opacity-90 transition`}
>
  {name}
</a>
  )
}

export default Button