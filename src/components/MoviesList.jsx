import React from 'react';
import MovieListItem from './MovieListItem';
import css from 'app.module.css';

const MoviesList = ({ movies, location }) => {
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <ul className={css.movieList}>
      {showMovies &&
        movies.map(movie => {
          return (
            <MovieListItem
              id={movie.id}
              title={movie.title}
              path={movie.poster_path}
              location={location}

              //   userId={post.userId}
              //   body={post.body}
              //   key={post.id}
            />
          );
        })}
    </ul>
  );
};

export default MoviesList;
