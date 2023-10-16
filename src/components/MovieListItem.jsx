import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = ({ id, title }) => {
  return (
    <li className="movieListItem" key={id}>
      <Link to={`/movies/${id}`}>
        <h3>Title: {title}</h3>
      </Link>
    </li>
  );
};

export default MovieListItem;
