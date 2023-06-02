import React, { useState } from "react";

import "./CSS/NightMode.css";

function NightModeToggle() {
  const [nightMode, setNightMode] = useState(false);

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
