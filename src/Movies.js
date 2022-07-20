import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((curMovie) => { 
            const {imdbID,Title,Poster}=curMovie;//field are availbale in api
            const movieName=Title.substring(0,15);
            return (
                    <NavLink key={imdbID} to={`movie/${imdbID}`}>
                          <div  className="card">
                            <div className="card-info">
                              <h2>{movieName.length >= 15 ? `${movieName.toUpperCase()}...` : movieName.toUpperCase()}</h2>
                              <img src={Poster} alt={imdbID} />
                            </div>
                          </div>
                    </NavLink>
                   )
          })}
        </div>
      </section>
    </>
  )
}

export default Movies