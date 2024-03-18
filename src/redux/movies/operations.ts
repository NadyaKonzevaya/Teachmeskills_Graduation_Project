import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../../utils/constants';
import { IActor, IMovie, IParams } from '../interfaces';

export const fetchMovies = createAsyncThunk<IMovie[], void, { rejectValue: string }>('movies/fetchMovies', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchTrends = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log('error in fetchTrends');
  }
};

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

export const fetchMoviesByParams = createAsyncThunk<IMovie[], IParams, { rejectValue: string }>('movies/fetchMoviesByParams', async ({
  sortingBy = '', minVotes = '', page = '', genres = '', year = '', country = '',
}, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&page=${page}&vote_count.gte=${minVotes}&sort_by=${sortingBy}&with_genres=${genres}&year=${year}&with_origin_country=${country}`);
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
