import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-800 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      {/* Big Animated 404 Text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-tight mb-2 animate-pulse">
        404
      </h1>

      {/* Fun Icon/Emoji */}
      <div className="text-5xl md:text-6xl mb-6">🍳🔥</div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Oops! Recipe Not Found
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
        It looks like the page you're looking for was taken off the menu or
        doesn't exist. Let's get you back to the kitchen!
      </p>

      {/* Call to Action Button */}
      <Link
        to="/"
        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
