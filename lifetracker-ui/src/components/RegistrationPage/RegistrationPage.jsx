import React from 'react';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const isLoggedIn = false; // Replace with your logic to determine if a user is logged in or not

  if (isLoggedIn) {
    // Redirect the user to the activity page if already logged in
    return <Redirect to="/activity" />;
  }

  return (
    <div className="registration-page">
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
