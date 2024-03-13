import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://studapi.teachmeskills.by';

interface IRegisterPayload {
  id: number,
  username: string,
  email: string,
  course_group: number,
}

interface RegistrationPayload {
  username: string,
  email: string,
  password: string,
  course_group: number,
}

interface ISignInPayload {
  access: string,
  refresh: string,
}

interface SignInPayload {
  id?: number,
  email: string,
  password: string,
}

export const register = createAsyncThunk<IRegisterPayload, RegistrationPayload, {
  rejectValue: string
}>('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/auth/users/', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk<ISignInPayload, SignInPayload, {
  rejectValue: string
}>('auth/logIn', async (credentials, thunkAPI) => {
  let userDataResponse;
  try {
    const tokensResponse = await axios.post('/auth/jwt/create/', credentials);
    if (tokensResponse.data.access) {
      axios.defaults.headers.common.Authorization = `Bearer ${tokensResponse.data.access}`;
      userDataResponse = await axios.get('/auth/users/me/');
      localStorage.setItem('accessToken', JSON.stringify(tokensResponse.data.access));
      localStorage.setItem('refreshToken', JSON.stringify(tokensResponse.data.refresh));
    }
    return userDataResponse.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
