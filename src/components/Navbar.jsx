import React from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

function Navbar() {
  return (
    <header className='w-full mx-auto px-4 shadow fixed top-0 z-50 sm:px-20 bg-[#2E335A]'>
        <div className='justify-between md:items-center md:flex'>
            <div className='py-4'>
                ini navigasi
            </div>
            <div>
                ini buat search
            </div>
        </div>
    </header>
  )
}

export default Navbar