import React, { useContext, useReducer, useEffect } from 'react';
import {
  SET_LOADING,
  SET_ERROR,
  SET_MEALS,
  TOGGLE_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  HANDLE_CHANGE,
  SET_RANDOM_MEAL,
  SET_SINGLE_MEAL,
} from './reducer/actions';
import reducer from './reducer/reducer';
import { API_ENDPOINT, RANDOM_FOOD } from './utils';
import axios from 'axios';
const MealContext = React.createContext();

const initialState = {
  isLoading: true,
  meals: [],
  error: { show: false, msg: '' },
  query: '',
  isFavoriteOpen: false,
  favoriteMeals: [],
  surpriseMeal: {},
  singleMeal: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMeals = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios(url);
      if (response.data.meals === null) {
        dispatch({ type: SET_MEALS, payload: [] });
        return;
      }
      dispatch({ type: SET_MEALS, payload: response.data.meals });
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFavorite = () => {
    dispatch({ type: TOGGLE_FAVORITE });
  };

  const addToFavorites = (id) => {
    dispatch({ type: ADD_FAVORITE, payload: id });
  };

  const deleteFromFavorites = (id) => {
    dispatch({ type: REMOVE_FAVORITE, payload: id });
  };

  const handleChange = (val) => {
    dispatch({ type: HANDLE_CHANGE, payload: val });
  };

  const fetchRandomFood = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios(`${API_ENDPOINT}/random.php`);
      dispatch({ type: SET_RANDOM_MEAL, payload: res.data.meals[0] });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSingleFood = async (id) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await axios(`${API_ENDPOINT}/lookup.php?i=${id}`);
      dispatch({ type: SET_SINGLE_MEAL, payload: res.data.meals[0] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeals(`${API_ENDPOINT}/search.php?s=${state.query}`);
  }, [state.query]);
  return (
    <MealContext.Provider
      value={{
        ...state,
        toggleFavorite,
        addToFavorites,
        deleteFromFavorites,
        handleChange,
        fetchRandomFood,
        fetchSingleFood,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext);
};
