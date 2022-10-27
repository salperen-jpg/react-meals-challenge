import React from 'react';
import styled from 'styled-components';
const SectionTitle = ({ title }) => {
  return (
    <Wrapper className='section-title'>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  margin-bottom: 2rem;
  text-align: center;
  h1 {
    font-family: var(--secondary-font);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  .underline {
    height: 0.2rem;
    width: 7rem;
    background-color: #f12502;
    margin: 0 auto;
  }
`;
export default SectionTitle;
