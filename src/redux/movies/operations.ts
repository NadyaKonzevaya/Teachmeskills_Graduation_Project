import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from 'querystring';
// import { IAllCard, IMyCard, ISearchProps } from '../../components/Card/Card.types';
import { API_KEY, BASE_URL } from '../../utils/constants';
import { IActor, IMovie } from './MoviesSlice';
// import api from '../api';

export interface IParams {
  sortingBy?: string,
  minVotes?: number,
  page?: number,
  query?: string,
  title?: string,
  genres?: string,
  year?: string,
  // year: number,
  // title: string,
  // genres: string[],
  // country: string[],
}

export const fetchMovies = createAsyncThunk<IMovie[], void, { rejectValue: string }>('movies/fetchMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const fetchMoreMovies = createAsyncThunk<IMovie[], { page: number }, { rejectValue: string }>('movies/fetchMoreMovies', async ({ page }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}&page=${page}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchMovieDetails = createAsyncThunk<IMovie[], number, { rejectValue: string }>('movies/fetchMovieDetails', async (movieId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchCastMovieDetails = createAsyncThunk<IActor[], number, { rejectValue: string }>('movies/fetchCastMovieDetails', async (movieId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`);

    return response.data.cast;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchRecommendsMovieDetails = createAsyncThunk<IMovie[], number, { rejectValue: string }>('movies/fetchRecommendationsMovieDetails', async (movieId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/movie/${movieId}/recommendations?api_key=${API_KEY}`);

    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchMoviesByParams = createAsyncThunk<IMovie[], IParams, { rejectValue: string }>('movies/fetchMoviesByParams', async ({ sortingBy = '', minVotes = '', page = 1, genres = '', year = '' }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&page=${page}&vote_count.gte=${minVotes}&sort_by=${sortingBy}&with_genres=${genres}&year=${year}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const fetchMoviesByQuery = createAsyncThunk<IMovie[], string, { rejectValue: string }>('movies/fetchMoviesByQuery', async (title, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${title}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
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
