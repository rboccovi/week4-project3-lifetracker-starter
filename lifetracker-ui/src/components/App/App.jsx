import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import ActivityPage from '../ActivityPage/ActivityPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import LoginPage from '../LoginPage/LoginPage';
import SleepPage from '../SleepPage/SleepPage';
import ExercisePage from '../ExercisePage/ExercisePage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);


  const handleRegistration = async (name, email, password, username, lastname) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, username, lastname }),
      });
      //wait for the response
      const data = await response.json();
      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
      } else {
        //Registration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  


  const handleLogin = async ( email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  email, password }),
      });
      //wait for the response
      const data = await response.json();
      if (response.ok) {
        //Registration successful
        setLoggedIn(true);
        console.log(data.message); //optional - display a success message
      } else {
        //Registration failed
        console.log(data.message); //optional - display error meesage
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  





  const logoutUser = () => {
    // Remove the lifetracker_token from local storage
    localStorage.removeItem('lifetracker_token');
    // Reset the login state
    setLoggedIn(false);
    // Refresh the page to reset user data
    window.location.reload();
  };

  const handleSignIn = () => {
    // Perform login logic here
    // Once the user is logged in, update the login state
    setLoggedIn(true);
  };








  

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar loggedIn={loggedIn} />
          {loggedIn ? (
            <div>
              <Routes>
                <Route path="/activity" element={<ActivityPage isProcessing={isProcessing} />} />
                <Route exact path="/" element={<LandingPage />} />
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/nutrition" element={<NutritionPage />} />
              <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
              <Route path="/sleep" element={<SleepPage />} />
              <Route path="/exercise" element={<ExercisePage />} />
              <Route path="/register" element={<RegistrationPage handleRegistration={handleRegistration} />} />
            </Routes>
          )}
        </main>
      </Router>
    </div>
  );
}

export default App;