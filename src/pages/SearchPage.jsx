import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { findbySearchWord } from 'services/api';
import MovieListItem from '../components/MovieListItem';
import css from 'app.module.css';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchAllPosts = async () => {
      try {
        setIsLoading(true);
        const postData = await findbySearchWord(query);

        setMovies(postData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchPostId.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label>
          <p>Search movie:</p>
          <input type="text" name="searchPostId" required />
        </label>
        <button className={css.btnsearch} type="submit">
          Search
        </button>
      </form>

      <section>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        <ul className={css.movieList}>
          {movies !== null &&
            movies.map(movie => (
              <MovieListItem
                id={movie.id}
                title={movie.title}
                key={movie.id}
                path={movie.poster_path}
                location={location}
              />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default SearchPage;
