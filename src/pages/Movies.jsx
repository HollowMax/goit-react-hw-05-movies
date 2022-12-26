import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MovieItem } from '../components/MovieItem/MovieItem';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [inputData, setInpuData] = useState('');
  const queryParam = query.get('query') ?? '';
  const location = useLocation();

  useEffect(
    () => {
      setInpuData(queryParam);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFetch = searchAQuery => {
    if (!searchAQuery) {
      return setMovies([]);
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f6d5a4fa968409c62e241bddb68c1803&query=${searchAQuery}&language=en-US&page=1&include_adult=false`
    )
      .then(el => el.json())
      .then(el => setMovies(el.results));
  };

  const onSubmit = evt => {
    evt.preventDefault();

    handleFetch(evt.target.input.value);
    setQuery({ query: evt.target.input.value });
  };

  const onChange = evt => {
    setInpuData(evt.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="input" name="input" onChange={onChange} value={inputData} />
        <button type="submit">Search</button>
      </form>

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
