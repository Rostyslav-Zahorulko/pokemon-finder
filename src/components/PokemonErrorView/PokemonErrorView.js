import errorImage from '../../images/error-icon.png';

function PokemonErrorView({ message }) {
  console.log('ErrorView');

  return (
    <div role="alert">
      <img src={errorImage} alt="dinosaur" width="300" />
      <h2>{message}</h2>
    </div>
  );
}

export default PokemonErrorView;
