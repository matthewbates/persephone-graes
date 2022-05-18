import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Footer.css";

const today = new Date();
const name = "Enter website name here";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <InstagramIcon /> <FacebookIcon />
      </div>
      <p>
        © {today.getFullYear()}:<i> {name}</i>
      </p>
    </div>
  );
}
