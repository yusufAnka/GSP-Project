// components/LandingPage/Introduction.js
import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  padding: 2rem;
`;

const Introduction = () => {
  return (
    <IntroContainer>
      <h1>Welcome to My React API Project</h1>
      <p>This is a simple React application that connects to a RESTful API.</p>
    </IntroContainer>
  );
};

export default Introduction;
