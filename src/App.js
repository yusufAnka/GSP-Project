import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import LandingPage from './pages/landingPage';
import Users from './components/Users/User'; 
import Comments from './components/Comments/Comment';
import Posts from './components/Posts/Post';
import Photos from './components/Photos/Photos';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} /> 
        <Route path="/photos" element={<Photos />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
