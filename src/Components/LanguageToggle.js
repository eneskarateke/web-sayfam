import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../actions";

function LanguageToggle() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const handleClick = () => {
    dispatch(toggleLanguage());
  };

  return (
    <button onClick={handleClick}>
      {currentLanguage === "english" ? "Türkçe'ye geç" : "İngilizce'ye geç"}
    </button>
  );
}

export default LanguageToggle;
