import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/Auth";
import TabsReducer from "./features/Tabs";

const rootReducer = combineReducers({
  auth: AuthReducer,
  currentTab: TabsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
