import React from "react";
import thumb from "../icons/thumb.svg";
import "./CSS/Footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const currentLanguage = useSelector((state) => state.currentLanguage);
  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { footer } = data;
  const { links } = data.footer;

  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer-text">{footer?.text}</div>

        <nav className="footer-nav">
          <div className="e-mail">
            <img src={thumb} alt="logo" />
            <a
              href="mailto:eneskarateke@gmail.com"
              className="e-mail-text"
              rel="noreferrer"
            >
              {links?.email}
            </a>
          </div>

          <div className="social-links">
            <a
              href="www.google.com"
              className="nav-blog"
              target="_blank"
              rel="noreferrer"
            >
              {links?.blog}
            </a>

            <a
              href="https://github.com/eneskarateke"
              className="nav-git"
              target="_blank"
              rel="noreferrer"
            >
              {links?.git}
            </a>
            <a
              href="https://www.linkedin.com/in/eneskarateke/"
              className="nav-linked"
              target="_blank"
              rel="noreferrer"
            >
              {links?.linkedin}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
