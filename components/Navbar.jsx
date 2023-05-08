import Link from 'next/link'
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go"
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { SERVER, API_KEY } from '@/config'
import { useRouter } from "next/router"

const NavItem = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Discovery',
    path: '/discovery',
  },
  {
    label: 'Genres',
    path: '/genres',
  },
]

function Navbar({Title, setResults}) {
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()
  const [route, setRoute] = useState()

  const handleSubmit =async (e) => {
    e.preventDefault();
    router.push("/search?query=" + route)
  }


  return (
    <header className='bg-dark-1 w-full top-0 z-50 fixed'>
      <div className='justify-between md:items-center md:flex md:px-7 md:py-4'>
        <div className='flex item-center justify-between py-3 px-4 md:py-0 md:px-0'>
          <div className={`flex flex-col space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-8 font-normal md:font-semibold text-base ${navbar ? "block" : "hidden"}`}>
            {NavItem.map((item, index) => {
              return <Link className={ item.label === Title ? `text-primary` : `text-secondary/60 hover:text-secondary`} key={index} href={item.path} onClick={() => setNavbar(!navbar)}>{item.label}</Link>
            })}
          </div>

          <div className={`space-y-2 font-normal text-base md:hidden ${navbar ? "hidden" : "block"}`}>{Title}</div>

          <div className='md:hidden'>
            <button onClick={()=>setNavbar(!navbar)}>
              {navbar ? <IoMdClose size={25} /> : <IoMdMenu size={25} /> }
            </button>
          </div>
        </div>
        
        {/* //Search Bar */}
        <div className='md:w-[30%] lg:w-[25%] hidden md:block'>
          <form className="relative block" onSubmit={handleSubmit}>
            <span className="sr-only">Search</span>
            <input className="placeholder:text-secondary/60 block bg-dark-2 w-full border border-secondary/50 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:border-secondary focus:ring-1 text-sm placeholder:font-light" placeholder="Search here..." type="text" name="search" onChange={(e)=>{setRoute(e.target.value)}}/>
            <button type='submit' className="absolute inset-y-0 right-0 flex items-center pr-4">
              <GoSearch size={20} color='white' />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Navbar