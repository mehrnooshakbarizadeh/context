import './App.css';
import MoviList from './MoviList';
import Nav from './Nav';
import { MovieProvider } from './MoviContext';
import AddMovie from './AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MoviList />
      </div>
    </MovieProvider>
  );
}

export default App;
