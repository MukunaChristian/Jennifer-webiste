import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/partials/NavBar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/your-logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-buttons">
        <Link to="/home" className="nav-button">Promise</Link>

        <Link to="/loveStoryTimeline" className="nav-button">Timeline</Link>
        {/* Use Link component for navigation */}
        <button className="nav-button">Contact</button>

      </div>
    </div>
  );
}

export default Navbar;
