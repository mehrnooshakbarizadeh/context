import React, {useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MoviContext';

const MoviList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </>
  );
}

export default MoviList;