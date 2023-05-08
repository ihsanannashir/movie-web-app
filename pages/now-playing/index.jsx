import Layout from '@/components/layout'
import React from 'react'
import { SERVER, API_KEY } from '@/config'
import MovieList from '@/components/MovieList'

function NowPlaying({dataNowPlaying}) {
  return (
    <Layout pageTitle={'Now Playing'} content={'Now Playing Movies'} >
        <MovieList data={dataNowPlaying.results} section={`Now Playing Movies`}/>
    </Layout>
  )
}

//Note: can extend with pagination (TBD)

export async function getStaticProps() {
    const resNowPlaying = await fetch(`${SERVER}/movie/now_playing?api_key=${API_KEY}`)
    const dataNowPlaying = await resNowPlaying.json()
  
    return {
      props: {
        dataNowPlaying,
      },
    }
  }
  

export default NowPlaying