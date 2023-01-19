import { useCounter, useFetch } from '../hooks';

export const Episode = ({name, episode}) => {

  return (
    
    <blockquote className='blockquote text-end'>
        <p className='mb-1'>{ name }</p>
        <footer className='blockquote-footer mt-1'>{ episode }</footer>
    </blockquote>

  )
}
