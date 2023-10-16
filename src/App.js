import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/data" element={<DataComponent resource="posts" />} />
          <Route path="/error" element={<ErrorComponent />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
