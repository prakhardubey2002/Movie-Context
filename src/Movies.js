import React from 'react'
import { useGlobalContext } from './context';

const Movies = () => {
 const {movie}=useGlobalContext();
  return (
    <>
    <div>Movies</div>
    {movie.map((curmovie)=>{
      
      return  <p key={curmovie.imdbID} >  {curmovie.Title}</p>
    })}
    </>
  )
}

export default Movies