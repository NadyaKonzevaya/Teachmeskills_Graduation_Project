import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchMovies } from './operations';

export interface IMovie {
  id: number,
  poster_path: string,
  title: string,
  genre_ids: number[],
  vote_average: number,
}

export interface IMoviesState {
  items: IMovie[];
  //   myCards: IAllCard[];
  //   count: number;
  isLoading: boolean;
  error: string | null;
//   currentCard: IAllCard | null;
//   CardIsLoading: boolean,
//   CardError: string | null,
}

const initialState: IMoviesState = {
  items: [],
  //   myCards: [],
  //   count: 0,
  isLoading: false,
  error: null,
//   currentCard: null,
//   CardIsLoading: false,
//   CardError: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  //   reducers: {
  //     toggleIsFavorite: (state, action: PayloadAction<number>) => {
  //       const index = state.cards.findIndex((card) => card.id === action.payload);
  //       state.cards[index].isFavorite = !state.cards[index].isFavorite;
  //     },
  //     setCurrentCard: (state, action: PayloadAction<number>) => {
  //       state.currentCard = state.cards.find((card) => card.id === action.payload);
  //     },
  //   },
  extraReducers: (builder) => builder
    .addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    //   state.cards = action.payload.map((card) => ({ ...card, isFavorite: false }));
    })
    .addCase(fetchMovies.rejected, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
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

// export const { toggleIsFavorite, setCurrentCard } = cardsSlice.actions;

export default moviesSlice.reducer;
