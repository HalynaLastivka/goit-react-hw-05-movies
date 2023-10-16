import React from 'react';
import MovieListItem from './MovieListItem';

const MoviesList = ({ movies }) => {
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <ul className="postList">
      {showMovies &&
        movies.map(movie => {
          return (
            <MovieListItem
              id={movie.id}
              title={movie.title}
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
