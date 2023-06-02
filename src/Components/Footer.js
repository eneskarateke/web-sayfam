import React from "react";
import "./CSS/Footer.css";

import data from "../MockData/data";

function Footer() {
  const { footer } = data;

  const { links } = data.footer;
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer-text ">{footer.text}</div>

        <nav className="nav">
          <a className="e-mail"> {links.email} </a>
          <div className="social-links">
            <a className="nav-blog"> {links.blog}</a>

            <a className="nav-git"> {links.git}</a>
            <a className="nav-linked"> {links.linkedin}</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
