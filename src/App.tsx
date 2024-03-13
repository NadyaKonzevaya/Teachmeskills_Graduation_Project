import { Routes, Route } from 'react-router-dom';
import { lazy, useState } from 'react';
import './App.css';
import {
  RegistrationSharedLayout,
  // RegistrationForm,
  // ResetPasswordForm,
  MainSharedLayout,
  // MainMovieList,
  // Settings,
  // FilteredMovieList,
  SignInForm,
  // SearchList,
  // TrendsMovieList,
  // FavoriteMovieList,
} from './components';
// import { EmptyFavoritePage } from './pages';
// import { MovieDetails } from './components/MovieDetails';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
// import MainPage from './pages/MainPage';

const RegistrationForm = lazy(() => import('./components/RegistrationForm/RegistrationForm'));
const ResetPasswordForm = lazy(() => import('./components/ResetPasswordForm/ResetPasswordFrom'));
const MainMovieList = lazy(() => import('./components/MainMovies/MainMovieList'));
const FilteredMovieList = lazy(() => import('./components/FilteredMovieList/FilteredMovieList'));
const SearchList = lazy(() => import('./components/SearchList/SearchList'));
const MovieDetails = lazy(() => import('./components/MovieDetails/MovieDetails'));
const TrendsMovieList = lazy(() => import('./components/TrendsMovieList/TrendsMovieList'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const FavoriteMovieList = lazy(() => import('./components/FavoriteMovieList/FavoriteMovieList'));

function App() {
  const [queryString, setQueryString] = useState('');

  return (
    <Routes>
      <Route path="/" element={<RestrictedRoute component={RegistrationSharedLayout} redirectTo="/movies" />}>
        <Route index element={<SignInForm />} />
        <Route path="signUp" element={<RegistrationForm />} />
        <Route path="reset" element={<ResetPasswordForm type="reset1" />} />
        <Route path="confirmReset" element={<ResetPasswordForm type="reset2" />} />
        <Route path="setNewPassword" element={<ResetPasswordForm type="newPassword" />} />
      </Route>
      <Route path="/movies" element={<PrivateRoute component={() => <MainSharedLayout changeQueryString={setQueryString} />} redirectTo="/" />}>
        <Route index element={<MainMovieList />} />
        <Route path="sorting" element={<FilteredMovieList />} />
        <Route path="search" element={<SearchList queryString={queryString} />} />
        <Route path=":movieId" element={<MovieDetails />} />
        <Route path="trends" element={<TrendsMovieList />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favorites" element={<FavoriteMovieList />} />
      </Route>
    </Routes>
  );
}

export default App;
