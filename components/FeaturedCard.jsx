import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function FeaturedCard(props) {
  return (
    <section className='w-full h-full md:h-[300px] flex-shrink-0 hover:scale-[1.02] ease-in-out duration-300 rounded-2xl md:rounded-3xl'>
      <Link href={props.src ? props.src : '/'}>
        <div className='relative h-48 md:h-[300px] rounded-2xl'>
          <Image
              src={props.image ? props.image : '/image-not-found.png'}
              alt=''
              fill
              className='object-cover overflow-hidden rounded-2xl opacity-50'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base md:text-3xl font-semibold md:font-bold text-center'>{props.name}</div>
        </div>
      </Link>
    </section>
  )
}

export default FeaturedCard