import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './auth-operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    //registerUser
    [registerUser.pending]: handlePending,
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registerUser.rejected]: handleRejected,
    //loginUser
    [loginUser.pending]: handlePending,
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [loginUser.rejected]: handleRejected,
  },
});

export const authReducer = authSlice.reducer;
