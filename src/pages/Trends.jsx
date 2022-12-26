import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieItem } from '../components/MovieItem/MovieItem';

export function Trends() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => handleFetch(), []);

  const handleFetch = () => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=f6d5a4fa968409c62e241bddb68c1803')
      .then(el => el.json())
      .then(el => setMovies(el.results));
  };

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(el => (
          <MovieItem
            key={el.id}
            data={el}
            name={el.name || el.title}
            id={el.id}
            state={{ from: location }}
          />
        ))}
      </ul>
    </>
  );
}
