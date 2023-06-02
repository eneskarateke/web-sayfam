import React from "react";
import data from "../MockData/data";

import "./CSS/header.css";

function Header() {
  const { logoText, navBar } = data.header;
  return (
    <div className="header">
      <div className="logo ">{logoText}</div>

      <div className="nav">
        <p className="nav-skills"> {navBar.skills}</p>
        <p className="nav-projects"> {navBar.projects}</p>
        <div className="frame-5">
          <p className="nav-hire-me"> {navBar.hire}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
