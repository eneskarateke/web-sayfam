import React, { useContext, useEffect } from "react";
// import "./Components/CSS/reset.css";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import NightModeToggle from "./Components/NightModeToggle";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import LanguageToggle from "./Components/LanguageToggle";

import { useDispatch, useSelector } from "react-redux";

import { sendData } from "./actions";
import data from "./MockData/data";

import { NightModeContext } from "./NightModeContext";

function App() {
  const { nightMode } = useContext(NightModeContext);

  const dispatch = useDispatch();

  const fetchedData = useSelector((state) => state.data);

  useEffect(() => {
    if (!fetchedData) {
      dispatch(sendData(data));
    }
  }, [dispatch, fetchedData]);

  if (!fetchedData) {
    return <div class="loader">Loading...</div>;
  }

  return (
    <div className={`App ${nightMode ? "night" : ""} `}>
      <div className="footer-haric">
        <div className="modeSwitch">
          <NightModeToggle />
          <div className="modeSwitchLine">|</div>
          <LanguageToggle />
        </div>
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
