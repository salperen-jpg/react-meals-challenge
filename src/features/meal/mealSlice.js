import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import custom from '../../axios/custom';

export const fetchMeals = createAsyncThunk(
  'meal/fetchMeals',
  async (query = '', thunkAPI) => {
    try {
      const res = await custom(`/search.php?s=${query}`);
      return res.data;
    } catch (error) {
      return error.response;
    }
  }
);

export const fetchSingleMeal = createAsyncThunk(
  'meal/fetchSingleMeal',
  async (id) => {
    try {
      const res = await custom(`/lookup.php?i=${id}`);
      console.log(res);
      return res.data;
    } catch (error) {
      return error.response;
    }
  }
);

const initialState = {
  isLoading: false,
  meals: [],
  error: { show: false, msg: '' },
  query: '',
  singleMeal: {},
};

const mealSlice = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchMeals.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMeals.fulfilled]: (state, action) => {
      let meals = action.payload.meals;
      state.isLoading = false;
      if (!meals) {
        meals = [];
      }
      state.meals = meals;
    },
    [fetchMeals.rejected]: (state) => {
      state.isLoading = false;
      state.error = { show: true, msg: 'Something went wrong' };
    },
    [fetchSingleMeal.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchSingleMeal.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleMeal = action.payload.meals[0];
    },
    [fetchSingleMeal.rejected]: (state) => {
      state.isLoading = false;
      state.error = { show: true, msg: 'Something went wrong' };
    },
  },
});

export default mealSlice.reducer;
export const { handleChange } = mealSlice.actions;
