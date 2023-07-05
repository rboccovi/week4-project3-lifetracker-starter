import React from 'react';

const NutritionForm = () => {
  const [name, setName] = React.useState('');
  const [calories, setCalories] = React.useState(1);
  const [imageUrl, setImageUrl] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [error, setError] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !calories || !category) {
      setError('Please fill in all required fields');
      return;
    }

    // Perform submit logic here
    setSubmitting(true);
  };

  return (
    <div className="nutrition-form">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="form-input"
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(parseInt(e.target.value))}
          placeholder="Calories"
        />
        <input
          className="form-input"
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <input
          className="form-input"
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <button className="submit-nutrition" type="submit">Save</button>
      </form>
    </div>
  );
};

export default NutritionForm;
