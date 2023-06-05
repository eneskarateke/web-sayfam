import React, { useContext } from "react";

import "./CSS/NightMode.css";
import { NightModeContext } from "../NightModeContext";

import DarkModeToggle from "react-dark-mode-toggle";

function NightModeToggle() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className="darkModeContainer">
      <DarkModeToggle
        onChange={toggleNightMode}
        checked={nightMode}
        size={50}
      />
      <p className="darkModeText">{nightMode ? "LIGHT MODE" : "DARK MODE"}</p>
    </div>
  );
}

export default NightModeToggle;
