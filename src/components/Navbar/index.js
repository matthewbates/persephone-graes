import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
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
          {/* <NavLogo> */}
          <img src={Logo} />
          {/* </NavLogo> */}
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/hero">Home</NavLinks>
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
    // <div className="navbar">
    //   <div className="leftSide" id={openLinks ? "open" : "close"}>
    //     <img src={Logo} />
    //     <div className="hiddenLinks">
    //       <Link to="/"> Home </Link>
    //       <Link to="/menu"> Menu </Link>
    //       <Link to="/contact"> Contact </Link>
    //     </div>
    //   </div>
    //   <div className="rightSide">
    //     <Link to="/"> Home </Link>
    //     <Link to="/menu">Menu</Link>
    //     <Link to="/contact"> Contact </Link>
    //     <button onClick={toggleNavbar}>
    //       <ReorderIcon />
    //     </button>
    //   </div>
    // </div>
  );
}
