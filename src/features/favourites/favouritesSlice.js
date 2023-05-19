import { createSlice } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage.js';


const initialState = getItem("favourites") || []

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    saveImage: (state, action) => {
      console.log(action.payload)
      state.push(action.payload)
    }, 
  },
});

export const { saveImage } = favouritesSlice.actions;

export default favouritesSlice.reducer;
