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
import jwtDecode from "jwt-decode";
import { useEffect } from 'react';


function App() {
   const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [username, setUsername] = useState();
  const [ sleeptime, setSleeptime]= useState("");
  const [ waketime, setWaketime]= useState("");
  const [user_id, setUserId]= useState(0)


  
  const handleSleep = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/sleep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sleeptime, waketime, user_id}),
      });
      const data = await response.json();
      console.log("sanity check", data);
    } catch (error) {
      console.error("Error:", error);
    }
    setSleeptime("");
    setWaketime("");
  };







  useEffect(() => {
    const checkLoggedIn = () => {
      //check if the user is logged in when the user first accesses the webapp
      const token = localStorage.getItem("token");
      if (token) {
        //decode the stored token
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.username);

  
        if (decodedToken.exp * 1000 > Date.now()) {
          setLoggedIn(true);
        } else {
          //Token has expired, log out the user
          handleLogout();
        }
      }
    };

    checkLoggedIn();
  }, []);


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

        const { token } = data;
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token); //a way to get username from token
        setUsername(decodedToken.username);

         
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
        body: JSON.stringify({  email, password, user_id }),
      });
      //wait for the response
      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        setUserId(data.user.id);
        localStorage.setItem("token", token);
       

      
      
    
      
      
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

  





  const handleLogout = () => {
    // Remove the lifetracker_token from local storage
    localStorage.removeItem('token');



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
                <Route path="/activity" element={<ActivityPage isProcessing={isProcessing} sleeptime={sleeptime} />} />
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/sleep" element={<SleepPage  setWaketime={setWaketime}
                setSleeptime={setSleeptime} sleeptime={sleeptime} waketime={waketime}
                handleSleep={handleSleep}
                
                />} />
                <Route path="/exercise" element={<ExercisePage />} />
                <Route path="/nutrition" element={<NutritionPage />} />
                
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              {/* <Route path="/activity" element={<ActivityPage />} />
              <Route path="/nutrition" element={<NutritionPage />} /> */}
              <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
              {/* <Route path="/sleep" element={<SleepPage />} />
              <Route path="/exercise" element={<ExercisePage />} /> */}
              <Route path="/register" element={<RegistrationPage handleRegistration={handleRegistration} />} />
            </Routes>
          )}
        </main>
      </Router>
    </div>
  );
}

export default App;