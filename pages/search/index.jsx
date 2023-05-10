import React from 'react'
import { SERVER, API_KEY } from '@/config'
import Layout from '@/components/layout'
import MovieList from '@/components/MovieList';
import { useRouter } from "next/router";

function Search({dataResult, search}) {
    const router = useRouter();
    const name = router.query;

    return (
        <Layout pageTitle={'Search'} content={'Search Results'}>
            <MovieList data={dataResult.results} section={`Search Results for ${name.query}`}/>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const search = context.query;

    const resResult = await fetch(`${SERVER}/search/movie?query=${search.query}&api_key=${API_KEY}`)
    const dataResult = await resResult.json()
  
    return {
      props: {
        dataResult,
      },
    }
  }

export default Search