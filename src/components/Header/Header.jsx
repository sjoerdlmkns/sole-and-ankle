import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <StyledLogo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

// Styled version of the Logo component
const StyledLogo = styled(Logo)`
  flex-shrink: 0; /* Prevent the logo from shrinking */
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center; /* Centers items vertically */
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  /* Position logo on the left and nav in the center */
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  gap: 26px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
