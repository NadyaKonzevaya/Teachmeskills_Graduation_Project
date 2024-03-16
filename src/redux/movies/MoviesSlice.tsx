import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCastMovieDetails, fetchMoreMovies, fetchMovieDetails, fetchMovies,
  fetchMoviesByQuery, fetchMoviesByParams,
  fetchRecommendsMovieDetails,
} from './operations';
import { IMoviesState, IActor, IMovie } from '../interfaces';

const initialState: IMoviesState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
  currentMovie: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleIsFavorite: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((movie) => movie.id === action.payload);
      if (index !== -1) {
        const updatedItems = [...state.items];
        updatedItems[index].isFavorite = !updatedItems[index].isFavorite;
        state.items = updatedItems;
      }
      state.currentMovie.isFavorite = !state.currentMovie?.isFavorite;
      const isMovieInFavorite = state.favorites.find(({ id }) => id === state.currentMovie.id);
      if (state.currentMovie.isFavorite && !isMovieInFavorite) {
        state.favorites.push(state.currentMovie);
      } else {
        state.favorites = state.favorites.filter((favMovie) => favMovie.id !== action.payload);
      }
    },
    setCurrentMovie: (state, action: PayloadAction<number>) => {
      state.currentMovie = state.items.find((movie) => movie.id === action.payload);
    },
    filterMoviesByRating: (state, action) => {
      const start = Number(action.payload.start);
      const end = Number(action.payload.end);
      console.log(start, end);
      
      state.items = state.items.filter(({ vote_average }) => vote_average >= start && vote_average <= end);
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.map((movie) => ({ ...movie, isFavorite: false }));
    })
    .addCase(fetchMovies.rejected, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(fetchMoreMovies.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMoreMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
    })
    .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.error = null;
      const isMovieInFavorite = (state.favorites.findIndex(movie => movie.id === action.payload.id) !== -1);
      state.currentMovie = { ...action.payload, isFavorite: isMovieInFavorite };
    })
    .addCase(fetchCastMovieDetails.fulfilled, (state, action: PayloadAction<IActor[]>) => {
      const cast = action.payload.map((actor) => actor.name);
      state.currentMovie = { ...state.currentMovie, actors: cast };
    })
    .addCase(fetchRecommendsMovieDetails.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.currentMovie = { ...state.currentMovie, recommendations: action.payload };
    })
    .addCase(fetchMoviesByParams.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.items = action.payload;
    })
    .addCase(fetchMoviesByQuery.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.items = action.payload;
    }),
});

export const { setCurrentMovie, filterMoviesByRating, toggleIsFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
