import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  results: [],
  searchText: "", 
  error: '',
};

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (searchText) => {
      const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
      const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${searchText}`
      const response = await fetch(URL)
      const json = await response.json()
      return json
  }
);

export const searchSlice = createSlice({
  
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.results;
      })  
       .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.results = []
        state.error = action.error.message
      })
  },
});


export default searchSlice.reducer;
