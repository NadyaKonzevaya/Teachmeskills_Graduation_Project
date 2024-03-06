import { IMoviesState } from './movies/MoviesSlice';

interface IState {
  movies: IMoviesState;
}

export const getMoviesSelector = (state: IState) => state.movies.items;
export const getIsLoadingSelector = (state: IState) => state.movies.isLoading;
export const getMovieDetailsSelector = (state: IState) => state.movies.currentMovie;
export const getRecommendationsSelector = (state: IState) => state
  .movies.currentMovie?.recommendations;
