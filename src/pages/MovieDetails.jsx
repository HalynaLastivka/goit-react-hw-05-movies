import React, { Component, useEffect, useState } from 'react';
import { useParams, NavLink, Routes, Route } from 'react-router-dom';

import { findMovieById, imgPath } from 'services/api';
import MovieCast from './MovieCast';
import MovieReview from './MovieReview';

const MovieDetails = () => {
  const { movieId } = useParams();

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
        console.log(movieData);
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
      {movieDetails !== null && (
        <div>
          <img
            src={imgPath + movieDetails.poster_path}
            alt={movieDetails.title}
            width="150"
            height="200"
          ></img>
          <div class="info-movie">
            <h2>{movieDetails.title}</h2>
            <p>User score: {movieDetails.vote_average}</p>
            <p>Overview</p>
            <p>{movieDetails.overview}</p>
            <p>Genres</p>
            {movieDetails.genres.map(genre => {
              return <p>{genre.name}</p>;
            })}
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast" className="header-link">
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="review" className="header-link">
                  Review
                </NavLink>
              </li>
            </ul>

            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="review" element={<MovieReview />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
