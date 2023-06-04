import React from "react";
import thumb from "../icons/thumb.svg";
import "./CSS/Footer.css";

import data from "../MockData/data";

function Footer() {
  const { footer } = data;

  const { links } = data.footer;

  // function openLinkedInProfile() {
  //   window.open("https://www.linkedin.com/in/eneskarateke/", "_blank");
  // }

  // function openGithubProfile() {
  //   window.open("https://github.com/eneskarateke", "_blank");
  // }

  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer-text ">{footer.text}</div>

        <nav className="footer-nav">
          <div className="e-mail">
            <img src={thumb} alt="logo" />
            <a
              href="mailto:eneskarateke@gmail.com"
              className="e-mail-text"
              rel="noreferrer"
            >
              {links.email}
            </a>
          </div>

          <div className="social-links">
            <a
              href="www.google.com"
              className="nav-blog"
              target="_blank"
              rel="noreferrer"
            >
              {links.blog}
            </a>

            <a
              href="https://github.com/eneskarateke"
              className="nav-git"
              target="_blank"
              rel="noreferrer"
            >
              {links.git}
            </a>
            <a
              href="https://www.linkedin.com/in/eneskarateke/"
              className="nav-linked"
              target="_blank"
              rel="noreferrer"
            >
              {links.linkedin}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
