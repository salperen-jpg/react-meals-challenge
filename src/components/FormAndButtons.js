import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../features/meal/mealSlice';
const FormAndButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.meals);

  const handleSurprise = () => {
    setTimeout(() => {
      navigate('/surprise');
    }, 1000);
  };

  return (
    <Wrapper>
      <div className='section-center'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            value={query}
            onChange={(e) => dispatch(handleChange(e.target.value))}
            placeholder='search for meal'
          />
        </form>
        <button className='btn search-btn'>Search</button>
        <button className='btn random-btn' onClick={handleSurprise}>
          surprise me
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: flex;
    gap: 0.5rem;
  }
  input {
    padding: 0.375rem 0.775rem;
    border: none;
    outline: none;
    appearance: none;
    color: inherit;
    font-size: 1rem;
    letter-spacing: var(--spacing);
  }
`;
export default FormAndButtons;
