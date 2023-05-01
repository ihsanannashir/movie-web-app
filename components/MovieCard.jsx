import React from 'react'
import Image from 'next/image'
import { IMG_ORIGINAL } from '@/config';

function MovieCard(props) {
  return (
    <div className='w-[150px] md:w-64'>
        <div className='relative h-40 md:h-96'>
            <Image
                src={props.image ? `${IMG_ORIGINAL}${props.image}` : 'https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg'}
                alt=''
                fill
                className='object-cover rounded-2xl'
            />
        </div>
        <div className='flex flex-col mt-1 space-y-1 md:space-y-0'>
            <div className='text-xs font-medium md:text-lg'>{props.title}</div>
            <div className='text-[11px]/[13px] md:text-base font-semibold text-secondary/60'>{props.year}</div>
        </div>
    </div>
    
  )
}

export default MovieCard