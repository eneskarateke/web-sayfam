import React from "react";

import "./CSS/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo ">E</div>

      <div className="nav">
        <p className="nav-skills"> Skills</p>
        <p className="nav-projects"> Projects</p>
        <div className="frame-5">
          <p className="nav-hire-me"> Hire me!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
