import React from 'react'
import Image from 'next/image'
import { IMG_ORIGINAL } from '@/config';
import moment from 'moment';
import Link from 'next/link';

function MovieCard(props) {
  return (
    <section className='w-[150px] md:w-64 flex-shrink-0 hover:scale-105 ease-in-out duration-300'>
      <Link href={`/movies/${props.id}`}>
        <div className='relative h-40 md:h-96'>
          <Image
              src={props.image ? `${IMG_ORIGINAL}${props.image}` : '/image-not-found.png'}
              alt=''
              fill
              className='object-cover rounded-2xl'
              sizes= '100vw'
          />
        </div>

        <div className='flex flex-col mt-1 space-y-1 md:space-y-0'>
          <div className='text-xs font-medium md:text-lg'>{props.title}</div>
          <div className='text-[11px]/[13px] md:text-base font-semibold text-secondary/60'>{moment(props.year).format('YYYY')}</div>
        </div>
      </Link>
    </section>
  )
}

export default MovieCard
