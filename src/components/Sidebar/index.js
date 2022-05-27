import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SocialIcons,
  SocialIconLink,
} from "./SidebarElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/menu">Menu</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SocialIcons>
            <SocialIconLink
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact Us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
