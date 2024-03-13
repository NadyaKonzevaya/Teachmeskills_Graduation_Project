import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

export interface IAuthState {
  isLoggedIn?: boolean;
  user: {
    id: number, username: string, email: string, course_group?: number } | null;
  tokens: { access: string, refresh: string } | null;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
  tokens: null,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => builder
    .addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    }),
});

export const { setLogOut } = authSlice.actions;

export default authSlice.reducer;
