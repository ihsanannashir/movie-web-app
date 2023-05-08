import Layout from '@/components/layout'
import React from 'react'
import { SERVER, API_KEY } from '@/config'
import MovieList from '@/components/MovieList'

function TopRated({dataTopRated}) {
  return (
    <Layout pageTitle={'Top Rated'} content={'Top Rated Movies'} >
        <MovieList data={dataTopRated.results} section={`Top Rated Movies`}/>
    </Layout>
  )
}

//Note: can extend with pagination (TBD)

export async function getStaticProps() {
    const resTopRated = await fetch(`${SERVER}/movie/top_rated?api_key=${API_KEY}`)
    const dataTopRated = await resTopRated.json()
  
    return {
      props: {
        dataTopRated,
      },
    }
  }
  

export default TopRated