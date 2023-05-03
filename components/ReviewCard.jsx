import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import { IMG_ORIGINAL } from '@/config'

function ReviewCard(props) {
    let [show, setShow] = React.useState('see more')
    let [more, setMore] = React.useState('line-clamp-3')

    function readMore() {
        setMore('')
        setShow('')
    }

  return (
    <div className='flex flex-row py-3 px-5 rounded-lg border-secondary/40 border-[1px] md:space-x-6'>
        <div className='hidden md:block relative md:w-40'>
            <Image
            src={props.ava ? `${IMG_ORIGINAL}${props.ava}` : '/../public/user.png'}
            alt=''
            fill
            className='fixed object-cover overflow-hidden'
            />
        </div>
        <div className='flex flex-col space-y-3'>
            <div className='text-sm font-medium'>{props.username ? props.username : 'unknown'}</div>
            <div className='text-justify text-xs font-light leading-5'><span className={`${more}`}>{props.review}</span><span className='text-papaya-blue cursor-default hover:underline' onClick={readMore}> {props.review? show : ''}</span></div>
            <div className='text-secondary/60 text-xs'>{moment(props.date).format("D MMM YYYY")}</div>
        </div>
    </div>
  )
}

export default ReviewCard

//review card not yet ready for desktop
//avatar still screw
//avatar need handling for "'url' parameter is valid but upstream response is invalid"