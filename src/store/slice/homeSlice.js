import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  isLoading: true,
  isError: false,
  listData: [],
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.listData = actions.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// export const {} = slice.actions;
export default slice.reducer;

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  console.log("make request");
  let newArr = [];
  const { data } = await Axios.get("https://jsonplaceholder.typicode.com/todos");
  for (let i = 0; i < 15; i++) {
    newArr.push(data[i]);
  }
  return newArr;
});
