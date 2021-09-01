import './App.css';
import MoviList from './MoviList';
import Nav from './Nav';
import { MovieProvider } from './MoviContext';
import AddMovie from './AddMovie';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';



 


//STORE 

//ACTION

//REDUCER

//DISPATCH

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();


  return (
   
    <div className="App">
    <h1>Counter is {counter}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    {loggedIn ? <h1>you are loggedIn</h1> : <h1>you are not logged in</h1>}
    {/* // <MovieProvider>
    //   <div className="App">
    //     <Nav />
    //     <AddMovie />
    //     <MoviList />
    //   </div>
    // </MovieProvider> */}
    </div>
    
  );
}

export default App;
