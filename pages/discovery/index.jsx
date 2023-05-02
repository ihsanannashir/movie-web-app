import React from 'react'
import Layout from '@/components/layout'
import { SERVER, API_KEY } from '@/config'
import MovieSlider from '@/components/MovieSlider'

function Discovery({dataQuestionOne, dataQuestionTwo, dataQuestionThree}) {
  return (
    <Layout pageTitle={'Discovery'} content={'Discover the movies'}>
      <div className='md:space-y-12'>
        <MovieSlider section='What are the highest rated science fiction movies that Tom Cruise has been in?' data={dataQuestionOne.results} />
        <MovieSlider section='What is are the best movies from 2010?' data={dataQuestionTwo.results} />
        <MovieSlider section='What are the most popular movies?' data={dataQuestionThree.results} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const resQuestionOne = await fetch(`${SERVER}/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=${API_KEY}`)
  const dataQuestionOne = await resQuestionOne.json()

  const resQuestionTwo = await fetch(`${SERVER}/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=${API_KEY}`)
  const dataQuestionTwo = await resQuestionTwo.json()

  const resQuestionThree = await fetch(`${SERVER}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
  const dataQuestionThree = await resQuestionThree.json()

  return {
    props: {
      dataQuestionOne, dataQuestionTwo, dataQuestionThree,
    },
  }
}

export default Discovery