import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // You can perform the login request here
    // and handle success/error cases accordingly
    if (email === 'example@example.com' && password === 'password') {
      // Simulating successful login for the example
      console.log('Login successful!');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const validateEmail = () => {
    if (email && !email.includes('@')) {
      setErrorMessage('Invalid email');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
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
