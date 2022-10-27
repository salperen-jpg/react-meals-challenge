import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import CommonLayout from '../components/CommonLayout';
import { fetchSingleMeal } from '../features/meal/mealSlice';
import { useDispatch, useSelector } from 'react-redux';
const SingleMeal = () => {
  const { id } = useParams();
  const { isLoading, singleMeal } = useSelector((store) => store.meals);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSingleMeal(id));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  const {
    strMeal: name,
    strMealThumb: img,
    strSource: link,
    strYoutube: video,
    strInstructions: ins,
  } = singleMeal;

  return (
    <>
      <CommonLayout img={img} name={name} link={link} video={video} ins={ins} />
    </>
  );
};

export default SingleMeal;
