import React, {useContext} from 'react';
import { MovieContext } from './MoviContext';


const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return(
    <>
      <h3>List of Movies</h3>
      <p>List of Movies: {movies.length}</p>
    </>
  );
}

export default Nav;