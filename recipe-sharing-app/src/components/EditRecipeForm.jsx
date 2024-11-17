import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams(); // Retrieve the recipe ID from the route
  const navigate = useNavigate();

  // Get the recipe from the Zustand store
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  // Zustand action to update a recipe
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Local state to manage form inputs
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the recipe in the Zustand store
    updateRecipe(recipe.id, { title, description });

    // Redirect to the recipe details page
    navigate(`/recipe/${recipe.id}`);
  };

  // If the recipe doesn't exist, show an error
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new title"
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter new description"
          required
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
