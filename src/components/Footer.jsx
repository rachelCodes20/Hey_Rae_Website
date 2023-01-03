import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com/_rachelcodes">
          <TwitterIcon />
        </a>
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
      <p>&copy; 2022 </p>
    </div>
  );
}

export default Footer;
