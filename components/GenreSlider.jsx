import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'
import { useRef } from 'react'
import GenreCard from './GenreCard'

// {
//     "id": 28,
//     "name": "Action"
// },
// {
//     "id": 12,
//     "name": "Adventure"
// },
// {
//     "id": 16,
//     "name": "Animation"
// },
// {
//     "id": 35,
//     "name": "Comedy"
// },
// {
//     "id": 80,
//     "name": "Crime"
// },
// {
//     "id": 99,
//     "name": "Documentary"
// },
// {
//     "id": 18,
//     "name": "Drama"
// },
// {
//     "id": 10751,
//     "name": "Family"
// },
// {
//     "id": 14,
//     "name": "Fantasy"
// },
// {
//     "id": 36,
//     "name": "History"
// },
// {
//     "id": 27,
//     "name": "Horror"
// },
// {
//     "id": 10402,
//     "name": "Music"
// },
// {
//     "id": 9648,
//     "name": "Mystery"
// },
// {
//     "id": 10749,
//     "name": "Romance"
// },
// {
//     "id": 878,
//     "name": "Science Fiction"
// },
// {
//     "id": 10770,
//     "name": "TV Movie"
// },
// {
//     "id": 53,
//     "name": "Thriller"
// },
// {
//     "id": 10752,
//     "name": "War"
// },
// {
//     "id": 37,
//     "name": "Western"
// }

function GenreSlider(props) {
    let api = props.data

    const slideRef = useRef()

    const slideLeft = () => {
        slideRef.current.scrollLeft = slideRef.current.scrollLeft - 900
    }

    const slideRight = () => {
        slideRef.current.scrollLeft = slideRef.current.scrollLeft + 900
    }

  return (
    <section className='relative flex flex-col max-w-screen'>
        <div className='relative flex items-center'>
            <MdChevronLeft className='absolute z-30 -mt-2 hidden md:block opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={30} />
            <div ref={slideRef} className='flex flex-row space-x-4 md:space-x-7 overflow-hidden overflox-y-hidden overflow-x-scroll scrollbar-hide scroll-smooth p-3 -m-3 z-20'>
                {api.genres.map((item, index) => {
                    return <GenreCard
                        key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                    />
                })}
            </div>
            <MdChevronRight className='absolute z-30 -mt-2 right-0 hidden md:block opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={30} />
        </div>
        
    </section>
  )
}

export default GenreSlider