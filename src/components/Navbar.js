import React from 'react';
import styled from 'styled-components';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <Link to='/'>
          <span>MEAL</span>
        </Link>
      </div>
      <FavoriteButton />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: var(--primary-100);
  .nav-center {
    width: min(90vw, 1170px);
    margin: 0 auto;
  }
  span {
    font-family: var(--secondary-font);
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: var(--spacing);
    background-image: linear-gradient(90deg, red, blue);
    background-clip: text;
    color: transparent;
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

export default Navbar;
