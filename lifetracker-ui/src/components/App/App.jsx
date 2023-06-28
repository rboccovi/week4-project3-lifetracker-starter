import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import ActivityPage from '../ActivityPage/ActivityPage';
import NutritionPage from '../NutritionPage/NutritionPage';
import LoginPage from '../LoginPage /LoginPage';
import SleepPage from '../SleepPage/SleepPage'
import ExercisePage from '../ExercisePage/ExercisePage';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import RegistrationPage from '../RegistrationPage/RegistrationPage';


function App() {
  // Usestate Variables
  const [appState, setAppState] = useState({});

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path= "/Sleep" element={<SleepPage/>} />
          <Route path= "/Exercise" element={<ExercisePage/>} />
          <Route path= "/Register" element={<RegistrationPage/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;


