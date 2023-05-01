import React from 'react'
import MovieCard from './MovieCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'

function MovieSlider(props) {
    let api = props.data
    const hd = props.more ? '' : 'hidden'

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 900
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 900
    }

  return (
    <section className='relative flex flex-col max-w-screen space-y-3 md:space-y-5 mt-5 md:mt-8'>
        <div className='flex justify-between'>
            <h2 className='text-base md:text-2xl font-semibold'>{props.section}</h2>
            <Link href={props.more ? props.more : ''} className={`text-xs md:text-base text-secondary/60 hover:text-white ${hd}`}>See More</Link>
        </div>
        <div className='relative flex items-center'>
            <MdChevronLeft className='absolute z-50 -mt-16 hidden md:block opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={50} />
            <div id='slider' className='flex flex-row space-x-4 md:space-x-7 overflow-hidden overflox-y-hidden overflow-x-scroll scrollbar-hide scroll-smooth'>
                {api.map((item, index) => {
                    return <>
                    <MovieCard
                        image={item.poster_path}
                        title={item.original_title}
                        year={item.release_date}
                    />
                    </>
                })}
            </div>
            <MdChevronRight className='absolute z-50 -mt-16 right-0 hidden md:block opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
        </div>
        
    </section>
  )
}

export default MovieSlider