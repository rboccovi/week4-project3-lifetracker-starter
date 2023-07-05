import React from 'react';
import NutritionForm from '../NutritionForm/NutritionForm';

const NutritionNew = ({ appState, setAppState }) => {
  return (
    <div className="nutrition-new">
      <NutritionForm />
    </div>
  );
};

export default NutritionNew;
