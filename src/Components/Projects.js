import React from "react";

import data from "../MockData/data";
import "./CSS/Projects.css";

function Projects() {
  const { projectSection } = data;
  const projects = Object.keys(projectSection.projects).map(
    (key) => projectSection.projects[key]
  );

  return (
    <div className="projectsContainer">
      <div className="projectLabel">{projectSection.label}</div>
      <div className="mappedProjects">
        {projects.map((project, index) => (
          <div className="projects" key={index}>
            <img className="projectIMG" src={project.imgSrc} alt="sitephoto" />
            <div className="projectName">{project.projectName}</div>
            <p className="projectDescription">{project.description}</p>
            <div className="tools">
              {project.tools.map((tool, toolIndex) => (
                <p className="tool" key={toolIndex}>
                  {tool}
                </p>
              ))}
            </div>
            <div className="links">
              {project.links.labels.map((link, linkIndex) => (
                <a
                  href={project.links.links[linkIndex]}
                  target="_blank"
                  className="link"
                  key={linkIndex}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
