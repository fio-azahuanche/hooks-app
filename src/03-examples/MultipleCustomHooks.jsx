import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { Episode, LoadingEpisode } from './index';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/episode/`);
    const { name, episode } = !!data && data[counter];
  return (
    <>
     <h1>Rick & Morty Episodes</h1> 
     <hr />

    {
        isLoading ? <LoadingEpisode/> : <Episode name={name} episode={episode}/>
    }

    <button className='btn btn-primary' disabled={ counter===19 } onClick={ () => increment() }>Next episode</button>

    </>
  )
}
