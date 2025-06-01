import React from 'react';
import '../styles/Projects.css';
import projectData from '../assets/data';

const Projects = () => {
  return (
    <div className="projects-section section fade-slide-up">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid stagger-children">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.projectName}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tech">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <button className="button">Live Demo</button>
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                <button className="button code-button">Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;