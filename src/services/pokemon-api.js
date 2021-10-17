const fetchPokemon = pokemonName =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`There is no pokemon named ${pokemonName}`),
    );
  });

const pokemonApi = {
  fetchPokemon,
};

export default pokemonApi;
