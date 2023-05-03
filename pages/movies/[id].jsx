import Layout from '@/components/layout'
import React from 'react'
import { API_KEY, SERVER, IMG_ORIGINAL } from '@/config'
import Image from 'next/image'
import moment from 'moment'
import ISO6391 from 'iso-639-1';

function MovieDetail({dataDetail}) {
  const poster = dataDetail.poster_path ? IMG_ORIGINAL.toString() + dataDetail.poster_path.toString() : ''

  return (
    <Layout pageTitle={dataDetail.title}>
      <div className='flex flex-col md:flex-row lg:w-[900px] md:m-auto m-2 md:space-x-6 md:mt-14 mt-6'>
        <div className='md:w-1/4 w-[90%] mx-auto md:mx-0'>
          <div className='w-full relative pt-[150%]'>
            <Image
            src={poster}
            height={827}
            width={551}
            className='absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover rounded-2xl'
            alt=''
            />
          </div>
        </div>

        <div className='flex flex-col my-4 md:w-3/4'>
          <div className='font-bold text-3xl'>{dataDetail.title}</div>
          <div className='font-semibold text-secondary/60 text-lg py-1'>{moment(dataDetail.release_date).format('YYYY')}</div>
          <div className='text-justify text-sm text-secondary/60 mt-3'>{dataDetail.overview}</div>
          <div className='my-4'>
            <h2 className='text-xl my-4 font-semibold'>Details</h2>
            <table className="table-fixed w-full">
              <tbody className='text-sm'>
                <tr className='border-t-[1px] border-secondary/40 font-medium '>
                  <td className='w-[30%] py-2'>Genres</td>
                  <td className='py-2 text-secondary/60'>
                  {dataDetail.genres.map((cont, idx) => {
                    if (idx === dataDetail.genres.length - 1) {
                      return cont.name
                    }
                    return <a key={idx}>{cont.name}, </a>
                  })}
                  </td>
                </tr>
                <tr className='border-t-[1px] border-secondary/40 font-medium'>
                  <td className='py-2'>Language</td>
                  <td className='text-secondary/60'>{ISO6391.getName(dataDetail.original_language)}</td>
                </tr>
                <tr className='border-t-[1px] border-secondary/40 font-medium'>
                  <td className='py-2'>Release Date</td>
                  <td className='text-secondary/60'>{moment(dataDetail.release_date).format("D MMMM YYYY")}</td>
                </tr>
                <tr className='border-t-[1px] border-secondary/40 font-medium'>
                  <td className='py-2'>Country of Origin</td>
                  <td className='py-2 text-secondary/60'>
                  {dataDetail.production_countries.map((cont, idx) => {
                    if (idx === dataDetail.production_countries.length - 1) {
                      return cont.name
                    }
                    return <a key={idx}>{cont.name}, </a>
                  })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
