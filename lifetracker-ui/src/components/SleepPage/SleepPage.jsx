import React from "react";
import SleepForm from '../SleepForm/SleepForm';
import './SleepPage.css';

function SleepPage({ setWaketime, setSleeptime, waketime, sleeptime, handleSleep, sleepData }) {
  return (
    <div className="SleepPage">
      <div className="sleep-hero">
        <h1 className="sleep-hero-title">Good Night's Sleep</h1>
        <p className="sleep-hero-subtitle">Wake up refreshed and energized</p>
      </div>
      <SleepForm
        setWaketime={setWaketime}
        setSleeptime={setSleeptime}
        sleeptime={sleeptime}
        waketime={waketime}
        handleSleep={handleSleep}
        sleepData={sleepData}
      />
    </div>
  );
}

export default SleepPage;
