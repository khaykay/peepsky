import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made with &nbsp;
        <img src={HeartIcon} alt="love icon" />
        &nbsp; by &nbsp;
        <span>big tummy kosi</span>
      </p>
    </footer>
  );
}

export default Footer;
