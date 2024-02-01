import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchFilteredAdverts } from './operations';

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
  state.adverts.items = action.payload;
  state.error = null;
};

const handleFetchFilteredAdvertsFulfilled = (state, action) => {
  state.isLoading = false;
  state.adverts = { items: action.payload, isLoading: false, error: null, isFilter: true };

  state.error = null;
  state.isFilter = true;
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchAdvertsFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchFilteredAdverts.pending, handlePending)
      .addCase(fetchFilteredAdverts.fulfilled, handleFetchFilteredAdvertsFulfilled)
      .addCase(fetchFilteredAdverts.rejected, handleRejected),
});

export const advertsReducer = advertsSlice.reducer;
