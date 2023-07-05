import React from 'react';
import { Link } from 'react-router-dom';
// import Loading from './Loading';
import NutritionFeed from '../NutritionFeed/NutritionFeed';

const NutritionOverview = ({ appState, setAppState }) => {
  const { error, isLoading } = appState;

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="nutrition-overview">
      <Link to="/nutrition/create">Record Nutrition</Link>
      <NutritionFeed nutritions={appState.nutritions} />
    </div>
  );
};

export default NutritionOverview;
