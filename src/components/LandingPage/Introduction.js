import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333; /* Set the color to a dark shade */
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555; /* Set the color to a slightly darker shade */
`;

const Introduction = () => {
  return (
    <IntroContainer>
      <Title>Interview Project: Building a ReactJS Application with API Integration</Title>
      <Description>
        In this interview project, you will be tasked with building a simple ReactJS application that
        connects to a RESTful API to display data from an external service. This project is designed to
        assess your skills in developing front-end applications, integrating external services, and
        working with RESTful APIs.
        <br />
        <br />
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
    </IntroContainer>
  );
};

export default Introduction;
