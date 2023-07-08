import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = ({handleRegistration}) => {
const [ name, setName]= useState("");
const [ email, setEmail] = useState ("");
const [ password, setPassword]= useState("")
const [ confirmPassword, setConfirmPassword]= useState("")
const [username, setUserName]= useState ("")
const [ lastname, setLastName] = useState ("")


const navigate= useNavigate();


  const handleSubmit =  (e) => {
    e.preventDefault(); handleRegistration( name, email, password,username,lastname); 
  navigate("/activity")}
    
  

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="Email"
        />

        <input
          type="text"
          name="userame"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="form-input"
          placeholder="Username"
        />

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          className="form-input"
          placeholder="Last Name"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          placeholder="Password"
        />

        <input
          type="password"
          name="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-input"
          placeholder="Confirm Password"
        />
       

        <button type="submit" className="submit-registration">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
