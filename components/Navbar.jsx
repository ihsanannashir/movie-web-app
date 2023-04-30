import React from 'react'
import Link from 'next/link'
import { GoSearch } from "react-icons/go";

const NavItem = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Discovery',
    path: 'discovery',
  },
  {
    label: 'Genres',
    path: 'genres',
  },
]

function Navbar({Title}) {
  return (
    <header className='bg-dark-1 w-full top-0 z-50 fixed'>
      <div className='justify-between md:items-center md:flex md:px-7 md:py-4'>
        <div className='md:flex md:space-x-8 font-semibold text-base'>
          {NavItem.map((item, index) => {
            return <Link className={ item.label === Title ? `text-primary` : `text-secondary/60 hover:text-secondary`} key={index} href={item.path}>{item.label}</Link>
          })}
        </div>
        <div className='md:w-[30%] lg:w-[25%] hidden md:block'>
          <label class="relative block">
            <span class="sr-only">Search</span>
            <input class="placeholder:text-secondary/60 block bg-dark-2 w-full border border-secondary/50 rounded-full py-2 pl-4 pr-12 focus:outline-none focus:border-secondary focus:ring-1 text-sm placeholder:font-light" placeholder="Search here..." type="text" name="search"/>
            <span class="absolute inset-y-0 right-0 flex items-center pr-4">
              <GoSearch size={25} color='white' />
            </span>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Navbar