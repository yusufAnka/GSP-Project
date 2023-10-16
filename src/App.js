// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/LandingPage/Navbar';
import Introduction from './components/LandingPage/Introduction';
import ApiData from './components/ApiData/ApiData';
import Users from './components/Users/User'; 
import Comments from './components/Comments/Comment';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/api-data" element={<ApiData />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} /> {/* Add this line for the new route */}
      </Routes>
    </Router>
  );
};

export default App;
