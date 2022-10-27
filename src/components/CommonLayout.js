import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
const CommonLayout = ({ img, name, ins, link, video }) => {
  const [isShowMore, setIsShowMore] = React.useState(false);
  return (
    <Wrapper>
      <div className='section-center'>
        <Link to='/' className='btn go-home'>
          Go home
        </Link>
        <SectionTitle title={name} />
      </div>
      <div className='grid-layout'>
        <div className='random-food'>
          <img src={img} alt='' />
          <div className='random-food-info'>
            <p className='ins'>
              <span className='att'>name :</span>
              <span>{name}</span>
            </p>
            <p>
              <span className='att'>Instructions :</span>
              <span className='ins'>
                {isShowMore ? `${ins}` : `${ins?.substring(0, 200)}...`}
                <button
                  className=' btn read-btn'
                  onClick={() => setIsShowMore(!isShowMore)}
                >
                  {isShowMore ? 'show less' : 'read more'}
                </button>
              </span>
            </p>
            <div className='btn-container'>
              <a href={link} rel='noreferrer' className='btn' target='_blank'>
                see more
              </a>
              <a href={video} rel='noreferrer' className='btn' target='_blank'>
                watch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-layout {
    min-height: calc(100vh - 20rem);
    display: grid;
    place-items: center;
  }
  .random-food {
    width: 90vw;
    max-width: 60rem;
    display: grid;
    gap: 2rem;
    p {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 1.25rem;
      margin-bottom: 1rem;
      .att {
        color: red;
        text-transform: capitalize;
        font-weight: 600;
        font-family: var(--secondary-font);
      }
      .ins {
        line-height: 1.5;
      }
    }
    .read-btn {
      display: inline-block;
      background-color: transparent;
      box-shadow: none;
      color: var(--primary-500);
    }
    .btn-container {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: center;
      button {
        padding: 0.75rem 1.5rem;
      }
      button:nth-child(2) {
        background-color: #f3f300;
      }
      button:hover:nth-child(2) {
        background-color: #dddd00;
      }
    }
  }
  .go-home {
    display: inline;
  }
  @media (min-width: 1000px) {
    .random-food {
      grid-template-columns: 400px 1fr;
      img {
        object-fit: cover;
      }
    }
  }
`;

export default CommonLayout;
