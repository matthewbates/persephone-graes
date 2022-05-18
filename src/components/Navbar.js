import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LogoNoText.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  function onMouseEnter() {
    window.innerHeight < 960 ? setDropdown(false) : setDropdown(true);
  }

  function onMouseLeave() {
    window.innerHeight < 960 ? setDropdown(false) : setDropdown(false);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>Menu</li>
          <ul>
            <li>
              <NavLink to={"/breakfast"}>Breakfast</NavLink>
            </li>
            <li>
              <NavLink to={"/sandwiches"}>Hot & Cold Sandwiches</NavLink>
            </li>
            <li>
              <NavLink to={"/salads_wraps"}>Salads & Wraps</NavLink>
            </li>
            <li>
              <NavLink to={"/sides_drinks"}>Sides & Drinks</NavLink>
            </li>
            <li>
              <NavLink to={"/juices"}>Juices</NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

// <div className="navbar">
//   <div className="leftSide" id={openLinks ? "open" : "close"}>
//     <img src={Logo} />
//     <div className="hiddenLinks">
//       <Link to="/"> Home </Link>
//       <Link to="/menu"> Menu </Link>
//       <Link to="/juices"> Juices </Link>
//       <Link to="/contact"> Contact </Link>
//     </div>
//   </div>
//   <div className="rightSide">
//     <Link to="/"> Home </Link>
//     <Link to="/menu">
//       Menu <i className="fas fa-caret-down"></i>
//       {dropdown && <Dropdown />}
//     </Link>
//     <Link to="/juices"> Juices </Link>
//     <Link to="/contact"> Contact </Link>
//     <button onClick={toggleNavbar}>
//       <ReorderIcon />
//     </button>
//   </div>
// </div>
