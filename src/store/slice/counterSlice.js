import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count = state.count === 0 ? state.count : state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { decrement, increment, reset } = slice.actions;

export default slice.reducer;
