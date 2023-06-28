import React, { useState, useEffect } from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in (e.g., by validating a token)
    const checkLoggedInStatus = () => {
      // Replace this with your actual authentication logic
      const userToken = localStorage.getItem('userToken');
      if (userToken) {
        setIsLoggedIn(true);
      }
    };

    checkLoggedInStatus();
  }, []);

  if (isLoggedIn) {
    return <Redirect to="/activity" />;
  }

  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
