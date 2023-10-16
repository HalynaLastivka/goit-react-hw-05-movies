import axios from 'axios';

export const imgPath = 'https://image.tmdb.org/t/p/w200/';

export const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/'
  );
  return data;
};

export const findMovieById = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(
      //   'https://api.themoviedb.org/3/movie/299054?language=en-US',
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const findMovieReviewById = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(
      //   'https://api.themoviedb.org/3/movie/299054?language=en-US',
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const findbySearchWord = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(
      //   'https://api.themoviedb.org/3/movie/299054?language=en-US',
      `https://api.themoviedb.org/3/search/movie??include_adult=false&language=en-US&page=1&query=${movieId}`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const findMovieCastById = async movieId => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(
      //   'https://api.themoviedb.org/3/movie/299054?language=en-US',
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchAll = async (postId, page) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
