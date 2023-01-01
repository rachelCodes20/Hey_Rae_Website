import React from 'react';
import ProjectItem from '../components/ProjectItem';
import image from '../assets/react-form-snippet.png';
import './Projects.scss';

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="Styled React Form" image={image} />
      </div>
    </div>
  );
}

export default Projects;
