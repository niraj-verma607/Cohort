import React, { useContext } from "react";
import { recipecontext } from "../Context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const ApiGallery = () => {
  // Pulling the fresh API data from context
  const { apiData } = useContext(recipecontext);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-b border-gray-700 pb-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Global <span className="text-orange-500">Inspiration</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Discover trending recipes fetched live from the web.
          </p>
        </div>

        {apiData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {apiData.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          /* Loading State while fetching from API */
          <div className="flex justify-center items-center py-20">
            <div className="text-xl text-orange-500 font-bold animate-pulse">
              Fetching delicious recipes... 🍳
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiGallery;
