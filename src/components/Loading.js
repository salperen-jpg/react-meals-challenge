import React from 'react';
import styled from 'styled-components';
const Loading = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 6rem);
  display: grid;
  place-items: center;
  .loading {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 3px solid var(--grey-100);
    border-top-color: var(--primary-500);
    animation: spinner 0.6s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
