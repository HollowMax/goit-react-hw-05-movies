import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function MovieItem({ name, id, state }) {
  return (
    <li>
      <Link to={'/movies/' + id} state={state}>
        {name}
      </Link>
      <Outlet />
    </li>
  );
}

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
