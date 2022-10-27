import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavoriteContainer from './components/FavoriteContainer';
import Surprise from './pages/Surprise';
import Home from './pages/Home';
import SingleMeal from './pages/SingleMeal';
import { fetchMeals } from './features/meal/mealSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.meals);

  const { favoriteMeals } = useSelector((store) => store.favorite);

  React.useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);

  React.useEffect(() => {
    dispatch(fetchMeals(query));
  }, [query]);

  return (
    <BrowserRouter>
      <Navbar />
      <FavoriteContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='surprise' element={<Surprise />} />
        <Route path='meals/:id' element={<SingleMeal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
