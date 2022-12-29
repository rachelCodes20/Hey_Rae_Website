import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/LinkedIn';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hey, I'm Rachel</h2>
        <div className="prompt">
          <p>
            A software Engineer with full stack training and a great passion for user
            experience!
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      
      <h1>Skills</h1>
      <ul className="list">
        <li className="item"></li>
        <h2>Frontend</h2>
        <span>React, Svelte, Scss, HTML, CSS</span>
        <li className="item"></li>
        <h2>Backend</h2>
        <span>NodeJS, MongoDB, MySQL, Webpack, Parcel </span>
        <h2>Languages</h2>
        <span>Javascript</span>
      </ul>
    </div>
  );
}

export default Home;
