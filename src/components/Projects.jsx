import React from 'react';
import ProjectItem from '../components/ProjectItem';
import image from '../assets/react-form-snippet.png';
import '../styles/Projects.scss';

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div >
        <a href="https://github.com/rachelCodes20/reactForm">
          <ProjectItem name="Styled React Form" image={image} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
