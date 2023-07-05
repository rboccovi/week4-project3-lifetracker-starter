import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NutritionOverview from '../NutritionOverView/NutritionOverView';
import NutritionNew from '../NutritionNew/NutritionNew';
// import NutritionDetail from '../NutritionDetail/NutritionDetail';
import NotFound from '../NotFound/NotFound'
import './NutritionPage.css';

const NutritionPage = ({ appState, setAppState }) => {
  return (
    <div className="nutrition-page">
      <Routes>
        <Route path="/nutrition" element={<NutritionOverview appState={appState} setAppState={setAppState} />} />
        <Route path="/nutrition/create" element={<NutritionNew appState={appState} setAppState={setAppState} />} />
        <Route path="/nutrition/id/:nutritionId" element={<NutritionDetail appState={appState} setAppState={setAppState} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default NutritionPage;
