import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, resetPassword, resetPasswordConform } from './operations';
import { IAuthState } from '../interfaces';

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
  tokens: null,
  isRefreshing: false,
  error: null,
  emailForReset: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogInTrue: (state) => {
      state.isLoggedIn = true;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.tokens = false;
      state.isRefreshing = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => builder
    .addCase(register.fulfilled, (state, action) => {
      // state.isLoggedIn = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.emailForReset = action.payload;
    })
    .addCase(resetPasswordConform.fulfilled, (state) => {
      state.isLoggedIn = true;
    }),
});

export const { setLogInTrue, setLogOut } = authSlice.actions;

export default authSlice.reducer;
