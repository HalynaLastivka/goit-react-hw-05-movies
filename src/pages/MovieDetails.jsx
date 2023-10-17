import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

import { findMovieById, imgPath } from 'services/api';
// import MovieCast from './MovieCast';
// import MovieReview from './MovieReview';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import css from 'app.module.css';

const MovieCast = lazy(() => import('pages/MovieCast'));
const MovieReview = lazy(() => import('pages/MovieReview'));

const MovieDetails = () => {
  const defaultImg = 'https://via.placeholder.com/150x220';
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchGetMovie = async () => {
      try {
        setIsLoading(true);
        const movieData = await findMovieById(movieId);

        setMovieDetails(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGetMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go Back</Link>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movieDetails !== null && (
        <>
          <div className={css.wrapperMovie}>
            <img
              src={
                movieDetails.poster_path
                  ? `${imgPath + movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
              width={200}
            ></img>
            <div class="info-movie">
              <h2>{movieDetails.title}</h2>
              <p className={css.titleadd}>
                User score: {movieDetails.vote_average}
              </p>
              <p className={css.titleadd}>Overview</p>
              <p className={css.overview}>{movieDetails.overview}</p>
              <p className={css.titleadd}>Genres</p>
              <div className={css.wrapgenres}>
                {movieDetails.genres.map(genre => {
                  return <p>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>

          <div className={css.wrapperadd}>
            <div>
              <p className={css.titleadd}>Additional information</p>
              <ul className={css.addList}>
                <li>
                  <NavLink
                    to="cast"
                    className={({ isActive }) =>
                      `${css['addlink']} ${isActive ? css.active : ''}`
                    }
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="review"
                    className={({ isActive }) =>
                      `${css['addlink']} ${isActive ? css.active : ''}`
                    }
                  >
                    Review
                  </NavLink>
                </li>
              </ul>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="cast" element={<MovieCast />} />
                  <Route path="review" element={<MovieReview />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
