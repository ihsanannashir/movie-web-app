import React from 'react'
import Image from 'next/image'
import { IMG_ORIGINAL } from '@/config';
import moment from 'moment';
import Link from 'next/link';

function MovieCardShrink(props) {
  return (
    <section className='md:max-w-[300px] md:min-w-[256px] min-w-[75px] hover:scale-105 ease-in-out duration-300'>
      <Link href={`/movies/${props.id}`}>
        <div className='w-full relative pt-[150%]'>
          <Image
              src={props.image ? `${IMG_ORIGINAL}${props.image}` : '/image-not-found.png'}
              alt=''
              fill
              className='absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover rounded-2xl'
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

export default MovieCardShrink