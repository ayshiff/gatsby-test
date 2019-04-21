// @flow

import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

type title = {
  siteTitle: string
};

const StyledLink = styled(Link)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.main};
    color: white;
  }

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
`;

const NavBar = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 20px;
  top: 20px;
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
StyledLink.defaultProps = {
  theme: {
    main: "cadetblue"
  }
};

const Header = ({ siteTitle }: title) => {
  return (
    <nav className="bg-teal">
      <div>
        <div>
          <NavBar>
            <StyledLink
              to="/"
              style={{ textDecoration: "none" }}
            >
              Home
            </StyledLink>

            <StyledLink
              to="/projects"
              style={{ textDecoration: "none" }}
            >
              Projects
            </StyledLink>

            <StyledLink
              to="/contact"
              style={{ textDecoration: "none" }}
            >
              Contact
            </StyledLink>
          </NavBar>
        </div>
      </div>
    </nav>
  );
};

export default Header;
