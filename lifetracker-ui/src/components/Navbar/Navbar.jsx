import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';
import './Navbar.css';

function Navbar( {loggedIn}) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> 
        <img
            src="https://lifetracker.up.railway.app/assets/codepath-f1b3e41a.svg"
            alt="Logo"
          />
        
        </Link>
      </div>
      <NavLinks loggedIn={loggedIn} />
    </nav>
  );
}

export default Navbar;