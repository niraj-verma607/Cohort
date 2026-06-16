import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 font-sans flex flex-col justify-center">
      {/* --- Hero Section --- */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Discover & Share{" "}
            <span className="text-orange-500">Amazing Recipes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your personal digital cookbook. Find new favorites, save the ones
            you love, and share your own culinary creations with the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/recipes"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300 w-full sm:w-auto text-center"
            >
              Explore Recipes
            </Link>
            <Link
              to="/create-recipe"
              className="bg-gray-700 text-gray-200 px-8 py-3 rounded-lg font-semibold shadow-lg border border-gray-600 hover:bg-gray-600 transition duration-300 w-full sm:w-auto text-center"
            >
              Create Your Own
            </Link>
          </div>
        </div>
      </section>

      {/* --- App Features Section --- */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Feature 1 */}
          <div className="p-8 bg-gray-700 rounded-2xl shadow-lg border border-gray-600 hover:border-orange-500 transition duration-300">
            <div className="text-4xl mb-4">🍳</div>
            <h3 className="text-2xl font-bold text-white mb-3">Create</h3>
            <p className="text-gray-300 leading-relaxed">
              Got a secret family recipe? Add your ingredients and steps easily
              to share or keep private.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-gray-700 rounded-2xl shadow-lg border border-gray-600 hover:border-orange-500 transition duration-300">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Save</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Found something delicious? Save it to your favorites for quick
              access next time you cook.
            </p>
            <Link
              to="/fav"
              className="text-orange-400 hover:text-orange-300 font-medium inline-block transition"
            >
              View Favorites &rarr;
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-gray-700 rounded-2xl shadow-lg border border-gray-600 hover:border-orange-500 transition duration-300">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-3">Discover</h3>
            <p className="text-gray-300 leading-relaxed">
              Browse through hundreds of recipes from chefs and home cooks
              around the globe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
