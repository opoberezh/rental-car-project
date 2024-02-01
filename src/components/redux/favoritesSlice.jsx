import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push({...action.payload});
    },
    removeFromFavorite: (state, action) => {
      const idToRemove = action.payload;
      state.favorites = state.favorites.filter(
       (item) => item.id !== idToRemove);

    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;

export const favoritesReducer =  favoritesSlice.reducer;
