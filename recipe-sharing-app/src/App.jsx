import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
      <AddRecipeForm />

    </>
  )
}

export default App
