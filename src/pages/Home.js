import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoNoText.png";
import "../styles/Home.css";
import Title from "../assets/TextWhite.png";

function Home() {
  return (
    // backgroundImage: `url(${Title})`
    <div className="home" style={{ backgroundColor: "black" }}>
      <div className="headerContainer">
        <div className="homepage-info">
          <img src={Title} style={{ width: "250px", height: "100px" }} />
        </div>
        <div className="home-button">
          <Link to="/">
            <button>MENU </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
