import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  // 1. Your existing user-created recipes
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  });

  // 2. NEW: State to hold external API recipes
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Function to fetch and format API data
    const fetchApiRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes?limit=12");
        const result = await response.json();

        // Format the API data to perfectly match YOUR recipe structure!
        const formattedRecipes = result.recipes.map((recipe) => ({
          id: `api-${recipe.id}`, // Added 'api-' prefix so IDs don't clash with your nanoid()
          title: recipe.name,
          image: recipe.image,
          chef: "Global Chef", // API doesn't have a chef, so we give a default name
          category: recipe.mealType[0] || "dinner",
          desc: `A highly rated ${recipe.cuisine} dish. Prep time: ${recipe.prepTimeMinutes} mins.`,
          ingr: recipe.ingredients.join("\n"), // Converts array to line breaks
          inst: recipe.instructions.join("\n"), // Converts array to line breaks
        }));

        setApiData(formattedRecipes);
      } catch (error) {
        console.error("Failed to fetch API recipes:", error);
      }
    };

    fetchApiRecipes();
  }, []);

  return (
    // Make sure to export apiData here so other components can use it!
    <recipecontext.Provider value={{ data, setData, apiData, setApiData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
