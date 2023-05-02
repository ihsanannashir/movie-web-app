import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <section className='bottom-0 flex flex-col justify-center md:items-center py-3 md:py-5 px-4 md:flex-row text-xs md:text-sm bg-dark-1 text-secondary/60 space-y-1 md:space-y-0 md:space-x-3'>
        <a>© 2023 Ihsan An-Nashir - All Rights Reserved</a>
        <a className='hidden md:block'>•</a>
        <a href='https://www.themoviedb.org/' target="_blank" className='hover:text-white'>TMBD API</a>
        <a className='hidden md:block'>•</a>
        <a href='https://github.com/ihsanannashir/movie-web-app' target="_blank" className='hover:text-white'>View Source Code</a>
    </section>
  )
}

export default Footer