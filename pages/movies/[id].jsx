import Layout from '@/components/layout'
import React from 'react'
import { API_KEY, SERVER } from '@/config'
import { useRouter } from 'next/router'

function MovieDetail({dataDetail}) {

  return (
    <Layout pageTitle={dataDetail.title}>
      <a>{dataDetail.title}</a>
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