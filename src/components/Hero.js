import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-image: url('https://occ-0-2691-2186.1.nflxso.net/dnm/api/v6/6AYY3YQ27rhZ0e3cG4accG7jTTU/AAAABWwJjJ9j3999qOxKdfHjBJEB-EqCZxK-9lEdlBTBtkE9DxK_ahP-rjjnJQCv65rW99x9H6VzG0R-9eh8qj91j9QA4APn.jpg?r=41e');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  max-width: 500px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.5);
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(51, 51, 51, 0.9);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Stranger Things</Title>
      <Description>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</Description>
      <Buttons>
        <Button>Play</Button>
        <Button>More Info</Button>
      </Buttons>
    </HeroContainer>
  );
};

export default Hero;