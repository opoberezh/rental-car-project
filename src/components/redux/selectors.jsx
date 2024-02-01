export const selectAdverts = state => state.adverts.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilter = state => state.filter;

export const selectFavorites = state => state.favorites.favorites;

export const selectTotalFavorites = state => state.favorites.favorites.length;
