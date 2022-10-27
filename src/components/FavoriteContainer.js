import React from 'react';
import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import FavoriteMeal from './FavoriteMeal';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/favorite/favoriteSlice';
const FavoriteContainer = () => {
  const { isFavoriteOpen, favoriteMeals } = useSelector(
    (store) => store.favorite
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isFavoriteOpen) {
      document.body.className = 'noScroll';
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isFavoriteOpen]);

  return (
    <Wrapper>
      <div
        className={`${
          isFavoriteOpen ? 'favorite-container show' : 'favorite-container'
        }`}
      >
        <div className='favorite-content'>
          <button
            className='close-btn btn'
            onClick={() => dispatch(toggleFavorite())}
          >
            <MdOutlineClose />
          </button>
          <SectionTitle title='Favorites' />
        </div>

        {favoriteMeals.length === 0 ? (
          <h2 className='no-fav-food'> There is no favorite food</h2>
        ) : (
          <div className='favorites'>
            {favoriteMeals.map((meal) => {
              return <FavoriteMeal key={meal.id} {...meal} />;
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .favorite-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: var(--primary-100);
    transform: translateX(100%);
    transition: var(--transition);
    overflow-y: scroll;
  }
  .show {
    transform: translateX(0);
    z-index: 9999;
  }
  .favorite-content {
    margin-top: 6rem;
    padding: 1rem;
    padding-top: 3rem;
    position: relative;
    overflow: hidden;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    background-color: transparent;
    box-shadow: none;
    color: red;
  }
  .no-fav-food {
    padding: 1rem;
    font-family: var(--secondary-font);
    max-width: 15rem;
    margin: auto;
    margin-top: 2rem;
    text-align: center;
    color: var(--primary-500);
  }
`;

export default FavoriteContainer;
