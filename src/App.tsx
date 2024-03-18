import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import './App.css';
import {
  RegistrationSharedLayout,
  MainSharedLayout,
  SignInForm,
} from './components';
import { AuthRoute } from './components/PrivateRoute';

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
  return (
    <Routes>
      <Route path="/" element={<AuthRoute component={RegistrationSharedLayout} redirectTo="/movies" />}>
        <Route index element={<SignInForm />} />
        <Route path="signUp" element={<RegistrationForm />} />
        <Route path="reset" element={<ResetPasswordForm type="reset1" />} />
        <Route path="confirmReset" element={<ResetPasswordForm type="reset2" />} />
        <Route path="setNewPassword" element={<ResetPasswordForm type="newPassword" />} />
      </Route>
      <Route path="/movies" element={<AuthRoute isPrivate component={MainSharedLayout} redirectTo="/" />}>
        <Route index element={<MainMovieList />} />
        <Route path="sorting" element={<FilteredMovieList />} />
        <Route path="search" element={<SearchList />} />
        <Route path=":movieId" element={<MovieDetails />} />
        <Route path="trends" element={<TrendsMovieList />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favorites" element={<FavoriteMovieList />} />
      </Route>
    </Routes>
  );
}

export default App;
