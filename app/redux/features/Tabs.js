import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentTab: "dashboard" };

const tabs = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = tabs.actions;

export default tabs.reducer;
