import Layout from '@/components/layout'
import React from 'react'
import { SERVER, API_KEY } from '@/config'
import MovieList from '@/components/MovieList'

function Popular({dataPopular}) {
  return (
    <Layout pageTitle={'Popular'} content={'Popular Movies'} >
        <MovieList data={dataPopular.results} section={`Popular Movies`}/>
    </Layout>
  )
}

//Note: can extend with pagination (TBD)

export async function getStaticProps() {
    const resPopular = await fetch(`${SERVER}/movie/popular?api_key=${API_KEY}`)
    const dataPopular = await resPopular.json()
  
    return {
      props: {
        dataPopular,
      },
    }
  }
  

export default Popular