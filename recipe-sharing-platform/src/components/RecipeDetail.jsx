import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../recipe-data.json';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // Enhanced recipe data with more details
  const enhancedRecipes = {
    1: {
      ingredients: [
        "400g spaghetti",
        "200g pancetta or guanciale",
        "4 large eggs",
        "100g Pecorino Romano cheese",
        "Freshly ground black pepper",
        "Salt"
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook spaghetti until al dente.",
        "While pasta cooks, crisp pancetta in a large pan until golden.",
        "In a bowl, whisk eggs with grated Pecorino and black pepper.",
        "Drain pasta, reserving some cooking water.",
        "Quickly mix hot pasta with egg mixture, adding pasta water to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper."
      ]
    },
    2: {
      ingredients: [
        "500g chicken breast",
        "1 cup yogurt",
        "2 tbsp garam masala",
        "1 can crushed tomatoes",
        "1/2 cup heavy cream",
        "Chopped cilantro",
        "Onion, garlic, ginger"
      ],
      instructions: [
        "Marinate chicken in yogurt and spices for 2 hours.",
        "Grill or pan-fry marinated chicken until cooked.",
        "In a separate pan, sauté onions, garlic, and ginger.",
        "Add tomatoes and simmer to create the base sauce.",
        "Add grilled chicken and cream, simmer for 10 minutes.",
        "Garnish with cilantro and serve with rice."
      ]
    },
    3: {
      ingredients: [
        "Mixed vegetables (bell peppers, broccoli, carrots)",
        "Tofu or chicken",
        "Soy sauce",
        "Sesame oil",
        "Garlic",
        "Ginger",
        "Cornstarch"
      ],
      instructions: [
        "Chop all vegetables into bite-sized pieces.",
        "Heat wok or large pan with sesame oil.",
        "Stir-fry protein (tofu or chicken) until golden.",
        "Add vegetables and stir-fry on high heat.",
        "Mix soy sauce, garlic, ginger for sauce.",
        "Add sauce to pan, thicken with cornstarch.",
        "Serve hot with rice or noodles."
      ]
    },
    4: {
      ingredients: [
        "Dark chocolate",
        "Butter",
        "Eggs",
        "Sugar",
        "Flour",
        "Vanilla extract",
        "Powdered sugar for dusting"
      ],
      instructions: [
        "Melt chocolate and butter together.",
        "Whisk eggs with sugar until light and fluffy.",
        "Fold in melted chocolate mixture.",
        "Gently mix in flour.",
        "Pour into greased ramekins.",
        "Bake at 425°F for 12-14 minutes.",
        "Let rest for 1 minute, then invert onto plate.",
        "Dust with powdered sugar and serve immediately."
      ]
    }
  };

  if (!recipe) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const recipeDetails = enhancedRecipes[recipe.id];

  return (
    <div className="bg-recipe-bg min-h-screen p-6">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="mb-4 inline-block text-recipe-accent hover:underline"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-96 object-cover"
          />
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-recipe-text mb-4">
              {recipe.title}
            </h1>
            
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Difficulty: {recipe.difficulty}</span>
              <span>Cooking Time: {recipe.cookingTime}</span>
            </div>
            
            <p className="text-gray-700 mb-6">{recipe.summary}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {recipeDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {recipeDetails.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;