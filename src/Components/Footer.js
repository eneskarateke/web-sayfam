import React from "react";
import thumb from "../icons/thumb.svg";
import "./CSS/Footer.css";

import data from "../MockData/data";

function Footer() {
  const { footer } = data;

  const { links } = data.footer;
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer-text ">{footer.text}</div>

        <nav className="footer-nav">
          <div className="e-mail">
            <img src={thumb} alt="logo" />
            <a className="e-mail-text"> {links.email} </a>
          </div>

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
