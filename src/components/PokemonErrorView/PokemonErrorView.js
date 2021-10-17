import errorImage from '../../images/error-icon.png';

function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="sad cat" width="300" />
      <h2>{message}</h2>
    </div>
  );
}

export default PokemonErrorView;
