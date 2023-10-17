import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieCastById, imgPath } from 'services/api';
import css from 'app.module.css';

const MovieCast = () => {
  const defaultImg = 'https://via.placeholder.com/150x225';
  const { movieId } = useParams();
  const [casts, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const castData = await findMovieCastById(movieId);

        setComments(castData.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {casts !== null && (
        <ul className={css.ulcast}>
          {casts.map(cast => {
            return (
              <li className={css.castlist} key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `${imgPath + cast.profile_path}`
                      : defaultImg
                  }
                  alt={cast.title}
                  width={200}
                ></img>
                <h3>{cast.name}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
