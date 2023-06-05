import React, { useContext } from "react";
import "./CSS/Skills.css";
import { NightModeContext } from "../NightModeContext";

import { useSelector } from "react-redux";

function Skills() {
  const { nightMode } = useContext(NightModeContext);

  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { label, skiller } = data.skills;

  return (
    <div className="skillContainer">
      <h2 className={`baslik ${nightMode ? "night" : ""} `}>{label}</h2>
      <div className="skiller">
        {Object.keys(skiller || {}).map((key) => {
          const skill = skiller[key];
          return (
            <div className="skill" key={key}>
              <h1 className={`skill-name ${nightMode ? "night" : ""} `}>
                {skill?.name}
              </h1>
              <p className={`skill-description ${nightMode ? "night" : ""} `}>
                {skill?.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
