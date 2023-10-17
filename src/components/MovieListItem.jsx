import React from 'react';
import { Link } from 'react-router-dom';
import { imgPath } from 'services/api';
import css from 'app.module.css';

const MovieListItem = ({ id, title, path, location }) => {
  const defaultImg = 'https://via.placeholder.com/150x220';
  return (
    <li className={css.movieListItem} key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <img
          src={path ? `${imgPath + path}` : defaultImg}
          alt={title}
          width={200}
        ></img>
        <h3 className={css.fixedwidthtitle}>{title}</h3>
      </Link>
    </li>
  );
};

export default MovieListItem;
