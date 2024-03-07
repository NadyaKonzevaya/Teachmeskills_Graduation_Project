import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  RegistrationSharedLayout, RegistrationForm, ResetPasswordForm, MainSharedLayout, MainMovieList,
  Settings,
  FilteredMovieList,
} from './components';
import { EmptyFavoritePage } from './pages';
import { MovieDetails } from './components/MovieDetails';
// import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationSharedLayout />}>
        <Route index element={<RegistrationForm type="Sign In" />} />
        <Route path="signUp" element={<RegistrationForm type="Sign Up" />} />
        <Route path="reset" element={<ResetPasswordForm type="reset1" />} />
        <Route path="confirmReset" element={<ResetPasswordForm type="reset2" />} />
        <Route path="setNewPassword" element={<ResetPasswordForm type="newPassword" />} />
      </Route>
      <Route path="/movies" element={<MainSharedLayout />}>
        <Route index element={<MainMovieList />} />
        <Route index path="sorting" element={<FilteredMovieList />} />
        <Route path=":movieId" element={<MovieDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="favorite" element={<EmptyFavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
