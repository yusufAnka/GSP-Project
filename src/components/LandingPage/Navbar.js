// components/LandingPage/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/api-data">Posts</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/comments">Comments</NavLink>
      </NavLinks>
      <Title>GSP Project</Title>
    </NavContainer>
  );
};

export default Navbar;
