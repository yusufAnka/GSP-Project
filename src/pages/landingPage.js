import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const IntroContainer = styled.div`
  padding: 2rem;
  padding-bottom: 5rem;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease;
  margin: 2rem;
`;

const ContentContainer = styled.div`
  margin-top: 2rem;
`;

const Block = styled.div`
  background-color: ${(props) => props.backgroundColor || '#fff'};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled(Link)`
  background-color: #333;
  color: white;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  text-decoration: none; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Introduction = () => {
  return (
    <IntroContainer>
      <Title>Interview Project: Building a ReactJS Application with API Integration</Title>
      <ContentContainer>
        <Block backgroundColor="#fff">
          <Description>
            In this interview project, you will be tasked with building a simple ReactJS application that connects to a RESTful API to display data from an external service. This project is designed to assess your skills in developing front-end applications, integrating external services, and working with RESTful APIs.
          </Description>
        </Block>
        <Block backgroundColor="#f2f2f2">
          <Description>
            Project Requirements:
            <br />
            - Create a ReactJS application with a landing page and a component to fetch and display data from an external RESTful API.
            <br />
            - Use React Router for navigation and connect to the JSONPlaceholder API.
            <br />
            - Display the API data in a clear and user-friendly manner using tables, lists, or cards.
            <br />
            - Implement error handling for cases where the API request fails.
            <br />
            - Implement routing with React Router for different components.
            <br />
            - Style the application using CSS or styled-components for a visually appealing and user-friendly experience.
            <br />
            - Maintain clean and organized code with appropriate naming conventions and comments.
          </Description>
        </Block>
      </ContentContainer>
      <LearnMoreButton to="/">Learn More</LearnMoreButton>
    </IntroContainer>
  );
};

export default Introduction;
