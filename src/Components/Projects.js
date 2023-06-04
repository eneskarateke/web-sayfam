import React from "react";
import "./CSS/Projects.css";
import { useSelector } from "react-redux";

function Projects() {
  const currentLanguage = useSelector((state) => state.currentLanguage);

  const data = useSelector((state) => state.data.data[currentLanguage]);

  const { projectSection } = data;

  const { projects } = data.projectSection;

  return (
    <div className="projectsContainer">
      <div className="projectLabel">{projectSection?.label}</div>
      <div className="mappedProjects">
        {Object.keys(projects).map((key, index) => {
          const project = projects[key];
          return (
            <div className="projects" key={index}>
              <img
                className="projectIMG"
                src={project?.imgSrc}
                alt="sitephoto"
              />
              <div className="projectName">{project?.projectName}</div>
              <p className="projectDescription">{project?.description}</p>
              <div className="tools">
                {project?.tools.map((tool, toolIndex) => (
                  <p className="tool" key={toolIndex}>
                    {tool}
                  </p>
                ))}
              </div>
              <div className="links">
                {project?.links.labels.map((link, linkIndex) => (
                  <a
                    href={project?.links.links[linkIndex]}
                    target="_blank"
                    className="link"
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
