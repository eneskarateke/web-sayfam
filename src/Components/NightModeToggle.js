import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./CSS/NightMode.css";
import { NightModeContext } from "../NightModeContext";

function NightModeToggle() {
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const toggleNightMode = () => {
    const newNightMode = !nightMode;
    setNightMode(newNightMode);

    if (newNightMode) {
      toast.success("Dark mode is active", { theme: "dark" });
    } else {
      toast.success("Light mode is active", { theme: "light" });
    }
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
        theme={nightMode ? "dark" : "light"} // Set theme dynamically
      />
    </>
  );
}

export default NightModeToggle;
