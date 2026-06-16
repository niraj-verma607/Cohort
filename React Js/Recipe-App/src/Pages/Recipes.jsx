import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { recipecontext } from "../Context/RecipeContext";
import RecipeCard from "../Components/RecipeCard"; // Update path if your folder structure is different

const Recipes = () => {
  const { data } = useContext(recipecontext);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-700 pb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              All <span className="text-orange-500">Recipes</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Discover, cook, and enjoy delicious meals.
            </p>
          </div>
          <Link
            to="/create-recipe"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg transition duration-300"
          >
            + Add New Recipe
          </Link>
        </div>

        {/* Recipe Grid Layout */}
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          /* Empty State if no recipes exist */
          <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-700 shadow-inner">
            <div className="text-6xl mb-4">🍽️</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              No recipes found
            </h2>
            <p className="text-gray-400 mb-6">
              It looks a little empty in here. Be the first to share a recipe!
            </p>
            <Link
              to="/create-recipe"
              className="text-orange-500 hover:text-orange-400 font-semibold"
            >
              Create your first recipe &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
