import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import custom from '../../axios/custom';

const getLocalStorage = () => {
  return localStorage.getItem('favorite')
    ? JSON.parse(localStorage.getItem('favorite'))
    : [];
};
const initialState = {
  isFavoriteOpen: false,
  isLoading: false,
  isError: false,
  favoriteMeals: getLocalStorage(),
  surpriseMeal: {},
};

export const fetchSurpriseMeal = createAsyncThunk(
  'favorite/fetchSurpriseMeal',
  async () => {
    try {
      const res = await custom('/random.php');
      return res.data;
    } catch (error) {
      return error.response;
    }
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state) => {
      state.isFavoriteOpen = !state.isFavoriteOpen;
    },
    addToFavorites: (state, action) => {
      const { favoriteMeals } = state;
      const { id, meal, img } = action.payload;
      console.log(id);
      if (favoriteMeals.find((meal) => meal.id === id)) return;
      const newFood = {
        id,
        img,
        meal,
      };
      state.favoriteMeals = [...favoriteMeals, newFood];
    },
    deleteFromFavorites: (state, action) => {
      state.favoriteMeals = state.favoriteMeals.filter(
        (meal) => meal.id !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchSurpriseMeal.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSurpriseMeal.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.surpriseMeal = action.payload.meals[0];
    },
    [fetchSurpriseMeal.rejected]: (state) => {
      state.isError = true;
    },
  },
});

export const { addToFavorites, toggleFavorite, deleteFromFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
