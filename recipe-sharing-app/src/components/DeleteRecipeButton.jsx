import React from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import useRecipeStore from "./recipeStore"; // import useRecipeStore

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Access deleteRecipe from the store
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleDelete = () => {
    // Call deleteRecipe action
    deleteRecipe(id);

    // Redirect to the home page after deletion
    navigate("/");
  };

  return (
    <button onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
