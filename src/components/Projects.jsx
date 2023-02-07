import React from 'react';
import ProjectItem from '../components/ProjectItem';
import image from '../assets/react-form-snippet.png';
import image2 from '../assets/giph-api-snippet.png';
import image3 from '../assets/work-in-progress.png';
import '../styles/Projects.scss';

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div>
        <a href="https://github.com/rachelCodes20/reactForm">
          <ProjectItem
            name="Styled React Form"
            alt="green and purple ReactJS user form"
            image={image}
          />
        </a>
        <a href="https://github.com/rachelCodes20/gifAPI">
          <ProjectItem
            name="GifAPI"
            alt="3 GIPHS from a giphy api search + puppy"
            image={image2}
          />
        </a>
        <a href="https://github.com/rachelCodes20/gifAPI">
          <ProjectItem
            name="NexjtJS Blog"
            alt="Currently In Progress"
            image={image3}
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
