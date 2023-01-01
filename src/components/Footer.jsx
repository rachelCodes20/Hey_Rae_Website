import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <TwitterIcon />
        <LinkedInIcon />
      </div>
      <p>&copy; 2022 </p>
    </div>
  );
}

export default Footer;
