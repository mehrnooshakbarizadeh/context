import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Hary Potter',
      price: '10$',
      id: 124512,
    },
    {
      name: 'Game of Thrones',
      price: '20$',
      id: 123265,
    },
    {
      name: 'Comedian',
      price: '22$',
      id: 457845,
    }
  ]);
  return (
    <>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
}