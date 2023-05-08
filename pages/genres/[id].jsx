import Layout from '@/components/layout'
import React from 'react'
import { SERVER, IMG_ORIGINAL, API_KEY } from '@/config'
import GenreSlider from '@/components/GenreSlider'
import { useRouter } from 'next/router'
import MovieList from '@/components/MovieList'
import FeaturedCard from '@/components/FeaturedCard'
import { getGenre } from '../api/genres'

function GenrePage({dataLatest, dataGenreId, dataFeatured}) {
  const router = useRouter()
  const { id } = router.query

  const FeaturedURL = dataFeatured.results[0]

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
      <section className='my-4 md:my-10 space-y-2 md:space-y-6'>
        <h1 className='text-lg md:text-3xl font-semibold md:font-bold w-screen'>Featured {setName} Movie</h1>
        <FeaturedCard src={`/movies/${FeaturedURL.id}`} name={FeaturedURL.original_title} image={`${IMG_ORIGINAL}/${dataFeatured.results[0].backdrop_path}`} />
      </section>
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
  const resGenreId = await getGenre()
  const dataGenreId = await resGenreId

  const resLatest = await fetch(`${SERVER}/discover/movie?with_genres=${params.id}&sort_by=release_date.desc&api_key=${API_KEY}`)
  const dataLatest = await resLatest.json()

  const resFeatured = await fetch(`${SERVER}/discover/movie?with_genres=${params.id}&sort_by=popularity.desc&api_key=${API_KEY}`)
  const dataFeatured = await resFeatured.json()

  return {
    props: {
      dataLatest, dataGenreId, dataFeatured,
    },
  }
}

export default GenrePage