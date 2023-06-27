import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css'

function NavLinks() {
  const logoutUser = () => {
    // Remove the lifetracker_token from local storage
    localStorage.removeItem('lifetracker_token');
    // Refresh the page to reset user data
    window.location.reload();
  };

  const isLoggedIn = true; // Replace with your logic to determine if a user is logged in or not

  return (
    <div className="nav-links">
      <Link to="/activity">Activity</Link>
      <Link to="/nutrition">Nutrition</Link>
      <Link to="/resources">Resources</Link>
      {isLoggedIn ? (
        <button className="logout-button" onClick={logoutUser}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default NavLinks;
