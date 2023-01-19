import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/`);
    const { name, episode } = !!data && data[counter];
  return (
    <>
     <h1>Rick & Morty Episodes</h1> 
     <hr />

    {
        isLoading?(
            <div className='alert alert-info text-center'>
                Loading...
            </div>
        )
        : (
            <blockquote className='blockquote text-end'>
                <p className='mb-1'>{ name }</p>
                <footer className='blockquote-footer mt-1'>{ episode }</footer>
            </blockquote>
        )
    }

    <button className='btn btn-primary' disabled={ counter===19 } onClick={ () => increment() }>Next episode</button>

    </>
  )
}
