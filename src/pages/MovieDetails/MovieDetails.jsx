import { useState, Suspense, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { FlexContainer, StyledImg, SytledButton, StyledList } from './MovieDetails.styled';

export function MovieDetails() {
  const [data, setData] = useState({});
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(
    () => {
      handleFetch();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFetch = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f6d5a4fa968409c62e241bddb68c1803&language=en-US`
    )
      .then(el => {
        if (!el.ok) {
          throw new Error();
        }
        return el.json();
      })
      .then(el => setData(el))
      .catch(console.log);
  };

  return (
    <>
      <SytledButton to={location?.state?.from}>Go back</SytledButton>
      {Object.keys(data).length > 0 && (
        <>
          <FlexContainer>
            {data.poster_path && (
              <StyledImg
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            )}
            <div>
              <h2>
                {data.title} {data.release_date && `(${new Date(data.release_date).getFullYear()})`}
              </h2>
              <p>
                <b>Overview:</b> {data.overview}
              </p>
              <p>
                <b>Genres:</b> {data.genres?.map(el => el.name + ' ')}
              </p>
            </div>
          </FlexContainer>

          <StyledList>
            <li>
              <p>Additional information</p>
            </li>
            <li>
              <NavLink to="cast" state={{ from: location.state.from }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" state={{ from: location.state.from }}>
                Review
              </NavLink>
            </li>
          </StyledList>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
