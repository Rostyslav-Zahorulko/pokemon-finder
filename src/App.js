import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Container from './components/Container';
import SearchForm from './components/SearchForm';
import PokemonInfo from './components/PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;

    return (
      <Container>
        <SearchForm onSubmit={this.handleSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
