// import { ReactComponent as IconSearch } from 'assets/images/search.svg';
// import ErrorMessage from 'components/ErrorMessage';
// import Loader from 'components/Loader';

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { findbySearchWord } from 'services/api';
import MovieListItem from '../components/MovieListItem';

// (async () => { // -- IIFE (Immediately invoked function expression)
//   try {
//     setIsLoading(true);
//     const postData = await findPostById(query);

//     setPosts([postData]);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// })()

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
    console.log('dgfs');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Search post by id:</p>
          <input type="text" name="searchPostId" required />
        </label>
        <button type="submit">Search</button>
      </form>

      <section>
        <ul className="postList">
          {movies !== null &&
            movies.map(movie => (
              <MovieListItem id={movie.id} title={movie.title} key={movie.id} />
            ))}
        </ul>
      </section>
    </div>
  );
};

export default SearchPage;
