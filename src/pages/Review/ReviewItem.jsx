import PropTypes from 'prop-types';

export function ReviewItem({ author, text }) {
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{text}</p>
    </li>
  );
}

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
