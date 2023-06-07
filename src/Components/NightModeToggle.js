import React, { useContext } from "react";

import "./CSS/NightMode.css";
import { NightModeContext } from "../NightModeContext";

function NightModeToggle() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <div className="darkModeContainer">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={toggleNightMode}
            checked={nightMode}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <p onClick={toggleNightMode} className="darkModeText">
        {nightMode ? "LIGHT MODE" : "DARK MODE"}
      </p>
    </>
  );
}

export default NightModeToggle;
