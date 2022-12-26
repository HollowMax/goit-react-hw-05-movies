import { StyledImg } from './CastItem.styled';
import PropTypes from 'prop-types';

export function CastItem({ img, name, character }) {
  return (
    <li>
      {img && <StyledImg src={`https://image.tmdb.org/t/p/w500${img}`} />}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
}

CastItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
