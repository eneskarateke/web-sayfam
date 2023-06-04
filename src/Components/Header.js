import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NightModeContext } from "../NightModeContext";

import "./CSS/header.css";

function Header() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const currentLanguage = useSelector((state) => state.currentLanguage);
  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { logoText, navBar } = data.header;

  return (
    <div className={`header ${nightMode ? "night-mode" : ""} `}>
      <div className={`logo ${nightMode ? "night" : ""} `}>{logoText}</div>

      <div className="nav">
        <p className={`nav-skills ${nightMode ? "night" : ""} `}>
          {navBar?.skills}
        </p>
        <p className={`nav-projects ${nightMode ? "night" : ""} `}>
          {navBar?.projects}
        </p>
        <div className={`frame-5 ${nightMode ? "night" : ""} `}>
          <p className={`nav-hire-me ${nightMode ? "night" : ""} `}>
            {navBar?.hire}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
