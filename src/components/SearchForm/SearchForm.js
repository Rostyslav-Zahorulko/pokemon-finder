import { Component } from 'react';
import { toast } from 'react-toastify';

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
        <label>
          Enter pokemon name
          <input type="text" value={pokemonName} onChange={this.handleChange} />
        </label>
        <button type="submit">Search pokemon</button>
      </form>
    );
  }
}

export default SearchForm;
