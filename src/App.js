import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/LandingPage/Navbar';
import Introduction from './components/LandingPage/Introduction';
import Users from './components/Users/User'; 
import Comments from './components/Comments/Comment';
import Posts from './components/Posts/Post';
import Photos from './components/Photos/Photos';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} /> 
        <Route path="/photos" element={<Photos />} /> 
      </Routes>
    </Router>
  );
};

export default App;
