import React, { useContext } from "react";

import "./CSS/NightMode.css";
import { NightModeContext } from "../NightModeContext";

function NightModeToggle() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className={`container ${nightMode ? "night-mode" : ""}`}>
      <div
        className={`toggle-button ${nightMode ? "active" : ""}`}
        onClick={toggleNightMode}
      >
        <div className="slider"></div>
      </div>
    </div>
  );
}

export default NightModeToggle;
