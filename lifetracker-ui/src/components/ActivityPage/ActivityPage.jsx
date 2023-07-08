import React from "react";
import { Link } from 'react-router-dom';
import './ActivityPage.css';

function ActivityPage() {
  return (
    <div className="Activity-Page">
      <div className="activity-hero">
        <h1 className="activity-hero-title">Stay Active</h1>
        <p className="activity-hero-subtitle">Track your fitness and nutrition</p>
        <Link to="/exercise">
          <button className="activity-hero-button">ADD EXERCISE</button>
        </Link>
        <Link to="/sleep">
          <button className="activity-hero-button">LOG SLEEP</button>
        </Link>
        <Link to="/nutrition">
          <button className="activity-hero-button">RECORD NUTRITION</button>
        </Link>
      </div>

      <div className="total-excercise">
        <h2>Total Exercise Minutes</h2>
        <div className="Activity-card">
          <p>Exercise Time: 0 minutes</p>
        </div>
      </div>

      <div className="hour-sleep">
        <h2>Average Hours of Sleep</h2>
        <div className="Activity-card">
          <p>Hour of Sleep Time: 10 hours</p>
        </div>
      </div>

      <div className="avg-daily">
        <h2>Average Daily Calories</h2>
        <div className="Activity-card">
          <p>Daily Calories: 0 calories</p>
        </div>
      </div>

      <p></p>
    </div>
  );
}

export default ActivityPage;
