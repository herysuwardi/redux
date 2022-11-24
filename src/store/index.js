import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./slice/homeSlice";
import counterSlice from "./slice/counterSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    counter: counterSlice,
  },
});
