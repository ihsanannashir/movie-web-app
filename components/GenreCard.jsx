import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function GenreCard(props) {
  return (
    <section className='w-[150px] md:w-64 flex-shrink-0 hover:scale-105 ease-in-out duration-300 border-secondary/90 border-[1px] md:border-2 rounded-2xl md:rounded-3xl'>
      <Link href={`/genres/${props.id}`}>
        <div className='relative h-20 md:h-36 rounded-2xl'>
          <Image
              src={props.image ? props.image : '/image-not-found.png'}
              alt=''
              fill
              sizes="100vw"
              className='object-cover overflow-hidden rounded-2xl opacity-50'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base md:text-3xl font-semibold md:font-bold text-center'>{props.name}</div>
        </div>
      </Link>
    </section>
  )
}

export default GenreCard