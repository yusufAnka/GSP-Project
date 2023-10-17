import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Title,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Navbar.style";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/posts"> Posts</NavbarLink>
            <NavbarLink to="/users"> Users</NavbarLink>
            <NavbarLink to="/photos"> Photos</NavbarLink>
            <NavbarLink to="/comments"> Comments</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Title>GSP Project</Title>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/posts"> Posts</NavbarLinkExtended>
          <NavbarLinkExtended to="/users"> Users</NavbarLinkExtended>
          <NavbarLinkExtended to="/photos"> Photos</NavbarLinkExtended>
          <NavbarLinkExtended to="/comments"> Comments</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
