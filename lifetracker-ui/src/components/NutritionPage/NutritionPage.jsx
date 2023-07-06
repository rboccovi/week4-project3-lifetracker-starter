
import React, { useState } from 'react';
import NutritionForm from '../NutritionForm/NutritionForm';

const NutritionPage= () => {
  const [nutritionEntries, setNutritionEntries] = useState([]);
  const [activityData, setActivityData] = useState(null);

  const addNutritionEntry = (newEntry) => {
    // Add the new entry to the nutrition entries list
    setNutritionEntries([...nutritionEntries, newEntry]);
  };

  const fetchActivityData = () => {
    // Perform the logic to fetch activity data and update the state
    // Once you have the updated activity data, call setActivityData with the new data
  };

  return (
    <div>
      <h1>Nutrition Tracker</h1>
      <NutritionForm addNutritionEntry={addNutritionEntry} fetchActivityData={fetchActivityData} />
      {/* Render other components that use nutritionEntries and activityData */}
    </div>
  );
};

export default NutritionPage;
