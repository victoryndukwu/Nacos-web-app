import styled from "styled-components";
import { Container, COLORS } from "../../GlobalStyle";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${COLORS.white};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /* border-bottom: 1px solid ${COLORS.green}; */
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-start;
  width: 12rem;
  color: ${COLORS.green};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
`;
// the hamburger icon
//this will show only when the device screen is lesser than 960px
export const HamburgerIcon = styled.div`
  display: none;

  /* media query targeting screens lesser than 960px in width */

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
// Navigation menu
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  text-align: center;
  /* media query targeting screens lesser than 960px in width */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    /* enables the toggle of the nav menu  when clicked */
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: ${COLORS.green};
  }
`;

export const NavItem = styled.li`
  /* padding: 0 10px; */
`;

export const NavLink = styled(Link)`
  color: ${COLORS.green};
  text-decoration: none;
  padding: 0 10px;
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${COLORS.green};
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${COLORS.white};

    &:hover {
      border-bottom: none;
      color: ${COLORS.purple};
    }
  }
`;
//
