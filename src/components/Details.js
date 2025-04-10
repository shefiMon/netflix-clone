import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api';

const DetailsContainer = styled.div`
  color: white;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Cast = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const SimilarMovies = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const SimilarMovie = styled.img`
  width: 200px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetchData(`/movie/${id}`);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <DetailsContainer>
      <Title>{movie.title}</Title>
      <Description>{movie.overview}</Description>
      <Cast>Cast: ...</Cast>
      <h2>Similar Movies</h2>
      <SimilarMovies>
        {/* Add similar movies here */}
      </SimilarMovies>
    </DetailsContainer>
  );
};

export default Details;