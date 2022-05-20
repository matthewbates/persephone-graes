import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoNoText.png";
import Placeholder from "../assets/Pizza.jpeg";
import "../styles/Home.css";
import Title from "../assets/TextWhite.png";

function Home() {
  return (
    // backgroundImage: `url(${Title})`
    <div className="home">
      <div className="headerContainer">
        <div className="homepage-info">
          <img src={Title} style={{ width: "300px", height: "120px" }} />
        </div>
        <div className="home-button">
          <Link to="/">
            <button>DOWNLOAD MENU</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
