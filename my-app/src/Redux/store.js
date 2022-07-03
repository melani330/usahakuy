import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const rootReducer = combineReducers({
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
