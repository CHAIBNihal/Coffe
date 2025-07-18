import { CircleUser, Headset, Mail } from 'lucide-react'
import React from 'react'
import { socialMedia } from '../../constants/menu'

const Infos = () => {
  return (
    <div className=' flex  flex-col gap-y-8'>
        <section className='flex gap-x-2' >
            <Mail />
            <p className='font-extrabold'>
                example@gmail.com
            </p>
        </section>
        <section className='flex gap-x-2'>
            <Headset />
              <p className='font-extrabold'>
               00-00-00-00-00
            </p>
        </section>
        <section className='flex gap-x-2'>
            <CircleUser />
            <p>Links </p>
        </section>
        <section className='flex ml-8 gap-x-3 bg-neutral-600 rounded-4xl p-3 w-1/2 '>
            {
                socialMedia.map((index, key)=>{
                    const Icon = index.icon
                    return (
                       <div key={key}  >
                       <Icon className="h-6 w-6 text-white hover:text-[#C08267]" />
                        
                       </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Infos