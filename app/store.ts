import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CounterReducer from "../slice/counterSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
