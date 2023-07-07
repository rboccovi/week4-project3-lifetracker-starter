import React from "react";
import SleepForm from '../SleepForm/SleepForm'
import './SleepPage.css'



function SleepPage( {setWaketime, setSleeptime,waketime, sleeptime, handleSleep}) {
    return (

      <div className="SleepPage">
        <p> SLEEP ELEMENT WILL SHOW UP HERE
        </p>
        <SleepForm   setWaketime={setWaketime}
                setSleeptime={setSleeptime} sleeptime={sleeptime} waketime={waketime}
                handleSleep={handleSleep}

                
                /> 
      </div>
      
    );
  };





export default SleepPage 