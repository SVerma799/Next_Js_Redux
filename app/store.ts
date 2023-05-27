import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
