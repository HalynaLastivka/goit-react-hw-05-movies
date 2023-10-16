// import ErrorMessage from 'components/ErrorMessage';
// import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchAll } from 'services/api';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setIsLoading(true);
        const postsData = await fetchAll();
        console.log(postsData);

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
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
