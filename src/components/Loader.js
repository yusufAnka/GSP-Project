import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <p>Loading...</p>
    </StyledLoader>
  );
};

export default Loader;
