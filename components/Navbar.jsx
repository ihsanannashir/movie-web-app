import React from 'react'
import Link from 'next/link'

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

function Navbar() {
  return (
    <header className='bg-dark-1 w-full top-0 z-50 fixed'>
      <div className='justify-between md:items-center md:flex md:px-7 md:h-16'>
        <div className='md:flex md:space-x-8 font-semibold'>
          {NavItem.map((item, index) => {
            return <Link className='text-secondary/60 hover:text-secondary' key={index} href={item.path}>{item.label}</Link>
          })}
        </div>
        <div>ini search</div>
      </div>
    </header>
  )
}

export default Navbar