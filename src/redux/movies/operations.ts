import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { IAllCard, IMyCard, ISearchProps } from '../../components/Card/Card.types';
import { API_KEY, BASE_URL } from '../../utils/constants';
// import api from '../api';

export const fetchMovies = createAsyncThunk<IMovie[], void, { rejectValue: string }>('movies/fetchMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// export const fetchCardInfo = createAsyncThunk<IAllCard[], number, { rejectValue: string }>('cards/fetchCardInfo', async (cardId, { rejectWithValue }) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/3/movie/${cardId}?api_key=${API_KEY}`);

//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// export const fetchMyCards = createAsyncThunk<ISearchProps[], { limit: number, offset: number }, { rejectValue: string }>('cards/fetchMyCards', async ({ limit, offset }, { rejectWithValue }) => {
//   try {
//     const response = await api.get(`/blog/posts/?limit=${limit}&offset=${offset}`);
//     // const response = await api.get(`/blog/posts/my_posts?limit=${limit}&offset=${offset}`);
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// export const fetchCardsOrdered = createAsyncThunk<IMyCard[], { limit: number, offset: number, order: string }, { rejectValue: string }>('cards/fetchCardsOrdered', async ({ limit, offset, order }, { rejectWithValue }) => {
//   try {
//     const response = await api.get(`/blog/posts/?limit=${limit}&offset=${offset}&ordering=${order}`);
//     return response.data.results;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });
