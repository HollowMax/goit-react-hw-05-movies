import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from './CastItem';

export function Cast() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(
    () => {
      handleFetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFetch = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f6d5a4fa968409c62e241bddb68c1803&language=en-US`
    )
      .then(el => el.json())
      .then(el => setData(el));
  };

  return (
    <ul>
      {data &&
        data?.cast?.map(el => (
          <CastItem key={el.id} img={el.profile_path} name={el.name} character={el.character} />
        ))}
    </ul>
  );
}
