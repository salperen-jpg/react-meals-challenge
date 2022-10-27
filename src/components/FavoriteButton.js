import React from 'react';
import styled from 'styled-components';
import { MdFavorite } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';
const FavoriteButton = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        className='btn fav-btn'
        onClick={() => dispatch(toggleFavorite())}
      >
        <MdFavorite />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .fav-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: sizeUp 3s linear infinite;
    z-index: 999;
  }

  @keyframes sizeUp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default FavoriteButton;
