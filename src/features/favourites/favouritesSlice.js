import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage.js";

const initialState = getItem("favourites") || [];

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    saveImage: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    filterByDescription: (state, action) => {
      if (!action.payload) {
        return initialState;
      } else {
        return state.filter((fav) =>
          fav.description.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    editDescription: (state, action) => {
      console.log(action.payload)
      const image = state.find((fav) => fav.id === action.payload.imageEdit.id);
      image.description = action.payload.description
    },
    deleteFavourite: (state, action) => {
      return state.filter((fav) => fav.id !== action.payload.id)
    }
  },
});

export const { saveImage, filterByDescription, editDescription, deleteFavourite } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
