import { IAuthState } from './auth/authSlice';
import { IMoviesState } from './movies/MoviesSlice';

interface IState {
  movies: IMoviesState;
  auth: IAuthState;
}

export const getMoviesSelector = (state: IState) => state.movies.items;
export const getFavoriteMoviesSelector = (state: IState) => state.movies.favorites;
export const getIsLoadingSelector = (state: IState) => state.movies.isLoading;
export const getMovieDetailsSelector = (state: IState) => state.movies.currentMovie;
export const getRecommendationsSelector = (state: IState) => state
  .movies.currentMovie?.recommendations;

export const getIsLoggedInSelector = (state: IState) => state.auth.isLoggedIn;
