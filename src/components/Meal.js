import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdCategory, MdFlag, MdFoodBank } from 'react-icons/md';
import { BsHeartFill } from 'react-icons/bs';
import { addToFavorites } from '../features/favorite/favoriteSlice';
import { useDispatch } from 'react-redux';
const Meal = ({
  idMeal: id,
  strArea: home,
  strCategory: category,
  strMealThumb: img,
  strMeal: meal,
}) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={img} alt={meal} />
        <span
          className='icon-fav'
          onClick={() => dispatch(addToFavorites({ id, meal, img }))}
        >
          <BsHeartFill />
        </span>
      </div>
      <div className='meal-info'>
        <p>
          <MdCategory className='icon yellow' />
          {category}
        </p>
        <p>
          <MdFoodBank className='icon blue' />
          {meal}
        </p>
        <p>
          <MdFlag className='icon red' />
          {home}
        </p>
      </div>
      <div className='container'>
        <Link to={`/meals/${id}`} className='btn details-btn'>
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  .img-container {
    position: relative;
    background-color: var(--primary-600);
    isolation: isolate;
  }
  .img-container:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--primary-600);
    opacity: 0.5;
  }
  .icon-fav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    opacity: 0;
    transition: var(--transition);
    z-index: 9;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  &:hover .icon-fav {
    opacity: 1;
  }
  &:hover .img-container {
    opacity: 0.9;
  }

  .img-container,
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .meal-info {
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      .icon {
        font-size: 1.5rem;
      }
      .yellow {
        color: green;
      }
      .red {
        color: red;
      }
      .blue {
        color: blue;
      }
    }
  }
  .container {
    text-align: center;
  }
  .details-btn {
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
  }
  &:hover {
    box-shadow: var(--shadow-3);
    scale: 1.01;
  }
`;

export default Meal;
