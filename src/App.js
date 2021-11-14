import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from './components/Container';
import SearchForm from './components/SearchForm';
import PokemonInfo from './components/PokemonInfo';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Container>
      <SearchForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
