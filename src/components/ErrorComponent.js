import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #ffdddd;
  color: #cc0000;
  padding: 10px;
  border-radius: 5px;
`;

const ErrorComponent = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorComponent;
