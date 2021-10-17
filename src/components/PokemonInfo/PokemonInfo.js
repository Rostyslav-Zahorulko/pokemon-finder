import { Component } from 'react';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingView from '../PokemonPendingView';
import PokemonErrorView from '../PokemonErrorView';
import pokemonApi from '../../services/pokemon-api';

const IDLE = 'idle';
const PENDING = 'pending';
const REJECTED = 'rejected';
const RESOLVED = 'resolved';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const previousPokemonName = prevProps.pokemonName;
    const currentPokemonName = this.props.pokemonName;

    if (previousPokemonName !== currentPokemonName) {
      this.searchPokemon(currentPokemonName);
    }
  }

  searchPokemon = pokemonName => {
    this.setState({ status: PENDING });

    pokemonApi
      .fetchPokemon(pokemonName)
      .then(pokemon => this.setState({ pokemon, status: RESOLVED }))
      .catch(error => this.setState({ error, status: REJECTED }));
  };

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === IDLE) {
      return <p>Enter pokemon name</p>;
    }

    if (status === PENDING) {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === RESOLVED) {
      return <PokemonDataView pokemon={pokemon} />;
    }

    if (status === REJECTED) {
      return <PokemonErrorView message={error.message} />;
    }
  }
}

export default PokemonInfo;
