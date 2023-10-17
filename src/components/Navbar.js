import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "../styles/Navbar.style";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  // Handle link click to close the extended navbar in mobile view
  const handleLinkClick = () => {
    setExtendNavbar(false);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Title as={Link} to="/">
            GSP Project
          </Title>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            {/* Navigation links with onClick handler to close the extended navbar */}
            <NavbarLink to="/" onClick={handleLinkClick}>
              Home
            </NavbarLink>
            <NavbarLink to="/posts" onClick={handleLinkClick}>
              Posts
            </NavbarLink>
            <NavbarLink to="/users" onClick={handleLinkClick}>
              Users
            </NavbarLink>
            <NavbarLink to="/photos" onClick={handleLinkClick}>
              Photos
            </NavbarLink>
            <NavbarLink to="/comments" onClick={handleLinkClick}>
              Comments
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              data-testid="open-links-button"
            >
              {/* Dynamic icon based on the extended state */}
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      
      {extendNavbar && (
        <NavbarExtendedContainer>
          {/* Extended navigation links with onClick handler to close the extended navbar */}
          <NavbarLinkExtended to="/" onClick={handleLinkClick}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/posts" onClick={handleLinkClick}>
            Posts
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/users" onClick={handleLinkClick}>
            Users
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/photos" onClick={handleLinkClick}>
            Photos
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/comments" onClick={handleLinkClick}>
            Comments
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
