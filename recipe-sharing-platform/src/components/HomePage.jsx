import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../recipe-data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setRecipes(recipeData);
  }, []);

  return (
    <div className="bg-recipe-bg min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-recipe-text mb-8">
          Recipe Sharing Platform
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="bg-recipe-card rounded-lg shadow-recipe-card overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-recipe-text mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {recipe.summary}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <strong>Difficulty:</strong> {recipe.difficulty}
                  </span>
                  <span>
                    <strong>Time:</strong> {recipe.cookingTime}
                  </span>
                </div>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  className="mt-4 block w-full bg-recipe-accent text-white py-2 rounded hover:bg-red-600 transition-colors text-center"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;