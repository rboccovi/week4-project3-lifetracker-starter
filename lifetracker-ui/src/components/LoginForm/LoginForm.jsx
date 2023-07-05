import React, { useState } from 'react';
import './LoginForm.css'
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate= useNavigate(); 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async  (e) => {
    e.preventDefault();
    handleLogin (email,password)
    navigate("/activity");
  }
  

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
        />
        <input
          className="form-input"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          required
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button className="submit-login" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;