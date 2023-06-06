import React, { useContext } from "react";
import "./CSS/Hero.css";
import { NightModeContext } from "../NightModeContext";

import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";

import { useSelector } from "react-redux";

function Hero() {
  const { nightMode } = useContext(NightModeContext);

  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

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
          <div className={`cizgi ${nightMode ? "night" : ""} `}></div>
          <p className={`isim ${nightMode ? "night" : ""} `}>{hero.name}</p>
        </div>
        <div className={`anaBaslik ${nightMode ? "night" : ""} `}>
          {hero?.text}
        </div>
        <p className={`info ${nightMode ? "night" : ""} `}>{hero?.info}</p>

        <nav className="hero-buttons">
          <button
            onClick={openLinkedInProfile}
            className={`heroButton ${nightMode ? "night" : ""} `}
          >
            <span className="button-text">{buttons?.hire}</span>
          </button>
          <button
            className={`heroButton ${nightMode ? "night" : ""} `}
            onClick={openGithubProfile}
          >
            <span className="button-text-with-icon">
              <img
                className={`social-icons ${nightMode ? "night" : ""} `}
                src={github}
                alt="github-icon"
              />
              {buttons?.git}
            </span>
          </button>
          <button
            className={`heroButton ${nightMode ? "night" : ""} `}
            onClick={openLinkedInProfile}
          >
            <span className="button-text-with-icon">
              <img
                className={`social-icons ${nightMode ? "night" : ""} `}
                src={linkedin}
                alt="linkedin-icon"
              />
              {buttons?.linkedin}
            </span>
          </button>
        </nav>
      </div>
      <div className="pp"></div>
    </div>
  );
}

export default Hero;
