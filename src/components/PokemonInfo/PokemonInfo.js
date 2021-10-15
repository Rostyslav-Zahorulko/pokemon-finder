import { Component } from 'react';
import pokemonApi from '../../services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const previousPokemonName = prevProps.pokemonName;
    const currentPokemonName = this.props.pokemonName;

    if (previousPokemonName !== currentPokemonName) {
      this.searchPokemon(currentPokemonName);
    }
  }

  searchPokemon = pokemonName => {
    this.setState({ pokemon: null, error: null, isLoading: true });

    pokemonApi
      .fetchPokemon(pokemonName)
      .then(pokemon => this.setState({ pokemon }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { pokemon, error, isLoading } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        <h1>Pokemon Info</h1>

        {!pokemonName && <p>Enter pokemon name</p>}

        {isLoading && <p>Loading...</p>}

        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
              width="240"
            />
          </div>
        )}

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

export default PokemonInfo;
