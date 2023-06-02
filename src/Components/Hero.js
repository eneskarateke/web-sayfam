import React from "react";
import "./CSS/Hero.css";

import data from "../MockData/data";

function Hero() {
  const { hero } = data;
  const { buttons } = data.hero;

  function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/eneskarateke/", "_blank");
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="cizgili-isim">
          <div className="cizgi"></div>
          <p className="isim"> {hero.name}</p>
        </div>
        <h1 className="baslik"> {hero.text}</h1>
        <p className="info">{hero.info}</p>

        <nav className="hero-buttons">
          <button>
            <span className="button-text">{buttons.hire}</span>
          </button>
          <button>
            <span className="button-text">{buttons.git}</span>
          </button>
          <button onClick={openLinkedInProfile}>
            <span className="button-text">{buttons.linkedin}</span>
          </button>
        </nav>
      </div>

      <img className="pp" alt="profile" src="images/pp.jpg" />
    </div>
  );
}

export default Hero;
