import React, { useState, useEffect } from 'react';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = ({handleLogin}) => {
  
  return (
    <div className="login-page">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;