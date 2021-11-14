import { useState, useEffect } from 'react';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingView from '../PokemonPendingView';
import PokemonErrorView from '../PokemonErrorView';
import pokemonApi from '../../services/pokemon-api';

const IDLE = 'idle';
const PENDING = 'pending';
const REJECTED = 'rejected';
const RESOLVED = 'resolved';

let count = 0;

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(IDLE);

  count += 1;
  console.log('count: ', count);

  useEffect(() => {
    console.log('Start Effect');

    if (!pokemonName) {
      return;
    }

    setStatus(PENDING);

    pokemonApi
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        console.log('pokemonName: ', pokemonName);
        console.log('pokemon: ', pokemon);
        setPokemon(pokemon);
        setStatus(RESOLVED);
      })
      .catch(error => {
        console.log('pokemonName: ', pokemonName);
        console.log('error: ', error);
        setError(error);
        setStatus(REJECTED);
      });
  }, [pokemonName]);

  if (status === IDLE) {
    console.log('IDLE');
    return <p>Enter pokemon name</p>;
  }

  if (status === PENDING) {
    console.log('PENDING');
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === RESOLVED) {
    console.log('RESOLVED');
    return <PokemonDataView pokemon={pokemon} />;
  }

  if (status === REJECTED) {
    console.log('REJECTED');
    return <PokemonErrorView message={error.message} />;
  }
}
