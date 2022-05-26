import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  if (pathname === "./about") {
    return null;
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {/* input scrollToTop on the restaurant title */}
            <SocialLogo to="/">Persepone Grae's</SocialLogo>
            <WebsiteRights>
              Persepone Grae's © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                //   input social media link below
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                //   input social media link below
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}
