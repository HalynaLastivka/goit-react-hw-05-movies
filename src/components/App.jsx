// import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from 'app.module.css';

import HomePage from 'pages/HomePage';
// import PostsPage from 'pages/PostsPage';
import SearchPage from 'pages/SearchPage';
import MovieDetails from 'pages/MovieDetails';
// import PostDetailsPage from 'pages/PostDetailsPage';

// import { StyledAppContainer, StyledNavLink } from 'App.styled';
// import Loader from 'components/Loader';

// const HomePage = lazy(() => import('pages/HomePage'));
// const PostsPage = lazy(() => import('pages/PostsPage'));
// const SearchPage = lazy(() => import('pages/SearchPage'));
// const PostDetailsPage = lazy(() => import('pages/PostDetailsPage'));

export const App = () => {
  return (
    // <StyledAppContainer>
    <>
      <header>
        <nav className={css.header}>
          <NavLink className={css.headerlink} to="/">
            Home
          </NavLink>

          <NavLink className={css.headerlink} to="/search">
            Search
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
      </Routes>
    </>
    // </StyledAppContainer>
  );
};
