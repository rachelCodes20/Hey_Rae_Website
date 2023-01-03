import React from 'react';
import '../styles/Projects.scss';
import ssImage from '../assets/svelte-slicer-snippet.png';
import ProjectItem from '../components/ProjectItem';

function OpenSource() {
  return (
    <div className="projects">
      <h1>Open Source Product</h1>
      <div className="projectList">
        <p>
          Launched in spring of 2022, <i>Svelte Slicer</i> is an open-source
          Chrome Developer Tool for visualizing component and state changes in
          Svelte applications, which allows users to capture, store and traverse
          detailed snapshots of application state to aid in debugging. My
          responsibilities included design of the front panels and writing code
          that presents state diffs to the frontend.&nbsp;
          <a
            alt="link to Svelte Slicer article on Medium.com"
            href="https://svelteslicer.medium.com/"
          >
            Svelte Slicer - Medium
          </a>
        </p>
        <a href="https://chrome.google.com/webstore/detail/svelte-slicer/ohimeoplnpnoeapbnmgeddijpfobbijl?hl=en-US">
          <ProjectItem
            name="Svelte Slicer"
            image={ssImage}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default OpenSource;
