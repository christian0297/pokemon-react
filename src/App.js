import { getPokemonListFetch } from './store/slices/pokemonListSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import Pokedex from './components/pokedex/Pokedex';
import Navbar from './components/Navbar';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonListFetch())
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element= {
          <h1 style={{textAlign: "center", marginTop: "120px"}}>HOME</h1>
        }/>
        <Route path="/pokedex" element= {<Pokedex/>}/>
      </Routes>
    </Router>
  );
}

export default App;