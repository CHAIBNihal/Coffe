
import { menuList } from "../../constants/menu"
import logo from "../../assets/logo.png"
import Button from '../../Ui/Button'
import { useState } from 'react'
import { Menu, X } from "lucide-react"
const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);

  }
  return (
    <nav className='sticky top-0 border-b border-neutral-700/80 backdrop-blur-lg py-3 z-50'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex  justify-between gap-x-6 items-center'>
          {/**Logo Section */}
          <div className=" flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className='h-10 mr-3 w-14' />
             <h3
        className="text-lg font-extrabold bg-gradient-to-r from-neutral-500 to-[#C08267] bg-clip-text text-transparent"
      >
        CoffeOverDose
      </h3>
            {/* <h3 >Coffe<span className='text-[#A0583C] font-bold'>Over</span>Dose</h3> */}
          </div>
          {/**Menu Section */}
          <ul className='hidden lg:flex ml-14 gap-x-6'>
            {
              menuList.map((i, k) => {
                return (
                  <li key={k} className='transition-colors hover:text-[#C08267] ' >
                    <a href={i.link}>
                      {i.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>


          {/**Button Section */}
          <div className='hidden lg:flex justify-center space-x-5 items-center'>
            <Button  bg={"bg-transparent border border-white "} link={"#"} name={"Create an account"} />
            <Button  bg={"bg-gradient-to-r from-neutral-600 to-[#C08267] "} link={"#"} name={"Sign In"} />
            

          </div>
          {/**MenuButton on Mobile Mode  */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNav}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/**Mobile Section mode  */}
          {
            mobileDrawerOpen && (
              <div
                className=" fixed lg:hidden right-0 top-16
                     bg-neutral-900 flex flex-col p-8 justify-center items-center z-20 w-full">
                <ul className="space-y-5">
                  {menuList.map((i, k) => {
                    return (
                      <li key={k} className="group relative overflow-hidden">
                        <a
                          href={i.link}
                          className="text-white after:block after:h-[2px] after:bg-[#C08267]
                   after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                   group-hover:after:scale-x-100"
                        >
                          {i.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <div className="mt-12 flex justify-between gap-x-4 ">
                  <Button bg={"bg-transparent border border-white "} link={"#"} name={"Create an account"} />
                  <Button bg={"bg-gradient-to-r from-neutral-600 to-[#C08267] "} link={"#"} name={"Sign In"} />
                </div>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav