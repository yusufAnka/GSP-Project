import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: #333;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <Content>
        <Title>Welcome to My React App</Title>
        <p>This is a simple ReactJS application fetching data from an external API.</p>
      </Content>
    </LandingPageContainer>
  );
};

export default LandingPage;
