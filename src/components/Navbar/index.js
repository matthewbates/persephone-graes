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
  SocialIcons,
  SocialIconLink,
} from "./NavbarElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/Text/LogoNoText.png";

export default function Navbar({ toggleSidebar }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <img style={{ height: "70%", marginTop: "10px" }} src={Logo} />
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
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/Persephone-Graes-Cafe-Juice-Bar-100443859353584"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/persephone_graes_cafe/?igshid=YmMyMTA2M2Y="
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}
