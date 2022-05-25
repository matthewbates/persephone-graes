import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/LogoNoText.png";

export default function Navbar({ toggleSidebar }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <img src={Logo} />
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/menu">Menu</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
