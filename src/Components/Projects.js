import React, { useContext } from "react";
import "./CSS/Projects.css";
import { useSelector } from "react-redux";
import { NightModeContext } from "../NightModeContext";

function Projects() {
  const { nightMode } = useContext(NightModeContext);

  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { projectSection } = data;

  const { projects } = data.projectSection;

  const handleImageClick = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <div className="projectsContainer">
      <div className={`projectLabel ${nightMode ? "night" : ""} `}>
        {projectSection?.label}
      </div>
      <div className="mappedProjects">
        {Object.keys(projects).map((key, index) => {
          const project = projects[key];
          return (
            <div className="projects" key={index}>
              <img
                onClick={() => handleImageClick(project.links.links[1])}
                className="projectIMG"
                src={project?.imgSrc}
                alt="sitephoto"
              />
              <div className={`projectName ${nightMode ? "night" : ""} `}>
                {project?.projectName}
              </div>
              <p className={`projectDescription ${nightMode ? "night" : ""} `}>
                {project?.description}
              </p>
              <div className="tools">
                {project?.tools.map((tool, toolIndex) => (
                  <p
                    className={`tool ${nightMode ? "night" : ""} `}
                    key={toolIndex}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <div className="links">
                {project?.links.labels.map((link, linkIndex) => (
                  <a
                    href={project?.links.links[linkIndex]}
                    target="_blank"
                    className={`link ${nightMode ? "night" : ""} `}
                    key={linkIndex}
                    rel="noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
