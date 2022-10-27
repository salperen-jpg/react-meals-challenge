import React from 'react';
import Loading from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import CommonLayout from '../components/CommonLayout';
import { fetchSurpriseMeal } from '../features/favorite/favoriteSlice';

const Surprise = () => {
  const dispatch = useDispatch();
  const { isLoading, surpriseMeal } = useSelector((store) => store.favorite);

  React.useEffect(() => {
    dispatch(fetchSurpriseMeal());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const {
    strMeal: name,
    strMealThumb: img,
    strSource: link,
    strYoutube: video,
    strInstructions: ins,
  } = surpriseMeal;

  return (
    <CommonLayout img={img} name={name} link={link} video={video} ins={ins} />
  );
};

export default Surprise;
