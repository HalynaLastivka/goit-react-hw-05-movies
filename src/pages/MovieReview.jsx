// import ErrorMessage from 'components/ErrorMessage';
// import Loader from 'components/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findMovieReviewById } from 'services/api';

const MovieReview = () => {
  const { movieId } = useParams();
  const [reviews, setRev] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const castData = await findMovieReviewById(movieId);

        setRev(castData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {/* {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />} */}
      {reviews !== null && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieReview;
