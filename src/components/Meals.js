import React from 'react';
import Loading from './Loading';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Meal from './Meal';
import { useSelector } from 'react-redux';

const Meals = () => {
  const { isLoading, meals } = useSelector((store) => store.meals);

  if (isLoading) {
    return <Loading />;
  }

  if (meals.length < 1) {
    return (
      <div className='section-center page-100'>
        <h1>No meals found ! </h1>
      </div>
    );
  }
  return (
    <Wrapper>
      <SectionTitle title='meals' />
      <div className='section-center'>
        {meals.map((meal) => {
          return <Meal key={meal.idMeal} {...meal} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    gap: 1.5rem;
  }
`;

export default Meals;
