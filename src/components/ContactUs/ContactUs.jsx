import React from 'react'
import Infos from './Infos'
import Form from './Form'

const ContactUs = () => {
    return (
        <>
        <div className='grid grid-cols-1 border-t w-full pt-10 md:grid-cols-2 pl-16 py-4 mt-5'>
            <Infos />
            <Form />
        </div>
        <div className='flex justify-center'>
             <p className="text-sm text-center mt-7 text-neutral-400">
                © {new Date().getFullYear()} CoffeOverDose. All rights reserved.
                Brewed with passion. Served with love
            </p>
           </div>
        </>
        
    )
}

export default ContactUs