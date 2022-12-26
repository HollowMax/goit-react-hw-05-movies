import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from './ReviewItem';

export function Review() {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(
    () => {
      handleFetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFetch = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f6d5a4fa968409c62e241bddb68c1803&language=en-US&page=1`
    )
      .then(el => el.json())
      .then(el => setData(el));
  };


  return (
    <ul>
      {data?.results?.length > 0 ? (
        data.results.map(el => <ReviewItem key={el.id} author={el.author} text={el.content} />)
      ) : (
        <p>We don`t have any review for this movie.</p>
      )}
    </ul>
  );
}
