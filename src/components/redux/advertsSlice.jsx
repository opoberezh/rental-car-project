import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
 
  },
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  const newItems = action.payload.filter(newItem => !state.adverts.items.some(item => item.id === newItem.id));
  state.adverts.items = [...state.adverts.items, ...newItems];

  state.error = null;
};


export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
     
});
export const { setCurrentPage } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
