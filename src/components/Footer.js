import React from "react";
import { SocialIcon } from "react-social-icons";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import "../styles/Footer.css";

const today = new Date();
const name = "Enter website name here";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-media">
        <FacebookIcon
          url="https://www.linkedin.com/in/matthew-bates-71b7bb79/"
          target="_blank"
        />
        <InstagramIcon />
      </div>
      <p>
        © {today.getFullYear()}:<i> {name}</i>
      </p>
    </div>
  );
}
