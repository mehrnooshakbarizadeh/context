import React, {useState, useContext} from 'react';
import { MovieContext } from './MoviContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMovies(prevMovies => 
      [...prevMovies, {
        name:name,
        price: price,
      }]
    )
    setName('');
    setPrice('');

  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type='text' name='name' value={name} onChange={handleNameChange}/>
        <input type='text' name='price'value={price} onChange={handlePriceChange}/>
        <button>Submit</button>
      </form>

    </>
  )
}

export default AddMovie;