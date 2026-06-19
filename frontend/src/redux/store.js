import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Features/searchSlice";
import favouriteReducer from "./Features/favourite";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favourite: favouriteReducer,
  },
});
