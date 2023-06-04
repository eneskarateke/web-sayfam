import React from "react";
import "./CSS/Skills.css";
import { useSelector } from "react-redux";
function Skills() {
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { label, skiller } = data.skills;

  return (
    <div className="skillContainer">
      <h2 className="baslik">{label}</h2>
      <div className="skiller">
        {Object.keys(skiller || {}).map((key) => {
          const skill = skiller[key];
          return (
            <div className="skill" key={key}>
              <h1 className="skill-name">{skill?.name}</h1>
              <p className="skill-description">{skill?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
