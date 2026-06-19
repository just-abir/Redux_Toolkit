import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    item: JSON.parse(localStorage.getItem("collection")) || [],
  },

  reducers: {
    addfavourite: (state, action) => {
      const exist = state.item.find((item) => item.id == action.payload.id);
      if (!exist) {
        state.item.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.item));
      }
    },

    removefavourite: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);

      localStorage.setItem("collection", JSON.stringify(state.item));
    },

    clearfavourite: (state, action) => {
      state.item = [];
      localStorage.removeItem("collection");
    },
  },
});

export const { addfavourite, removefavourite, clearfavourite } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
