import React from 'react'
import MovieCardShrink from './MovieCardShrink'

function MovieList(props) {
    let api = props.data

    return (
        <section className='mx-auto my-4 md:my-6'>
            <div className='flex flex-col'>
                <h1 className='text-lg md:text-3xl font-semibold md:font-bold w-screen'>{props.section}</h1>
                <div className='grid grid-cols-2 md:flex md:flex-wrap justify-center'>
                    {api.map((item, index) => {
                        return <div className='p-4' key={index}><MovieCardShrink
                            id={item.id}
                            image={item.poster_path}
                            title={item.original_title}
                            year={item.release_date}
                        />
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default MovieList