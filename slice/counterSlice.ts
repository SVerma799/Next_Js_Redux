import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// Create a slice of state
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions
export const { increament, decreament } = counterSlice.actions;
export const selectValue = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
