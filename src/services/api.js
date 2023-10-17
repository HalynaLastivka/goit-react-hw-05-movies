export const imgPath = 'https://image.tmdb.org/t/p/w200/';

const fetchData = async url => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTYxZTIyYTI0YmJiOWU0OTdjOGZlZDU1NGQ0NjkzMyIsInN1YiI6IjY1Mjk4NTU3MzU4ZGE3MDBjNmYwNzAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VL6lmG_08LXTLUfrYFhS4bUBBPTIOydGR3Un7j9UxcI',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const findMovieById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  return fetchData(url);
};

export const findMovieReviewById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  return fetchData(url);
};

export const findbySearchWord = async movieId => {
  const url = `https://api.themoviedb.org/3/search/movie??include_adult=false&language=en-US&page=1&query=${movieId}`;
  return fetchData(url);
};

export const findMovieCastById = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  return fetchData(url);
};

export const fetchAll = async (postId, page) => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  return fetchData(url);
};
