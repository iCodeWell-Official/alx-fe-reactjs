import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    difficulty: 'Easy',
    cookingTime: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    // Summary validation
    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }

    // Ingredients validation
    const ingredientsList = formData.ingredients.trim().split('\n').filter(i => i.trim() !== '');
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please list at least 2 ingredients';
    }

    // Instructions validation
    const instructionsList = formData.instructions.trim().split('\n').filter(i => i.trim() !== '');
    if (instructionsList.length < 2) {
      newErrors.instructions = 'Please provide at least 2 preparation steps';
    }

    // Cooking time validation
    if (!formData.cookingTime.trim()) {
      newErrors.cookingTime = 'Cooking time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the data to a backend
      // For now, we'll just log the data and navigate
      console.log('Recipe Submitted:', formData);
      
      // Simulate adding to existing recipes
      const newRecipe = {
        ...formData,
        id: Date.now(), // Temporary ID
        image: `https://via.placeholder.com/300x200?text=${encodeURIComponent(formData.title)}`
      };

      // In a real app, you'd send this to a backend
      alert('Recipe Added Successfully!');
      navigate('/');
    }
  };

  return (
    <div className="bg-recipe-bg min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-recipe-text mb-6">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.title 
                  ? 'border-red-500 focus:ring-red-300' 
                  : 'border-gray-300 focus:ring-recipe-accent'}`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Summary Input */}
          <div>
            <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">
              Recipe Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              rows="3"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.summary 
                  ? 'border-red-500 focus:ring-red-300' 
                  : 'border-gray-300 focus:ring-recipe-accent'}`}
              placeholder="Briefly describe your recipe"
            ></textarea>
            {errors.summary && (
              <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
            )}
          </div>

          {/* Ingredients Input */}
          <div>
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.ingredients 
                  ? 'border-red-500 focus:ring-red-300' 
                  : 'border-gray-300 focus:ring-recipe-accent'}`}
              placeholder="List ingredients&#10;Example: 2 cups flour&#10;1 tsp salt"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions Input */}
          <div>
            <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${errors.instructions 
                  ? 'border-red-500 focus:ring-red-300' 
                  : 'border-gray-300 focus:ring-recipe-accent'}`}
              placeholder="List preparation steps&#10;Example: Preheat oven to 350°F&#10;Mix dry ingredients"
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Additional Details */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Difficulty Select */}
            <div>
              <label htmlFor="difficulty" className="block text-gray-700 font-semibold mb-2">
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-recipe-accent"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Cooking Time Input */}
            <div>
              <label htmlFor="cookingTime" className="block text-gray-700 font-semibold mb-2">
                Cooking Time
              </label>
              <input
                type="text"
                id="cookingTime"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                  ${errors.cookingTime 
                    ? 'border-red-500 focus:ring-red-300' 
                    : 'border-gray-300 focus:ring-recipe-accent'}`}
                placeholder="e.g., 45 mins"
              />
              {errors.cookingTime && (
                <p className="text-red-500 text-sm mt-1">{errors.cookingTime}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-recipe-accent text-white py-3 rounded-md hover:bg-red-600 transition-colors font-semibold"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;