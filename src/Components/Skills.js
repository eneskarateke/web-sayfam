import React from "react";
import data from "../MockData/data";

import "./CSS/Skills.css";

function Skills() {
  return (
    <div className="skillContainer">
      <h2 className="baslik">Skills </h2>
      <div className="skiller">
        {Object.keys(data.skills).map((i) => (
          <div className="skill" key={i}>
            <h1 className="skill-name">{data.skills[i].name}</h1>
            <p className="skill-description">{data.skills[i].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
