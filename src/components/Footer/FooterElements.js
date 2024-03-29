import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  /* make this #414042 upon project completion */
  background-color: black;
  bottom: 0;
  position: fixed;
  width: 100%;
`;
export const FooterWrap = styled.div`
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 10px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  font-family: "Dalliance";
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.6em;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
