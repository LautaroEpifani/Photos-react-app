import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage.js";

const initialState = {
  favouritesState: getItem("favourites") || [],
  filteredFavs: []
}

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    saveImage: (state, action) => {
      state.favouritesState.push(action.payload);
    },
    filterByDescription: (state, action) => {
      const filteredFavs = state.favouritesState.filter((fav) =>
        fav.description.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredFavs:
          action.payload.length > 0 ? filteredFavs : [...state.favouritesState]
      };
    },
    editDescription: (state, action) => {
      const image = state.favouritesState.find((fav) => fav.id === action.payload.imageEdit.id);
      image.description = action.payload.description
    },
    deleteFavourite: (state, action) => {
      return {
        ...state,
        favouritesState: state.favouritesState.filter((fav) => fav.id !== action.payload.id),
        filteredFavs: state.filteredFavs.filter((fav) => fav.id !== action.payload.id)
      } 
    },
    sortFavourites : (state, action) => {
      state.favouritesState.sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
    }
  },
});

export const { saveImage, filterByDescription, editDescription, deleteFavourite, sortFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
