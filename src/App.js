import React, { useContext } from "react";
import "./Components/CSS/reset.css";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import NightModeToggle from "./Components/NightModeToggle";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import LanguageToggle from "./Components/LanguageToggle";

import { NightModeContext } from "./NightModeContext";

function App() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  return (
    <div className={`App ${nightMode ? "night" : ""} `}>
      <div className="footer-haric">
        <NightModeToggle />
        <LanguageToggle />
        <Header />
        <Hero />
        <Skills />
        <hr className="horizontal-line" />
        <Profile />
        <hr className="horizontal-line" />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
