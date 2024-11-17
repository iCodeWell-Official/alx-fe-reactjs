import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Zustand action
  const navigate = useNavigate(); // React Router navigation

  const handleDelete = () => {
    // Delete the recipe from the store
    deleteRecipe(id);

    // Navigate back to the home page (or another route)
    navigate("/");
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
