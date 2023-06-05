import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../actions";
import { NightModeContext } from "../NightModeContext";

import "./CSS/LanguageToggle.css";

function LanguageToggle() {
  const { nightMode } = useContext(NightModeContext);

  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const handleClick = () => {
    dispatch(toggleLanguage());
  };

  return (
    <p className="languageToggle" onClick={handleClick}>
      {currentLanguage === "english" ? (
        <>
          <span className="dilEki">SWITCH TO </span>
          <span className={`dil ${nightMode ? "night" : ""} `}>ENGLISH</span>
        </>
      ) : (
        <>
          <span className={`dil ${nightMode ? "night" : ""} `}>TÜRKÇE </span>
          <span className="dilEki">'YE GEÇ</span>
        </>
      )}
    </p>
  );
}

export default LanguageToggle;
