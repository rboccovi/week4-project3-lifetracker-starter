import React from 'react';
import NutritionCard from '../NutritionCard/NutritionCard';

const NutritionFeed = ({ nutritions }) => {
  if (nutritions.length === 0) {
    return <div className="empty-message">Nothing here yet</div>;
  }

  return (
    <div className="nutrition-feed">
      {nutritions.map((nutrition) => (
        <NutritionCard key={nutrition.id} nutrition={nutrition} />
      ))}
    </div>
  );
};

export default NutritionFeed;
