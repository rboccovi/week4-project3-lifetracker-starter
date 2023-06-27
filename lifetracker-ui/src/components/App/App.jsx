import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import ActivityPage from '../ActivityPage/ActivityPage';

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
          {/* Other routes */}
        </Routes>
      </Router>



      
    </div>
  );
}

export default App;

