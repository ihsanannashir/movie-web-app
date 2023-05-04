import Layout from '@/components/layout'
import React from 'react'
import { SERVER, API_KEY } from '@/config'
import GenreSlider from '@/components/GenreSlider'
import { useRouter } from 'next/router'
import MovieList from '@/components/MovieList'

function GenrePage({dataLatest, dataGenreId}) {
  const router = useRouter()
  const { id } = router.query

  const name = dataGenreId.genres.map((item) => {
    if (id.toString() === item.id.toString()) {
      const genName = item.name
      return genName
    }
  })

  const setName = name.filter(function (element) {
    return element !== undefined;
  });

  return (
    <Layout pageTitle={setName}>
      <GenreSlider data={dataGenreId}/>
      <MovieList data={dataLatest.results} section={setName}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const resPath = await fetch(`${SERVER}/genre/movie/list?api_key=${API_KEY}`)
  const dataPath = await resPath.json()

  const paths = dataPath.genres.map((gen) => ({
    params: {
        id: `${gen.id}`
    },
  })) 

  return {
      paths,
      fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  const resGenreId = await fetch(`${SERVER}/genre/movie/list?api_key=${API_KEY}`)
  const dataGenreId = await resGenreId.json()

  const resLatest = await fetch(`${SERVER}/discover/movie?with_genres=${params.id}&sort_by=release_date.desc&api_key=${API_KEY}`)
  const dataLatest = await resLatest.json()

  return {
    props: {
      dataLatest, dataGenreId,
    },
  }
}

export default GenrePage