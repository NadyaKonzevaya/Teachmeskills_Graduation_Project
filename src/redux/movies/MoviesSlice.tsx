import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  fetchCastMovieDetails, fetchMoreMovies, fetchMovieDetails, fetchMovies,
  fetchMoviesByQuery, fetchMoviesByParams,
  fetchRecommendsMovieDetails,
} from './operations';

export interface IMovie {
  id: number,
  poster_path: string,
  title: string,
  genre_ids: number[],
  vote_average: number,
  overview?: string,
  actors?: string[],
  recommendations?: IMovie[],
  isFavorite?: boolean,
  genres?: [][],
  runtime?: number,
  release_date?: string,
  budget?: number,
  production_countries?: { name: string }[],
  production_companies?: { name: string }[],
}

export interface IMoviesState {
  items: IMovie[];
  favorites: IMovie[];
  //   myCards: IAllCard[];
  //   count: number;
  isLoading: boolean;
  error: string | null;
  currentMovie: IMovie | null;
//   CardIsLoading: boolean,
//   CardError: string | null,
}

export interface IActor {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number,
}

const initialState: IMoviesState = {
  items: [],
  favorites: [],
  //   myCards: [],
  //   count: 0,
  isLoading: false,
  error: null,
  currentMovie: null,
//   CardIsLoading: false,
//   CardError: null,
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
        // state.currentMovie = updatedItems[index];
        state.currentMovie.isFavorite = !state.currentMovie?.isFavorite;
        const isMovieInFavorite = state.favorites.find(({id}) => id === state.currentMovie.id)
        if (state.currentMovie.isFavorite && !isMovieInFavorite) {
          state.favorites.push(state.currentMovie);
        } else {
          state.favorites = state.favorites.filter((favMovie) => favMovie.id !== action.payload);
        }
      }
    },
    setCurrentMovie: (state, action: PayloadAction<number>) => {
      state.currentMovie = state.items.find((movie) => movie.id === action.payload);
    },
    filterMoviesByRating: (state, action) => {
      state.items = state.items.filter(({ vote_average }) => vote_average >= action.payload.start && vote_average <= action.payload.end);
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
      // state.items.push(...action.payload);
      //   state.cards = action.payload.map((card) => ({ ...card, isFavorite: false }));
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
      // state.items.push(...action.payload);
      //   state.cards = action.payload.map((card) => ({ ...card, isFavorite: false }));
    })
    .addCase(fetchMovieDetails.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.error = null;
      state.currentMovie = { ...action.payload, isFavorite: false };
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
  // .addCase(fetchCardInfo.pending, (state) => {
  //   state.CardIsLoading = true;
  // })
  // .addCase(fetchCardInfo.fulfilled, (state, action: PayloadAction<ICard[]>) => {
  //   state.CardIsLoading = false;
  //   state.CardError = null;
  //   state.currentCard = action.payload;
  // })
  // .addCase(fetchCardInfo.rejected, (state, action: PayloadAction<string>) => {
  //   state.CardIsLoading = false;
  //   state.CardError = action.payload;
  // })
  // .addCase(fetchMyCards.fulfilled, (state, action: PayloadAction<ISearchProps>) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.myCards = action.payload.results.map((card) => ({ ...card, isFavorite: false }));
  //   state.count = action.payload.count;
  // })
  // .addCase(fetchMyCards.rejected, (state, action: PayloadAction<ICard[]>) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // })
  // .addCase(fetchCardsOrdered.fulfilled, (state, action: PayloadAction<ICard[]>) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.myCards = action.payload.map((card) => ({ ...card, isFavorite: false }));
  // }),
});

export const { setCurrentMovie, filterMoviesByRating, toggleIsFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
