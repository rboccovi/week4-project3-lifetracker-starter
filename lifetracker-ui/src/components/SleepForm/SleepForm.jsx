import React, { useState } from 'react';
import './SleepForm.css';

const SleepForm = ({ sleeptime, setSleeptime, waketime, setWaketime, handleSleep }) => {
  const [savedData, setSavedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSleep();

    // Save the input data
    setSavedData({
      sleeptime,
      waketime,
    });
  };

  return (
    <div className="Sleep-form">
      <form onSubmit={handleSubmit}>
        <label> Start Time </label>
        <input
          type="datetime-local"
          name="date"
          value={sleeptime}
          onChange={(e) => setSleeptime(e.target.value)}
          className="form-input"
          placeholder="Start Time"
          required
        />

        <label> End Time </label>
        <input
          type="datetime-local"
          name="date"
          value={waketime}
          onChange={(e) => setWaketime(e.target.value)}
          className="form-input"
          placeholder="End Time"
          required
        />

        <button type="submit" className="submit-Sleep">
          Save
        </button>

        {savedData && (
          <div>
            <p>
              Sleep start: {savedData.sleeptime}
              <br />
              Sleep end: {savedData.waketime}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SleepForm;



