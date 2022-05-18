import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoNoText.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="headerContainer">
        <h2>Persephone Grae's</h2>
        <h2>Cafe & Juice Bar</h2>
        <Link to="/">
          <button> VIEW MENU </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
