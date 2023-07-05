import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css'


const NavLinks = ({loggedIn}) => {
  const logoutUser = () => {
    // Remove the lifetracker_token from local storage
    localStorage.removeItem('lifetracker_token');
    // Refresh the page to reset user data
    window.location.reload();
  };

  // const isLoggedIn = false // Replace with your logic to determine if a user is logged in or not

  return (
    <div className="nav-links">
      <Link to="/activity">Activity</Link>
      <Link to="/nutrition">Nutrition</Link>
      <Link to="/exercise">Exercise</Link>
      <Link to="/sleep"> Sleep</Link>
      {loggedIn ? (
        <button className="signout-button" onClick={logoutUser}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <button className="signin-button">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default NavLinks;