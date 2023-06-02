import React from "react";
import data from "../MockData/data";

import "./CSS/Skills.css";

function Skills() {
  const { label, skiller } = data.skills;
  return (
    <div className="skillContainer">
      <h2 className="baslik">{label} </h2>
      <div className="skiller">
        {Object.keys(skiller).map((i) => (
          <div className="skill" key={i}>
            <h1 className="skill-name">{skiller[i].name}</h1>
            <p className="skill-description">{skiller[i].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
