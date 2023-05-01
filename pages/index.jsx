import Layout from '@/components/layout'
import Image from 'next/image'
import { API_KEY, SERVER, IMG_ORIGINAL } from '@/config'
import React from 'react'
import moment from 'moment'

export default function Home({dataNowPlaying}) {
  let dataNow = [];    
  for (let index = 0; index < dataNowPlaying.results.length; index++) {
      if (index > 0) {
          const element = dataNowPlaying.results[index];
          dataNow.push(element);
      }
  }

  const mainLayout = IMG_ORIGINAL.toString() + dataNowPlaying.results[0].backdrop_path.toString()

  return (
    <Layout pageTitle={'Home'} content={'A Movie Web App'}>
      <div class='w-full h-80 md:h-[420px] my-2 md:my-4 bg-[image:var(--image-url)] bg-cover bg-center rounded-xl md:rounded-2xl' style={{'--image-url': `url(${mainLayout})`}}>
        <div class="w-full h-full backdrop-brightness-50 hover:backdrop-brightness-75 rounded-xl md:rounded-2xl transition duration-300">
          <div className='bottom-0 absolute flex flex-col p-4 md:px-6 md:pb-8 space-y-0 md:space-y-1'>
            <div className='font-bold text-xl md:text-3xl'>{dataNowPlaying.results[0].title}</div>
            <div className='flex flex-row font-normal text-secondary/75 text-sm md:text-base space-x-1 md:space-x-2'>
              <span>{moment(dataNowPlaying.results[0].release_date).format('YYYY')}</span>
              <span>•</span>
                {dataNowPlaying.results[0].genre_ids.map((item, idx = 0) => {
                  return <span key={idx}>{item}</span>
                })}
            </div>
          </div>
        </div>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const resNowPlaying = await fetch(`${SERVER}/movie/now_playing?api_key=${API_KEY}`)
  const dataNowPlaying = await resNowPlaying.json()

  return {
    props: {
      dataNowPlaying,
    },
  }
}
