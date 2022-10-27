import { configureStore } from '@reduxjs/toolkit';
import mealSliceReducer from '../features/meal/mealSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
export const store = configureStore({
  reducer: {
    meals: mealSliceReducer,
    favorite: favoriteReducer,
  },
});
