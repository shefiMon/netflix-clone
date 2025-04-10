import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RowContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
  margin-right: 10px;
`;

const Card = styled.img`
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Row = ({ title, movies }) => {
  return (
    <RowContainer>
      <Title>{title}</Title>
      <Content>
        {movies.map((movie) => (
          <CardContainer key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
                effect="blur"
                style={{
                  width: '200px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </Link>
          </CardContainer>
        ))}
      </Content>
    </RowContainer>
  );
};

export default Row;