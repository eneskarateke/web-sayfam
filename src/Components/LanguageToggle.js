import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { toggleLanguage } from "../actions";
import { NightModeContext } from "../NightModeContext";

import "./CSS/LanguageToggle.css";

function LanguageToggle() {
  const { nightMode } = useContext(NightModeContext);

  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const handleClick = () => {
    toast.info("Loading...", {
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
    });

    setTimeout(() => {
      dispatch(toggleLanguage());
      toast.success("Language changed successfully.", {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
      });
    }, 1000);
  };

  return (
    <>
      <p className="languageToggle" onClick={handleClick}>
        {currentLanguage === "english" ? (
          <>
            <span className={`dil ${nightMode ? "night" : ""} `}>TÜRKÇE </span>
            <span className="dilEki">'YE GEÇ</span>
          </>
        ) : (
          <>
            <span className="dilEki">SWITCH TO </span>
            <span className={`dil ${nightMode ? "night" : ""} `}>ENGLISH</span>
          </>
        )}
      </p>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </>
  );
}

export default LanguageToggle;
