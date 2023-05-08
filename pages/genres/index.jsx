import Layout from '@/components/layout'
import React from 'react'
import MovieSlider from '@/components/MovieSlider'
import { SERVER, API_KEY ,IMG_ORIGINAL } from '@/config'
import GenreSlider from '@/components/GenreSlider'
import { getGenre } from '../api/genres'

function Genres({dataGenreId, dataPopular, dataTopRated, dataNowPlaying}) {
  return (
    <Layout pageTitle={'Genres'} content={'Discover all genres'}>
      <GenreSlider data={dataGenreId} />
      <div className='md:space-y-12'>
        <MovieSlider section='Popular' data={dataPopular.results} />
        <MovieSlider section='Top Rated' data={dataTopRated.results} />
        <MovieSlider section='Latest' data={dataNowPlaying.results} />
      </div>
  </Layout>
  )
}

export async function getStaticProps() {
  const resGenreId = await getGenre()
  const dataGenreId = await resGenreId

  const resPopular = await fetch(`${SERVER}/movie/popular?api_key=${API_KEY}`)
  const dataPopular = await resPopular.json()

  const resTopRated = await fetch(`${SERVER}/movie/top_rated?api_key=${API_KEY}`)
  const dataTopRated = await resTopRated.json()

  const resNowPlaying = await fetch(`${SERVER}/movie/now_playing?api_key=${API_KEY}`)
  const dataNowPlaying = await resNowPlaying.json()

  return {
    props: {
      dataGenreId, dataPopular, dataTopRated, dataNowPlaying,
    },
  }
}

export default Genres