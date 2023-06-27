import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: () => initialState,
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin, reset } = login.actions;

export default login.reducer;
