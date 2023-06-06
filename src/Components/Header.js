import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NightModeContext } from "../NightModeContext";

import "./CSS/header.css";

function Header() {
  const { nightMode } = useContext(NightModeContext);

  function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/eneskarateke/", "_blank");
  }

  const currentLanguage = useSelector((state) => state.currentLanguage);
  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { logoText, navBar } = data.header;

  return (
    <div className={`header ${nightMode ? "night-mode" : ""} `}>
      <div className={`logo ${nightMode ? "night" : ""} `}>{logoText}</div>

      <div className="nav">
        <p className={`nav-skills frame-5 ${nightMode ? "night" : ""} `}>
          {navBar?.skills}
        </p>

        <p className={`nav-projects frame-5 ${nightMode ? "night" : ""} `}>
          {navBar?.projects}
        </p>

        <p
          onClick={openLinkedInProfile}
          className={`nav-hire-me frame-5 ${nightMode ? "night" : ""} `}
        >
          {navBar?.hire}
        </p>
      </div>
    </div>
  );
}

export default Header;
