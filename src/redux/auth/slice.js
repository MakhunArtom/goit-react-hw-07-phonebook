import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, current } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isCurrent: false,
  },

  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [current.pending]: state => {
      state.isCurrent = true;
    },

    [current.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCurrent = false;
    },

    [current.rejected]: state => {
      state.isCurrent = false;
    },
  },
});

export const authReducer = authSlice.reducer;
