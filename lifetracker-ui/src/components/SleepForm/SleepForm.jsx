import React, { useState } from 'react';
import './SleepForm.css'


const SleepForm = ({handleRegistration}) => {
const [ Starttime, setStarttime]= useState("");
const [ Endtime, setEndtime]= useState("");





  const handleSubmit =  async (e) => {
    e.preventDefault();
  }
    
  

  return (
    <div className="Sleep-form">
      <form onSubmit={handleSubmit}>
        <label> Start Time </label>
        <input
          type= "datetime-local"
          name="date"
          value={Starttime}
          onChange={(e) => setStarttime(e.target.value)}
          className="form-input"
          placeholder="Email"
        />


       

<label>  End Time </label>
        <input
          type="datetime-local"
          name="date"
          value={Endtime}
          onChange={(e) => setEndtime(e.target.value)}
          className="form-input"
          placeholder="Email"
        />


  

    
       

        <button type="submit" className="submit-Sleep">
         Save
        </button>
      </form>
    </div>
  );
};

export default SleepForm;
