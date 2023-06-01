import React from "react";
import "./CSS/Hero.css";

function Hero() {
  function openLinkedInProfile() {
    window.open("https://www.linkedin.com/in/eneskarateke/", "_blank");
  }

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="cizgili-isim">
          <div className="cizgi"></div>
          <p className="isim"> Enes Hamza Karateke</p>
        </div>
        <h1 className="baslik"> Creative thinker Minimalism lover</h1>
        <p className="info">
          Hi, I'm Enes. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable front-end products with
          great user experiences. Let's shake hands with me.
        </p>

        <nav className="hero-buttons">
          <button>
            <span className="button-text">Hire me</span>
          </button>
          <button>
            <span className="button-text">Github</span>
          </button>
          <button onClick={openLinkedInProfile}>
            <span className="button-text">Linkedin</span>
          </button>
        </nav>
      </div>

      <img className="pp" alt="profile" src="images/pp.jpg" />
    </div>
  );
}

export default Hero;
