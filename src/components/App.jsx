import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from 'app.module.css';

// import HomePage from 'pages/HomePage';
// import SearchPage from 'pages/SearchPage';
// import MovieDetails from 'pages/MovieDetails';

import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const SearchPage = lazy(() => import('pages/SearchPage'));
// const PostDetailsPage = lazy(() => import('pages/PostDetailsPage'));

export const App = () => {
  return (
    <>
      <header>
        <nav className={css.header}>
          <NavLink
            className={({ isActive }) =>
              `${css['headerlink']} ${isActive ? css.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${css['headerlink']} ${isActive ? css.active : ''}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </>
  );
};
