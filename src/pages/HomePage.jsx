import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import css from 'app.module.css';
import MoviesList from 'components/MoviesList';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchAll } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setIsLoading(true);
        const postsData = await fetchAll();

        setMovies(postsData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <h1 className={css.titlemain}>Trending today</h1>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default HomePage;
