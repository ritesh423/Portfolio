import React from "react";
import "./Projects.css";

const ProjectCard = ({
  projectName,
  projectDescription,
  imageUrl,
  repoUrl,
}) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <a className="project-external-link">
          <img src={imageUrl} alt="project" className="project-image" />
        </a>
      </div>

      <div className="project-details-container">
        <h2 className="project-heading">{projectName}</h2>
        <p className="project-details">{projectDescription}</p>
        <a
          href={repoUrl}
          className="project-yt-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Out!
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
