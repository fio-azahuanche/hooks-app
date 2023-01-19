import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/episode');
    console.log({ data, isLoading, hasError });
  return (
    <>
     <h1>Rick & Morty Episodes</h1> 
     <hr />
    </>
  )
}
