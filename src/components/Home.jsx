import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hey, I'm Rachel</h2>
        <div className="prompt">
          <p>
            A software Engineer with full stack training and a great passion for
            the user experience!
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend</h2>
            <span>React, Svelte, Scss, HTML, CSS</span>
          </li>
          <li className="item">
            <h2>Backend</h2>
            <span>NodeJS, MongoDB, MySQL, Webpack, Parcel </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
