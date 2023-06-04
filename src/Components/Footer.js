import React, { useContext } from "react";
import thumb from "../icons/thumb.svg";
import "./CSS/Footer.css";
import { useSelector } from "react-redux";

import { NightModeContext } from "../NightModeContext";

function Footer() {
  const { nightMode } = useContext(NightModeContext);
  const currentLanguage = useSelector((state) => state.currentLanguage);
  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { footer } = data;
  const { links } = data.footer;

  return (
    <div className={`footerContainer ${nightMode ? "night" : ""} `}>
      <div className={`footer ${nightMode ? "night" : ""} `}>
        <div className={`footer-text ${nightMode ? "night" : ""} `}>
          {footer?.text}
        </div>

        <nav className={`footer-nav ${nightMode ? "night" : ""} `}>
          <div className={`e-mail ${nightMode ? "night" : ""} `}>
            <img src={thumb} alt="logo" />
            <a
              href="mailto:eneskarateke@gmail.com"
              className={`e-mail-text ${nightMode ? "night" : ""} `}
              rel="noreferrer"
            >
              {links?.email}
            </a>
          </div>

          <div className={`social-links ${nightMode ? "night" : ""} `}>
            <a
              href="www.google.com"
              className={`nav-blog ${nightMode ? "night" : ""} `}
              target="_blank"
              rel="noreferrer"
            >
              {links?.blog}
            </a>

            <a
              href="https://github.com/eneskarateke"
              className={`nav-git ${nightMode ? "night" : ""} `}
              target="_blank"
              rel="noreferrer"
            >
              {links?.git}
            </a>
            <a
              href="https://www.linkedin.com/in/eneskarateke/"
              className={`nav-linked ${nightMode ? "night" : ""} `}
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
