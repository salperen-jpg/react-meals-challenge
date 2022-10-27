import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { MdFoodBank } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteFromFavorites } from '../features/favorite/favoriteSlice';
const FavoriteMeal = ({ img, meal, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div>
        <img src={img} alt='' />
        <p>
          <MdFoodBank className='icon blue'></MdFoodBank>
          {meal}
        </p>
      </div>
      <button
        className='btn delete-btn'
        onClick={() => dispatch(deleteFromFavorites(id))}
      >
        <FaTrashAlt icon />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid var(--primary-500);
  margin-bottom: 2rem;
  transition: var(--transition);
  img {
    width: 7rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-radius: 10px;
  }
  .icon {
    font-size: 1.5rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .icon.blue {
    color: blue;
  }
  .delete-btn {
    background-color: transparent;
    border: transparent;
    box-shadow: none;
    font-size: 1.5rem;
  }
  &:hover {
    background-color: var(--primary-50);
  }
`;
export default FavoriteMeal;
