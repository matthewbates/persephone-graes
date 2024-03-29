import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled.img`
  margin-left: 30px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRoute)`
  font-family: "Dalliance";
  color: #f1f2f2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #f1f2f2;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
`;

export const NavBtn = styled.nav`
  font-family: "Iskoola Pota";
  font-size: 48px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRoute)`
  font-family: "Iskoola Pota";
  border-radius: 25px;
  background: #f1f2f2;
  white-space: nowrap;
  padding: 0px 18px;
  color: #414042;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #f1f2f2;
  }
`;
