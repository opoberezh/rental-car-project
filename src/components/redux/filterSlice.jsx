import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    selectedMake: null,
    selectedPrice: null,
    selectedPriceLabel: null,
    minValue: '',
    maxValue: '',
  },
  reducers: {
    setMake(state, action) {
      state.selectedMake = action.payload;
    },
    setPrice(state, action) {
      state.selectedPrice = action.payload;
      state.selectedPriceLabel = action.payload ? `${action.payload}` : null;
    },
    setMinValue(state, action) {
      state.minValue = action.payload;
    },
    setMaxValue(state, action) {
      state.maxValue = action.payload;
    },
  },
});
export const {
  updateFilter,
  setMake,
  setPrice,
  selectedPriceLabel,
  setMinValue,
  setMaxValue,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
