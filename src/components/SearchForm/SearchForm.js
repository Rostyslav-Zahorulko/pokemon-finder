import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

export default function SearchForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    const trimmedPokemonName = pokemonName.trim();

    e.preventDefault();

    if (!trimmedPokemonName) {
      toast.error('Enter pokemon name');
      return;
    }

    onSubmit(trimmedPokemonName);
    setPokemonName('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" value={pokemonName} onChange={handleChange} />

      <button type="submit">
        Search <ImSearch />
      </button>
    </form>
  );
}
