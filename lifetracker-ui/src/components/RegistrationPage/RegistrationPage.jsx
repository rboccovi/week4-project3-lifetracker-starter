import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegistrationPage = ({handleRegistration}) => {
  


  return (
    <div className="registration-page">
      <RegistrationForm handleRegistration={handleRegistration} />
    </div>
  );
};

export default RegistrationPage;
