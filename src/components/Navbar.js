import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  padding: 10px;
  color: white;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/data">Data</StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
