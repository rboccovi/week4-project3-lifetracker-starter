import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NutritionCard from '../NutritionCard/NutritionCard';
import NotFound from '../NotFound/NotFound';

const NutritionDetail = () => {
  const { nutritionId } = useParams();
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNutritionDetail = async () => {
      try {
        const response = await axios.get(`/nutrition/id/${nutritionId}`);
        setNutrition(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching nutrition detail:', error);
        setLoading(false);
      }
    };

    fetchNutritionDetail();
  }, [nutritionId]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!nutrition) {
    return <NotFound />;
  }

  return (
    <div className="nutrition-detail">
      <NutritionCard nutrition={nutrition} />
    </div>
  );
};

export default NutritionDetail;
