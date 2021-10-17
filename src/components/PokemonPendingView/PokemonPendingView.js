import Loader from 'react-loader-spinner';
import PokemonDataView from '../PokemonDataView';
import pendingImage from '../../images/pending-icon.png';

function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    name: pokemonName,
    stats: [],
  };

  return (
    <div>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

export default PokemonPendingView;
