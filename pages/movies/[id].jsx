import Layout from '@/components/layout'
import React from 'react'
import { API_KEY, SERVER, IMG_ORIGINAL } from '@/config'
import Image from 'next/image'
import moment from 'moment'
import ISO6391 from 'iso-639-1';
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import MovieSlider from '@/components/MovieSlider'

function MovieDetail({dataDetail, dataReview, dataRecom}) {
  const poster = dataDetail.poster_path ? IMG_ORIGINAL.toString() + dataDetail.poster_path.toString() : ''

  return (
    <Layout pageTitle={dataDetail.title}>
      <div className='lg:w-[900px] md:mt-32 mt-6 md:m-auto'>
        <div className='flex flex-col md:flex-row m-2 md:m-0 md:space-x-6'>
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
            <div className='font-bold text-3xl md:text-4xl'>{dataDetail.title}</div>
            <div className='font-semibold md:font-normal text-secondary/60 text-lg py-1'>{moment(dataDetail.release_date).format('YYYY')}</div>
            <div className='text-justify text-sm md:text-base text-secondary/60 mt-3'>{dataDetail.overview}</div>
            <div className='my-4'>
              <h2 className='text-xl md:text-2xl my-4 font-semibold'>Details</h2>
              <table className="table-fixed w-full">
                <tbody className='text-sm md:text-base'>
                  <tr className='border-t-[1px] border-secondary/40 font-medium '>
                    <td className='w-[40%] md:w-[25%] py-2 md:py-4'>Genres</td>
                    <td className='py-2 md:py-4 text-secondary/60'>
                    {dataDetail.genres.map((cont, idx) => {
                      if (idx === dataDetail.genres.length - 1) {
                        return <a key={idx} className='hover:underline hover:cursor-default'>{cont.name}</a>
                      }
                      return <span key={idx}><a className='hover:underline hover:cursor-default'>{cont.name}</a>, </span>
                    })}
                    </td>
                  </tr>
                  <tr className='border-t-[1px] border-secondary/40 font-medium'>
                    <td className='py-2 md:py-4'>Languages</td>
                    <td className='text-secondary/60'>{ISO6391.getName(dataDetail.original_language)}</td>
                  </tr>
                  <tr className='border-t-[1px] border-secondary/40 font-medium'>
                    <td className='py-2 md:py-4'>Release Date</td>
                    <td className='text-secondary/60'>{moment(dataDetail.release_date).format("D MMMM YYYY")}</td>
                  </tr>
                  <tr className='border-t-[1px] border-secondary/40 font-medium'>
                    <td className='py-2 md:py-4'>Country of Origin</td>
                    <td className='py-2 md:py-4 text-secondary/60'>
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

        <div className='m-2 md:m-0'>
          <h2 className='text-xl md:text-2xl my-4 font-semibold'>Reviews</h2>
          <div className='space-y-4'>
            {dataReview.results.map((item, index) => {
              if (index > 3) {
                return ''
              }
              return <ReviewCard key={item.id} ava={item.author_details.avatar_path} username={item.author} review={item.content} date={item.updated_at} />
            })}
          </div>
          <div className='my-4 font-light text-sm italic hover:underline'>
            <Link target='_blank' href={`https://www.imdb.com/title/${dataDetail.imdb_id}/reviews`}>See more reviews at IMDb</Link>
          </div>
          <MovieSlider section='More like this' data={dataRecom.results} />
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

  const resReview = await fetch(`${SERVER}/movie/${params.id}/reviews?api_key=${API_KEY}`)
  const dataReview = await resReview.json()

  const resRecom = await fetch(`${SERVER}/movie/${params.id}/recommendations?api_key=${API_KEY}`)
  const dataRecom = await resRecom.json()

  return {
    props: {
      dataDetail, dataReview, dataRecom,
    },
  }
}

export default MovieDetail
