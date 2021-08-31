import React from 'react';

const Movie = ({name, price}) => {
  return (
    <>
      <li>{name}</li>
      <li>{price}</li>
    </>
  );
}

export default Movie;