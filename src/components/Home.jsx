import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.scss';

function Home() {
  return (
    
    <div className="home">
      <div className="about">
        <h2>I'm Rachel!</h2>
        <div className="prompt">
          <p>
            A software Engineer with full stack training and a great passion for
            the user experience!
          </p>
          <a href="https://www.linkedin.com/in/raecollins">
            <LinkedInIcon />
          </a>
          <a href="mailto:rscollins2.0@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/rachelCodes20">
            <GithubIcon />
          </a>
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
