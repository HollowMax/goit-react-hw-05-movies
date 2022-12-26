import { Header } from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Trends } from '../pages/Trends';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';

const Cast = lazy(() =>
  import('pages/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);
const Review = lazy(() =>
  import('pages/Review/Review').then(module => ({
    ...module,
    default: module.Review,
  }))
);

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Trends />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<Trends />} />
      </Routes>
    </>
  );
};
