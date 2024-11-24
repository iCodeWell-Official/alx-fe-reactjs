import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList.jsx";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
