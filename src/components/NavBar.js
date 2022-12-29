import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <div className="navbar" id={expandNav ? "open" : "closed"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNav((prev) => !prev)}>
          <ReorderIcon />
          </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/opensource">Open Source</Link>
      </div>
    </div>
  );
}

export default NavBar