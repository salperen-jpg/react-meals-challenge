import {
  ADD_FAVORITE,
  HANDLE_CHANGE,
  REMOVE_FAVORITE,
  SET_LOADING,
  SET_MEALS,
  SET_RANDOM_MEAL,
  SET_SINGLE_MEAL,
  TOGGLE_FAVORITE,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_MEALS:
      return { ...state, meals: action.payload, isLoading: false };
    case TOGGLE_FAVORITE:
      return { ...state, isFavoriteOpen: !state.isFavoriteOpen };
    case ADD_FAVORITE:
      const specificMeal = state.meals.find(
        (meal) => meal.idMeal === action.payload
      );
      if (
        state.favoriteMeals.findIndex(
          (meal) => meal.idMeal === action.payload
        ) === -1
      ) {
        const newMeals = [...state.favoriteMeals, specificMeal];
        return { ...state, favoriteMeals: newMeals };
      } else {
        return { ...state };
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteMeals: state.favoriteMeals.filter(
          (favMeal) => favMeal.idMeal !== action.payload
        ),
      };
    case HANDLE_CHANGE:
      return { ...state, query: action.payload };
    case SET_RANDOM_MEAL:
      return { ...state, surpriseMeal: action.payload, isLoading: false };
    case SET_SINGLE_MEAL:
      return { ...state, singleMeal: action.payload, isLoading: false };
    default:
      throw new Error(`The action (${action.type}) is not exist`);
  }
};

export default reducer;
