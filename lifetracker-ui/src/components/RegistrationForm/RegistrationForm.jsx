import React, { useState } from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};

    if (!formData.email.includes('@')) {
      validationErrors.email = 'oops! Invalid email format';
    }

    if (formData.password !== formData.passwordConfirm) {
      validationErrors.password = "Passwords don't match";
    }

    // If there are validation errors, set the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Call the signupUser function with the formData
    signupUser(formData);
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Email"
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Username"
        />

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Last Name"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Password"
        />

        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleInputChange}
          className="form-input"
          placeholder="Confirm Password"
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit" className="submit-registration">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
