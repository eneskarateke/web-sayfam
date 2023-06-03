import React from "react";
import "./CSS/Hero.css";

import data from "../MockData/data";

import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";

function Hero() {
  const { hero } = data;
  const { buttons } = data.hero;

  function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/eneskarateke/", "_blank");
  }

  function openGithubProfile() {
    window.open("https://github.com/eneskarateke", "_blank");
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="cizgili-isim">
          <div className="cizgi"></div>
          <p className="isim"> {hero.name}</p>
        </div>
        <div className="anaBaslik"> {hero.text}</div>
        <p className="info">{hero.info}</p>

        <nav className="hero-buttons">
          <button>
            <span className="button-text">{buttons.hire}</span>
          </button>
          <button onClick={openGithubProfile}>
            <span className="button-text-with-icon">
              <img src={github} alt="github-icon" />
              {buttons.git}
            </span>
          </button>
          <button onClick={openLinkedInProfile}>
            <span className="button-text-with-icon">
              <img src={linkedin} alt="linkedin-icon" />
              {buttons.linkedin}
            </span>
          </button>
        </nav>
      </div>
      <div className="pp"></div>
    </div>
  );
}

export default Hero;
