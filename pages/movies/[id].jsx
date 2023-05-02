import Layout from '@/components/layout'
import React from 'react'
import { API_KEY, SERVER, IMG_ORIGINAL } from '@/config'
import Image from 'next/image'
import moment from 'moment'

function MovieDetail({dataDetail}) {
  const poster = dataDetail.poster_path ? IMG_ORIGINAL.toString() + dataDetail.poster_path.toString() : ''

  return (
    <Layout pageTitle={dataDetail.title}>
      <div className='flex flex-col md:flex-row lg:w-[900px] md:m-auto m-2'>
        <div className='md:w-1/4 w-[95%] mx-auto md:mx-0'>
          <div className='w-full relative pt-[150%]'>
            <Image
            src={poster}
            height={827}
            width={551}
            className='absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover rounded-2xl'
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <div>{dataDetail.title}</div>
          <div>{dataDetail.release_date}</div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const resPath = await fetch(`${SERVER}/movie/popular?api_key=${API_KEY}`)
  const dataPath = await resPath.json()

  const paths = dataPath.results.map((movies) => ({
    params: {
        id: `${movies.id}`
    },
  })) 

  return {
      paths,
      fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  const resDetail = await fetch(`${SERVER}/movie/${params.id}?api_key=${API_KEY}`)
  const dataDetail = await resDetail.json()

  return {
    props: {
      dataDetail,
    },
  }
}

export default MovieDetail

{/* <div className='md:w-[200px] md:h-[300px] bg-[image:var(--image-url)] bg-cover bg-center md:rounded-2xl' style={{'--image-url': `url(${poster})`}}>ini poster</div> */}

{/* <div className='md:hidden w-full object-contain h-auto bg-[image:var(--image-url)] bg-cover bg-center rounded-2xl' style={{'--image-url': `url(${poster})`}}></div> */}