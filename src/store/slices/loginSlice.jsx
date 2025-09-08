import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
