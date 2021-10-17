import { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

class SearchForm extends Component {
  state = {
    pokemonName: '',
  };

  handleChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    const { pokemonName } = this.state;
    const { onSubmit } = this.props;
    const trimmedPokemonName = pokemonName.trim();

    e.preventDefault();

    if (!trimmedPokemonName) {
      toast.error('Enter pokemon name');
      return;
    }

    onSubmit(trimmedPokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input type="text" value={pokemonName} onChange={this.handleChange} />

        <button type="submit">
          Search <ImSearch />
        </button>
      </form>
    );
  }
}

export default SearchForm;
