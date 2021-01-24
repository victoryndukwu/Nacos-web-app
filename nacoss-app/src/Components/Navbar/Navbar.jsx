import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.elements";
// import { Link } from "react-router-dom";
import { FaDesktop, FaTimes, FaBars } from "react-icons/fa";
import { COLORS } from "./../../GlobalStyle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: COLORS.green }}>
        <Nav>
          <NavbarContainer>
            {/* desktop logo and nacos yabatech text */}
            <NavLogo to="/">
              <FaDesktop />
              YabaTech-NACOS
            </NavLogo>

            <HamburgerIcon onClick={handleClick}>
              {/* this ternary operation toggles the hamburger menu */}
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/executives">Leadership</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
