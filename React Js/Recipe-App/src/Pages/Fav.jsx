import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../Components/RecipeCard";

const Fav = () => {
  // Pulling the saved recipes from localStorage
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 border-b border-gray-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Your <span className="text-orange-500">Favorites</span>
          </h1>
          <p className="text-gray-400 mt-2">
            All the recipes you loved and saved for later.
          </p>
        </div>

        {/* The Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorite.length > 0 ? (
            favorite.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))
          ) : (
            /* Empty State: Takes up the whole width of the grid */
            <div className="col-span-full text-center py-24 bg-gray-900 rounded-3xl border border-gray-700 shadow-xl">
              <div className="text-6xl mb-6 animate-pulse">💔</div>
              <h2 className="text-3xl font-bold text-white mb-3">
                No favorites yet!
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                You haven't saved any recipes to your favorites. Go explore and
                find something delicious to cook!
              </p>
              <Link
                to="/recipes"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                Explore Recipes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
